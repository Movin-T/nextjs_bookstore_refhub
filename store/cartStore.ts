import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

import { CartItem, CartState } from '@/lib/definitions';

const useCartStore = create(
    persist<CartState>(
        (set) => ({
            items: [],
            addItem: (item: CartItem) => set((state) => {
                const isItemInCart = state.items.find((cartItem) => cartItem.isbn === item.isbn);
                // If the item is already in the cart, increase the quantity
                if (isItemInCart) {
                    return {
                        items: state.items.map((i) =>
                            i.isbn === item.isbn ? { ...i, quantity: i.quantity + item.quantity } : i
                        )
                    }
                }

                // Otherwise, add the item to the cart with the specified quantity
                return { items: [...state.items, { ...item }] };
            }),
            removeItem: (isbn: string) => set((state) => ({
                items: state.items.filter((item) => item.isbn !== isbn)
            })),
            updateQuantity: (isbn: string, quantity: number) => set((state) => ({
                items: state.items.map((item) =>
                    item.isbn === isbn ? { ...item, quantity } : item
                )
            })),
            clearCart: () => set({ items: [] })
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useCartStore;