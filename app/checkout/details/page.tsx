'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useCartStore from '@/store/cartStore';
import CheckoutForm from '@/components/CheckoutForm';
import CartTotal from '@/components/CartTotal';

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
        <div  className={`flex flex-col-reverse md:flex-col md:grid md:grid-cols-[2fr_1fr] gap-5`}>
            <CheckoutForm />
            <CartTotal />
        </div>
    )
}

export default Page;