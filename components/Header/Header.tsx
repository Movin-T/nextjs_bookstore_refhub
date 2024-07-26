'use client';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Input, UnstyledButton } from '@mantine/core';
import { IconSearch, IconShoppingCart } from '@tabler/icons-react';
import classes from './Header.module.scss'

const Header =() => {
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
                {/* Logo */}
                <div className={`flex align-middle h-[32px]`}>
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"></path>
                    </svg>
                    <div className={`ml-3 mt-1 text-xl font-bold hidden md:block`}>Book Haven</div>
                </div>

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