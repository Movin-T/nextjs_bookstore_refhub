import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

import { Book } from '@/lib/definitions';

const BookCard = ({ book }: { book: Book}) => {
    const { replace } = useRouter();

    const convertCentsToRupees = (cents: number): string => {
        return `Rs. ${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }

    const addToCart = (e: any) => {
        e.preventDefault();
    }

    const authorClick = (e: any) => {
        e.preventDefault();
        replace(`?query=${book.author}`);
    }

    return (
        <Link href={`/books/${book.isbn}`}>
            <div key={book.isbn} className="flex flex-col rounded-md mx-2 my-3">
                <img src={book.imageUrl} alt={`${book.title} cover`} className={`w-100 aspect-[2/3] mb-2`} />
                <h1 className="font-semibold">{book.title}</h1>
                <p className="text-sm text-gray-500" onClick={authorClick}>{book.author}</p>
                <p className="text-sm">{convertCentsToRupees(book.price)}</p>
                {book.quantityInStock > 0 ? (
                    <Button rightSection={<IconShoppingCart size={15} />} className="mt-2" onClick={addToCart}>Add to cart</Button>
                ) : (<p className="font-semibold text-red-500">Out of stock</p>)}
            </div>
        </Link>
    );
}

export default BookCard;