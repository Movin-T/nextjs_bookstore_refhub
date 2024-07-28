import { create } from 'zustand';

import { CheckoutStore } from '@/lib/definitions';

const useCheckoutStore = create<CheckoutStore>((set) => ({
    details: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        paymentMethod: ''
    },
    setDetails: (details) => set({ details })
}));

export default useCheckoutStore;