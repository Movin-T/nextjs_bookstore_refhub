'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { Container, Input, Pill, UnstyledButton } from '@mantine/core';
import { IconSearch, IconShoppingCart } from '@tabler/icons-react';

import classes from './Header.module.scss'
import Logo from '@/components/Logo';
import useCartStore from '@/store/cartStore';
import Link from 'next/link';

const Header = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const cartItemCount = useCartStore((state) => state.items.length);

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);
        if (searchValue) {
            params.set('query', searchValue);
        } else {
            params.delete('query');
        }
        replace(`?${params.toString()}`);
    }

    const clearSearch = () => {
        setSearchValue('');
        const params = new URLSearchParams(searchParams);
        params.delete('query');
        replace(`?${params.toString()}`);
    }

    useEffect(() => {
        setSearchValue(searchParams.get('query')?.toString() || '');
    }, [searchParams]);

    return (
        <header className={classes.header}>
            <Container size={"xl"} className={classes.inner}>
                <Logo />

                {/* Search Bar*/}
                <div className={`flex align-middle flex-grow relative`}>
                    <Input type="text"
                           placeholder="Search by Title, Author"
                           className={`flex-grow`}
                           value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}
                           onKeyDown={(e) => {
                               if (e.key === 'Enter') {
                                   handleSearch();
                               }
                           }}
                    />
                    {searchValue &&
                        <button
                            className={`absolute right-10 top-[50%] -translate-y-1/2 bg-gray-400 flex align-middle justify-center text-white text-xs h-[16px] w-[16px] rounded-full`}
                            onClick={clearSearch}>
                            &#x2715;
                        </button>}
                    <UnstyledButton className={`ml-2`} variant="light" onClick={handleSearch}><IconSearch /></UnstyledButton>
                </div>

                {/* Cart Icon*/}
                <Link href={`/checkout/cart`} className={`flex align-middle relative`}>
                    <IconShoppingCart size={24} />
                    {!!cartItemCount && <span
                        className={`text-white bg-black font-bold text-xs w-[16px] h-[16px] rounded-full flex align-middle justify-center absolute top-[-10px] right-[-10px]`}>{cartItemCount}</span>}
                </Link>
            </Container>
        </header>
    );
}

export default Header;