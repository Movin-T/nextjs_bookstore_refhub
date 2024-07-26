import Link from 'next/link';

import { Button } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

import { Book } from '@/lib/definitions';

const BookCard = ({ book }: { book: Book}) => {
    const convertCentsToRupees = (cents: number): string => {
        return `Rs. ${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }

    const addToCart = (e: any) => {
        e.preventDefault();
        console.log('Add to cart clicked');
    }

    return (
        <Link href={`/book/${book.isbn}`}>
            <div key={book.isbn} className="flex flex-col rounded-md mx-2 my-3">
                <img src={book.imageUrl} alt={`${book.title} cover`} className={`w-100 aspect-[2/3] mb-2`} />
                <h1 className="font-semibold">{book.title}</h1>
                <p className="text-sm text-gray-500">{book.author}</p>
                <p className="text-sm">{convertCentsToRupees(book.price)}</p>
                {book.quantityInStock > 0 ? (
                    <Button rightSection={<IconShoppingCart size={15} />} className="mt-2" onClick={addToCart}>Add to cart</Button>
                ) : (<p className="font-semibold text-red-500">Out of stock</p>)}
            </div>
        </Link>
    );
}

export default BookCard;