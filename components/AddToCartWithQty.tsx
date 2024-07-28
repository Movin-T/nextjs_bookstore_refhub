'use client';

import { useEffect, useState } from 'react';

import { IconShoppingCart } from '@tabler/icons-react';
import { Button } from '@mantine/core';

import useCartStore from '@/store/cartStore';
import { Book } from '@/lib/definitions';

const AddToCartWithQty = ({ stock, book }: { stock: number, book: Book }) => {
    const addItem = useCartStore((state) => state.addItem);
    let qtyInCart = useCartStore((state) => state.items.find((cartItem) => cartItem.isbn === book.isbn)?.quantity || 0);

    const [qty, setQty] = useState(1);
    const [buttonText, setButtonText] = useState('Add to cart');

    const handleQtyChange = (newQty: number) => {
        if (newQty >= 1 && newQty <= stock - qtyInCart) {
            setQty(newQty);
        }
    }

    const handleAddToCartClick = (e: any) => {
        e.preventDefault();

        if (!qty || qty > stock - qtyInCart) {
            return;
        }

        addItem({
            isbn: book.isbn,
            title: book.title,
            price: book.price,
            quantity: qty,
            imageUrl: book.imageUrl
        });

        qtyInCart += qty;

        // Change button text to 'Added to cart' for 3 seconds
        setButtonText('Added to cart');
        setTimeout(() => {
            setButtonText('Add to cart');
        }, 3000);
    }

    useEffect(() => {
        // Update qtyInCart and set qty to 0 if stock is reached, else reset qty to 1
        qtyInCart === stock ? setQty(0) : setQty(1);
    }, [qtyInCart, stock]);

    return (
        <div className="flex flex-col space-y-3 mt-4">
            {stock > 0 ? (
                <>
                    <div className="flex items-center space-x-2">
                        <Button
                            unstyled
                            className="bg-gray-300 text-black px-3 py-1 rounded-md disabled:opacity-50"
                            onClick={() => handleQtyChange(qty - 1)}
                            disabled={qty <= 1}
                        >
                            -
                        </Button>
                        <div className="text-lg font-semibold w-5 flex justify-center">{qty}</div>
                        <Button
                            unstyled
                            className="bg-gray-300 text-black px-3 py-1 rounded-md disabled:opacity-50"
                            onClick={() => handleQtyChange(qty + 1)}
                            disabled={qty >= stock - qtyInCart}
                        >
                            +
                        </Button>
                    </div>
                    <div>
                        <Button disabled={!qty} rightSection={<IconShoppingCart size={15}/>} className="mt-2" onClick={handleAddToCartClick}>{buttonText}</Button>
                    </div>
                </>
            ) : (
                <p className="text-red-500 font-semibold">Out of stock</p>
            )}

        </div>
    );
}

export default AddToCartWithQty;