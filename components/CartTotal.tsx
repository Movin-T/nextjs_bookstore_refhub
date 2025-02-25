import { Button } from '@mantine/core';

import useCartStore from '@/store/cartStore';
import { convertCentsToRupees } from '@/utils/currency';
import { SHIPPING_COST } from '@/constants/shipping';

const CartTotal = ({ buttonText, buttonAction }: {
    buttonText?: string,
    buttonAction?: () => void
}) => {
    const items = useCartStore((state) => state.items);
    const itemTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="mx-3 rounded p-5 bg-gray-100 h-fit">
            <div className="flex justify-between mb-2 border-b-2 py-2">
                <span>Item Total:</span>
                <span>{convertCentsToRupees(itemTotal)}</span>
            </div>
            <div className="flex justify-between mb-2 border-b-2 border-b-gray-300 py-2">
                <span>Shipping:</span>
                <span>{convertCentsToRupees(SHIPPING_COST)}</span>
            </div>
            <div className="flex justify-between mb-4 font-bold py-2">
                <span>Total:</span>
                <span>{convertCentsToRupees(itemTotal + SHIPPING_COST)}</span>
            </div>
            {!!buttonText && (<Button fullWidth className="w-full bg-blue-500 text-white" onClick={buttonAction}>{buttonText}</Button>)}
        </div>
    );
}

export default CartTotal;