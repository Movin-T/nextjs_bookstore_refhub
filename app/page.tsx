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
    <main className={`p-5`}>
      <div>
          <BookList query={query} />
      </div>
    </main>
  );
}
