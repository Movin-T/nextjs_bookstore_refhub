'use client';

import { useRouter } from 'next/navigation';

import useCartStore from '@/store/cartStore';

const Page = () => {
    const { replace } = useRouter();
    const itemCount = useCartStore((state) => state.items.length);

    // Redirect to home if no items in cart
    if (!itemCount) {
        replace('/');
    }

    const proceedHandler = () => {
        replace('/checkout/confirm');
    }

    return (
        <div  className={`grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5`}>
            <div></div>
        </div>
    )
}

export default Page;