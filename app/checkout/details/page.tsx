'use client';

import { useRouter } from 'next/navigation';

import useCartStore from '@/store/cartStore';
import CheckoutForm from '@/components/CheckoutForm';
import CartTotal from '@/components/CartTotal';
import { useEffect } from 'react';

const Page = () => {
    const { replace } = useRouter();
    const items = useCartStore((state) => state.items);

    // Redirect to cart if no items
    useEffect(() => {
        if (items.length === 0) {
            replace('/checkout/cart');
        }
    }, [items, replace]);

    return (
        <div  className={`grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5`}>
            <CheckoutForm />
            <CartTotal />
        </div>
    )
}

export default Page;