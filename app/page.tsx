import BookList from '@/components/BookList';

export default function Home({
    searchParams
}: {
    searchParams?: {
        query?: string;
    }
}) {
  const query = searchParams?.query || '';


  return (
    <main className={`py-5`}>
        <BookList query={query} />
    </main>
  );
}
