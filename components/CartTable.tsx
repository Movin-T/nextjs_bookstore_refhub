import { useMemo } from 'react';
import Link from 'next/link';

import { ColumnDef, flexRender, getCoreRowModel, Row, useReactTable } from '@tanstack/react-table';
import { Button, Image } from '@mantine/core';

import { convertCentsToRupees } from '@/utils/currency';
import useCartStore from '@/store/cartStore';
import { CartItem } from '@/lib/definitions';
import { books } from '@/lib/placeholder-data';

const CartTable = () => {
    const items = useCartStore((state) => state.items);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeItem = useCartStore((state) => state.removeItem);

    const columns: ColumnDef<CartItem>[] = useMemo(() => [
        {
            header: ' ',
            cell: ({ row }: { row: Row<CartItem>}) => (
                <Button
                    unstyled
                    className="text-red-500"
                    onClick={() => removeItem(row.original.isbn)}
                >
                    &times;
                </Button>
            ),
        },
        {
            header: 'Book',
            cell: ({ row }: { row: Row<CartItem>}) => (
                <div className="flex items-center">
                    <div className={`w-[100px]`}>
                        <Image src={row.original.imageUrl} alt={`${row.original.title} cover`} className={`w-100 aspect-[2/3] mb-2`} />
                    </div>
                    <Link href={`/books/${row.original.slug}`} className="ml-3">{row.original.title}</Link>
                </div>
            ),
        },
        {
            header: 'Price',
            cell: ({ row }: { row: Row<CartItem>}) => convertCentsToRupees(row.original.price),
        },
        {
            header: 'Quantity',
            cell: ({ row }: { row: Row<CartItem>}) => (
                <div className="flex items-center space-x-2">
                    <Button
                        unstyled
                        className="bg-gray-300 text-black px-3 py-1 rounded-md disabled:opacity-50"
                        onClick={() => updateQuantity(row.original.isbn, row.original.quantity - 1)}
                        disabled={row.original.quantity <= 1}
                    >
                        -
                    </Button>
                    <div className="text-lg font-semibold w-5 flex justify-center">{row.original.quantity}</div>
                    <Button
                        unstyled
                        className="bg-gray-300 text-black px-3 py-1 rounded-md disabled:opacity-50"
                        onClick={() => updateQuantity(row.original.isbn, row.original.quantity + 1)}
                        disabled={row.original.quantity >= (books.find((book) => book.isbn === row.original.isbn)?.quantityInStock ?? 0)}
                    >
                        +
                    </Button>
                </div>
            ),
        },
        {
            header: 'Subtotal',
            cell: ({ row }: { row: Row<CartItem>}) => convertCentsToRupees(row.original.price * row.original.quantity),
        },
    ], [updateQuantity]);

    const table = useReactTable({
        columns,
        data: items,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table className="w-full">
            <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th key={header.id}
                            className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left">
                            {header.column.columnDef.header as string}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id} className="px-4 py-2 border-b border-gray-200">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default CartTable;