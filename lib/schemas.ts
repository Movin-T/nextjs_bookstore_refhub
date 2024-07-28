// lib/schemas.ts
import { z } from 'zod';
import { PaymentMethod } from '@/lib/definitions';

export const checkoutSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    phone: z.string().min(1, 'Phone number is required'),
    email: z.string().email('Invalid email address'),
    address: z.string().min(1, 'Address is required'),
    city: z.string().min(1, 'City is required'),
    postalCode: z.string().min(1, 'Postal code is required'),
    paymentMethod: z.nativeEnum(PaymentMethod,{
        invalid_type_error: 'Invalid payment method',
    }),
});