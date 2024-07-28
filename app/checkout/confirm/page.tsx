'use client';

import useCartStore from '@/store/cartStore';
import useCheckoutStore from '@/store/checkoutStore';
import { useRouter } from 'next/navigation';
import { convertCentsToRupees } from '@/utils/currency';
import { SHIPPING_COST } from '@/constants/shipping';

const Page = () => {
    const { replace } = useRouter();
    const clearCart = useCartStore().clearCart;
    const items = useCartStore((state) => state.items);
    const details = useCheckoutStore((state) => state.details);

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleConfirmOrder = () => {
        // Handle order confirmation logic here
        clearCart();

        replace('/success');
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Shipping Details</h2>
                    <div className="bg-white p-4 rounded shadow">
                        <p className={`my-2`}><strong>Name:</strong> {details.firstName} {details.lastName}</p>
                        <p className={`my-2`}><strong>Phone:</strong> {details.phone}</p>
                        <p className={`my-2`}><strong>Email:</strong> {details.email}</p>
                        <p className={`my-2`}><strong>Address:</strong> {details.address}, {details.city}, {details.postalCode}</p>
                        <p className={`my-2`}><strong>Payment Method:</strong> {details.paymentMethod}</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Cart Items</h2>
                    <div className="bg-white p-4 rounded shadow">
                        {items.map((item) => (
                            <div key={item.isbn} className="flex items-center mb-4">
                                <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: {convertCentsToRupees(item.price)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-gray-700 font-semibold mt-1">Shipping: {convertCentsToRupees(SHIPPING_COST)}</p>
                        <p className="text-xl font-semibold mt-2">Total: {convertCentsToRupees(total + SHIPPING_COST)}</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 text-right">
                <button
                    onClick={handleConfirmOrder}
                    className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition duration-200"
                >
                    Confirm Order
                </button>
            </div>
        </div>
    );
};

export default Page;