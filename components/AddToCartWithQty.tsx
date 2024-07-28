'use client';

import { useState } from 'react';
import { IconShoppingCart } from '@tabler/icons-react';
import { Button } from '@mantine/core';

const AddToCartWithQty = ({ stock, isbn }: { stock: number, isbn: string }) => {
    const [qty, setQty] = useState(1);

    const handleQtyChange = (newQty: number) => {
        if (newQty >= 1 && newQty <= stock) {
            setQty(newQty);
        }
    }

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
                            disabled={qty >= stock}
                        >
                            +
                        </Button>
                    </div>
                    <div>
                        <Button rightSection={<IconShoppingCart size={15}/>} className="mt-2">Add to cart</Button>
                    </div>
                </>
            ) : (
                <p className="text-red-500 font-semibold">Out of stock</p>
            )}

        </div>
    );
}

export default AddToCartWithQty;