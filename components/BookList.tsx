import { books } from '@/lib/placeholder-data';
import BookCard from '@/components/Header/BookCard';


export default function BookList({ query }: { query: string }) {
  const queryCleaned = query.trim().toLowerCase();
  const queryFilteredBook = query ? books.filter((book) => {
    return book.title.toLowerCase().includes(queryCleaned) || book.author.toLowerCase().includes(queryCleaned);
  }) : books;

  return (
    <div className={`p-3 flex gap-5 flex-wrap`}>
        {queryFilteredBook.map((book) => (
            <BookCard key={book.isbn} book={book} />
        ))}
    </div>
  );
}