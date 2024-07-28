import { Breadcrumbs, Anchor, Image, Divider } from '@mantine/core';
import { notFound } from 'next/navigation';

import { books } from '@/lib/placeholder-data';
import { convertCentsToRupees } from '@/utils/currency';
import AddToCartWithQty from '@/components/AddToCartWithQty';

const Page = ({ params }: { params: { slug: string }}) => {
    const slug = params.slug;
    const book = books.find(book => book.slug === slug);

    if (!book) {
        notFound();
    }

    const items = [
        { title: 'Home', href: '/' },
        { title: book.title, href: '#', disabled: true },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    return (
        <main className={`py-5`}>
            <Breadcrumbs>{items}</Breadcrumbs>
            <div className={`mt-4 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5`}>
                <div>
                    <Image src={book.imageUrl} alt={book.title} className={`rounded-md w-[200px] m-auto md:w-full`} />
                </div>
                <div className={`px-4`}>
                    <h1 className={`text-2xl font-semibold`}>{book.title}</h1>
                    <Anchor style={{
                        color: '#6b7280',
                        textDecoration: 'none'
                    }} href={`/?query=${book.author}`}>{book.author}</Anchor>
                    <p className={`text-lg font-semibold mt-2`}>{convertCentsToRupees(book.price)}</p>
                    <div className={`text-lg mt-5`} dangerouslySetInnerHTML={{ __html: book.summary.replace(/\n/g, '<br />') }}></div>
                    <AddToCartWithQty stock={book.quantityInStock} book={book} />
                </div>
            </div>
            <Divider className={`my-5`} />
            <div>
                <h2 className={`text-xl font-semibold`}>Details</h2>
                <div className={`mt-4 flex flex-col gap-4`}>
                    <div>
                        <p className={`text-gray-700`}>ISBN</p>
                        <p>{book.isbn}</p>
                    </div>
                    <div>
                        <p className={`text-gray-700`}>Publisher</p>
                        <p>{book.publisher}</p>
                    </div>
                    <div>
                        <p className={`text-gray-700`}>Published Year</p>
                        <p>{book.publicationYear}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page