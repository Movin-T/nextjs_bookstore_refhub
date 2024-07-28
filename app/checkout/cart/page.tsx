'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import useCartStore from '@/store/cartStore';
import CartTotal from '@/components/CartTotal';
import CartTable from '@/components/CartTable';

const Page = () => {
    const { replace } = useRouter();
    const itemCount = useCartStore((state) => state.items.length);

    const proceedToCheckout = () => {
        replace('/checkout/details');
    }

    return (
        <>
            {!itemCount ? (
                <div className="text-center mt-20">
                    <h1 className="text-2xl font-semibold">Your cart is empty</h1>
                    <Link href="/" className="text-blue-500">Continue shopping</Link>
                </div>
            ) : (
                <div className={`grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5`}>
                    <CartTable />
                    <CartTotal buttonText={'Proceed to checkout'} buttonAction={proceedToCheckout} />
                </div>
            )}
        </>
    )
}

export default Page;