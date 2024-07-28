'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { Stepper} from '@mantine/core';

const CheckoutStepper = () => {
    const pathname = usePathname();
    const { replace } = useRouter();
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (pathname === '/checkout/cart') {
            setActive(0);
        } else if (pathname === '/checkout/details') {
            setActive(1);
        } else if (pathname === '/checkout/confirm') {
            setActive(2);
        } else if (pathname === '/checkout/complete') {
            setActive(3);
        }
    }, [pathname]);

    const handleStepClick = (step: number) => {
        if (step === 0) {
            replace('/checkout/cart');
        } else if (step === 1) {
            replace('/checkout/details');
        }
    }

    return (
        <Stepper active={active} onStepClick={handleStepClick}  allowNextStepsSelect={false}>
            <Stepper.Step label="Cart" description="View & update cart" />
            <Stepper.Step label="Checkout" description="Enter shipping & payment details" />
            <Stepper.Step label="Confirm" description="Confirm order" />
            <Stepper.Completed>
                Completed, click back button to get to previous step
            </Stepper.Completed>
        </Stepper>
    )
}

export default CheckoutStepper;