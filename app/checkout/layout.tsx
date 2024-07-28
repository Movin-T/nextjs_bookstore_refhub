import CheckoutStepper from '@/components/CheckoutStepper';

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