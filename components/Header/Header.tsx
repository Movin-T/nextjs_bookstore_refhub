'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

import { Input, UnstyledButton } from '@mantine/core';
import { IconSearch, IconShoppingCart } from '@tabler/icons-react';

import classes from './Header.module.scss'
import Logo from '@/components/Logo';

const Header = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

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

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Logo />

                {/* Search Bar*/}
                <div className={`flex align-middle flex-grow`}>
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
                    <UnstyledButton className={`ml-2`} variant="light" onClick={handleSearch}><IconSearch /></UnstyledButton>
                </div>

                {/* Cart Icon*/}
                <div className={`flex align-middle h-[32px] cursor-pointer relative`}>
                    <IconShoppingCart size={32} />
                    <span className={`text-white bg-black font-bold w-[25px] h-[25px] rounded-full flex align-middle justify-center absolute top-[-10px] right-[-10px]`}>2</span>
                </div>
            </div>
        </header>
    );
}

export default Header;