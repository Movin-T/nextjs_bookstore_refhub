// Contains interface definitions for the data.

import { checkoutSchema } from '@/lib/schemas';
import { z } from 'zod';

export type CheckoutDetails = z.infer<typeof checkoutSchema>;

export enum SortBy {
    TitleAsc = "Title (A-Z)",
    TitleDesc = "Title (Z-A)",
    AuthorAsc = "Author (A-Z)",
    AuthorDesc = "Author (Z-A)",
    PriceAsc = "Price (Low to High)",
    PriceDesc = "Price (High to Low)"
}

export enum Category {
    BusinessAndMoney = "Business & Money",
    PositivityAndLifeHacks = "Positivity & Life Hacks",
    SelfHelp = "Self Help"
}

export enum PaymentMethod {
    CashOnDelivery = "Cash on Delivery",
    BankTransfer = "Bank Transfer",
}

export interface Book {
    isbn: string; // Unique identifier
    title: string;
    author: string;
    publisher: string;
    publicationYear: number;
    summary: string;
    imageUrl: string;
    price: number;  // Store price in cents
    quantityInStock: number;
    category: Category;
    slug: string;
}

export interface CartItem {
    isbn: string;
    title: string;
    price: number;
    imageUrl: string;
    quantity: number;
    slug: string;
}

export interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (isbn: string) => void;
    updateQuantity: (isbn: string, quantity: number) => void;
    clearCart: () => void;
}

export interface CheckoutStore {
    details: CheckoutDetails;
    setDetails: (details: CheckoutDetails) => void;
}