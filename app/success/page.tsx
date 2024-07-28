'use client';

import { useRouter } from 'next/navigation';

const Page = () => {
    const { replace } = useRouter();

    const handleGoHome = () => {
        replace('/');
    };

    return (
        <div className="container mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-lg mb-6">Your order has been placed successfully. We will send you a confirmation email shortly.</p>
            <button
                onClick={handleGoHome}
                className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition duration-200"
            >
                Go to Home
            </button>
        </div>
    );
};

export default Page;