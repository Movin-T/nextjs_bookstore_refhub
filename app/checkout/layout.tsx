import CheckoutStepper from '@/components/CheckoutStepper';

export const metadata = {
    title: 'Checkout',
};

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <main className={`p-5`}>
            <div className={`hidden md:block`}>
                <CheckoutStepper />
            </div>
            <div className={`mt-[32px]`}>
                {children}
            </div>
        </main>
    )
};

export default Layout;