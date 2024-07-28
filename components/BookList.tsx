'use client';

import { useState } from 'react';

import { Button, Checkbox, Drawer, NativeSelect, NumberInput, Pagination } from '@mantine/core';

import { books } from '@/lib/placeholder-data';
import { Book, Category, SortBy } from '@/lib/definitions';
import BookCard from '@/components/BookCard';
import { IconFilter } from '@tabler/icons-react';


const BookList = ({ query }: { query: string }) => {
    const sortOptions = Object.values(SortBy);
    const categories = Object.values(Category);
    const publishers = Array.from(new Set(books.map(book => book.publisher)));

    const [drawerOpened, setDrawerOpened] = useState(false); // Filter drawer state
    const [sort, setSort] = useState(sortOptions[0]);
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(10);
    // Filters
    const [priceRange, setPriceRange] = useState<[number | null, number | null]>([null, null]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedPublishers, setSelectedPublishers] = useState<string[]>([]);

    const queryCleaned = query.trim().toLowerCase();
    const queryFilteredBooks = query ? books.filter((book) => {
        return book.title.toLowerCase().includes(queryCleaned) || book.author.toLowerCase().includes(queryCleaned);
    }) : books;

    // Sort books based on selected sort option
    const sortBook = (a: Book, b: Book) => {
        switch (sort) {
            case SortBy.TitleAsc:
                return a.title.localeCompare(b.title);
            case SortBy.TitleDesc:
                return b.title.localeCompare(a.title);
            case SortBy.AuthorAsc:
                return a.author.localeCompare(b.author);
            case SortBy.AuthorDesc:
                return b.author.localeCompare(a.author);
            case SortBy.PriceAsc:
                return a.price - b.price;
            case SortBy.PriceDesc:
                return b.price - a.price;
            default:
                return 0;
        }
    }

    // Filter books based on price range, selected categories and publishers
    const filterBooks = (book: Book) => {
        const inPriceRange = (priceRange[0] === null || book.price >= priceRange[0] * 100) && (priceRange[1] === null || book.price <= priceRange[1] * 100);
        const inSelectedCategories = selectedCategories.length === 0 || selectedCategories.includes(book.category);
        const inSelectedPublishers = selectedPublishers.length === 0 || selectedPublishers.includes(book.publisher);
        return inPriceRange && inSelectedCategories && inSelectedPublishers;
    }

    const sortedBooks = queryFilteredBooks.sort(sortBook).filter(filterBooks);
    const totalBooks = sortedBooks.length;
    const startIndex = (currentPage - 1) * booksPerPage;
    const paginatedBooks = sortedBooks.slice(startIndex, startIndex + booksPerPage);

    const clearFilters = () => {
        setPriceRange([null, null]);
        setSelectedCategories([]);
        setSelectedPublishers([]);
    }

    return (
        <div className={`p-3`}>
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-5">
                <div className={`w-fit mt-5`}>
                    {/* Filter Button*/}
                    <Button variant={"default"} onClick={() => setDrawerOpened(true)} leftSection={<IconFilter />}>Filter</Button>
                </div>

                <div className={`flex gap-3`}>
                    {/* Books per page Dropdown*/}
                    <NativeSelect
                        label="Books per page"
                        data={['5', '10', '15', '20']}
                        value={booksPerPage.toString()}
                        onChange={(e) => {
                            setBooksPerPage(parseInt(e.target.value));
                            setCurrentPage(1); // Reset to first page when books per page changes
                        }}
                    />

                    {/* Sort Dropdown*/}
                    <NativeSelect label="Sort by" data={sortOptions} value={sort} onChange={(e) => setSort(e.target.value as SortBy)} />
                </div>
            </div>
            <div className={`grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3`}>
                {paginatedBooks.map((book) => (
                    <BookCard key={book.isbn} book={book}/>
                ))}
            </div>
            <div className="mt-4 flex justify-center">
                <Pagination
                    total={Math.ceil(totalBooks / booksPerPage)}
                    value={currentPage}
                    onChange={setCurrentPage}
                />
            </div>

            {/* Filter Drawer */}
            <Drawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                padding="xl"
                size="sm"
            >
                <div>
                    <h1 className={`text-xl font-semibold mb-5 text-gray-700`}>Filters</h1>
                    {/* Price filter */}
                    <div className={`w-fit`}>
                        <NumberInput
                            label="Min Price"
                            value={priceRange[0] || ''}
                            onChange={(value) => setPriceRange([Number(value) || 0, priceRange[1]])}
                        />
                        <NumberInput
                            label="Max Price"
                            value={priceRange[1] || ''}
                            onChange={(value) => setPriceRange([priceRange[0], Number(value) || null])}
                        />
                    </div>

                    {/* Categories filter*/}
                    <div className="mt-4">
                        <label>Categories</label>
                        {categories.map(category => (
                            <Checkbox
                                className={`mt-1`}
                                key={category}
                                label={category}
                                checked={selectedCategories.includes(category)}
                                onChange={(e) => {
                                    const newCategories = e.target.checked
                                        ? [...selectedCategories, category]
                                        : selectedCategories.filter(c => c !== category);
                                    setSelectedCategories(newCategories);
                                }}
                            />
                        ))}
                    </div>

                    {/* Publisher filters*/}
                    <div className="mt-4">
                        <label>Publishers</label>
                        {publishers.map(publisher => (
                            <Checkbox
                                className={`mt-1`}
                                key={publisher}
                                label={publisher}
                                checked={selectedPublishers.includes(publisher)}
                                onChange={(e) => {
                                    const newPublishers = e.target.checked
                                        ? [...selectedPublishers, publisher]
                                        : selectedPublishers.filter(p => p !== publisher);
                                    setSelectedPublishers(newPublishers);
                                }}
                            />
                        ))}
                    </div>

                    {/* Clear filter button*/}
                    <Button className="mt-[32px] text-blue-400 text-sm font-semibold" unstyled onClick={clearFilters}>Clear Filters</Button>
                </div>
            </Drawer>
        </div>

    );
}

export default BookList;