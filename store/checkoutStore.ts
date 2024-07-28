import { create } from 'zustand';

import { CheckoutStore, PaymentMethod } from '@/lib/definitions';

const useCheckoutStore = create<CheckoutStore>((set) => ({
    details: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        paymentMethod: PaymentMethod.CashOnDelivery
    },
    setDetails: (details) => set({ details })
}));

export default useCheckoutStore;