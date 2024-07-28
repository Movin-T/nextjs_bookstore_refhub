// components/CheckoutForm.tsx
'use client';

import { useRouter } from 'next/navigation';

import { Button, TextInput, Select } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';

import { checkoutSchema } from '@/lib/schemas';
import useCheckoutStore from '@/store/checkoutStore';
import { CheckoutDetails, PaymentMethod } from '@/lib/definitions';

const CheckoutForm = () => {
    const { replace } = useRouter();
    const { setDetails } = useCheckoutStore();

    const form = useForm<CheckoutDetails>({
        validate: zodResolver(checkoutSchema),
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            postalCode: '',
            paymentMethod: PaymentMethod.CashOnDelivery,
        },
    });

    const handleSubmit = (values: CheckoutDetails) => {
        setDetails(values);

        replace('/checkout/confirm');
    };

    return (
        <form className={`w-fit`} onSubmit={form.onSubmit(handleSubmit)} >
            <div className={`flex gap-5 mb-3`}>
                <TextInput
                    label="First Name"
                    placeholder="First Name"
                    {...form.getInputProps('firstName')}
                />
                <TextInput
                    label="Last Name"
                    placeholder="Last Name"
                    {...form.getInputProps('lastName')}
                />
            </div>
            <div className={`flex gap-5 mb-3`}>
                <TextInput
                    label="Phone"
                    placeholder="Phone"
                    {...form.getInputProps('phone')}
                />
                <TextInput
                    label="Email"
                    placeholder="Email"
                    {...form.getInputProps('email')}
                />
            </div>
            <TextInput
                className={`mb-3`}
                label="Address"
                placeholder="Address"
                {...form.getInputProps('address')}
            />
            <div className={`flex gap-5 mb-3`}>
                <TextInput
                    label="City"
                    placeholder="City"
                    {...form.getInputProps('city')}
                />
                <TextInput
                    label="Postal Code"
                    placeholder="Postal Code"
                    {...form.getInputProps('postalCode')}
                />
            </div>
            <Select
                label="Payment Method"
                placeholder="Select payment method"
                data={Object.values(PaymentMethod)}
                {...form.getInputProps('paymentMethod')}
            />
            <Button className={`mt-5`} type="submit">Continue</Button>
        </form>
    );
};

export default CheckoutForm;