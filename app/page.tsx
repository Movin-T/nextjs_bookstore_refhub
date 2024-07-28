'use client';

import BookList from '@/components/BookList';
import { NativeSelect } from '@mantine/core';
import { useState } from 'react';
import { SortBy } from '@/lib/definitions';

export default function Home({
    searchParams
}: {
    searchParams?: {
        query?: string;
    }
}) {
  const query = searchParams?.query || '';
  const sortOptions = Object.values(SortBy);

  const [sort, setSort] = useState(sortOptions[0]);

  return (
    <main className={`py-5`}>
        {/* Sort Dropdown*/}
        <div className={`flex justify-end`}>
            <NativeSelect label="Sort by" data={sortOptions} value={sort} onChange={(e) => setSort(e.target.value as SortBy)} />
        </div>

        <BookList query={query} sort={sort} />
    </main>
  );
}
