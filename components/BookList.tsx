import { books } from '@/lib/placeholder-data';
import { Book, SortBy } from '@/lib/definitions';
import BookCard from '@/components/BookCard';


const BookList = ({ query, sort }: { query: string, sort: SortBy }) => {
  const queryCleaned = query.trim().toLowerCase();
  const queryFilteredBooks = query ? books.filter((book) => {
    return book.title.toLowerCase().includes(queryCleaned) || book.author.toLowerCase().includes(queryCleaned);
  }) : books;

  const sortBook = (a: Book, b: Book) => {
      switch (sort) {
      case SortBy.TitleAsc:
          return a.title.localeCompare(b.title);
      case SortBy.TitleDesc:
          return b.title.localeCompare(a.title);
      case SortBy.AuthorAsc:
          return a.author.localeCompare(b.author);
      case SortBy.AuthorDesc:
          return b.author.localeCompare(a.author);
      case SortBy.PriceAsc:
          return a.price - b.price;
      case SortBy.PriceDesc:
          return b.price - a.price;
      default:
          return 0;
      }
  }

  return (
    <div className={`p-3 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3`}>
        {queryFilteredBooks.sort(sortBook).map((book) => (
            <BookCard key={book.isbn} book={book} />
        ))}
    </div>
  );
}

export default BookList;