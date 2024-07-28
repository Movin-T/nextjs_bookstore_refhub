import { Book, Category } from '@/lib/definitions';

export const books: Book[] = [
    {
        isbn: '978-9390166268',
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        publisher: 'Jaico Publishing House',
        publicationYear: 2020,
        summary: 'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.\n' +
            '\n' +
            'Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do. But in the real world, people don’t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your own unique view of the world, ego, pride, marketing, and odd incentives are scrambled together.\n' +
            '\n' +
            'In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life’s most important topics.',
        imageUrl: 'https://m.media-amazon.com/images/I/71MOtOP8uJL._SL1500_.jpg',
        price: 199000, // Store price in cents
        quantityInStock: 4,
        category: Category.BusinessAndMoney,
        slug: 'the-psychology-of-money'
    },
    {
        isbn: '978-0062312686',
        title: 'The Intelligent Investor',
        author: 'Benjamin Graham',
        publisher: 'Harper Business',
        publicationYear: 2013,
        summary: 'Benjamin Graham is the teacher of Warren Buffet. That itself is enough to buy this classic investment book.\n' +
            '\n' +
            'The greatest investment advisor of the twentieth century, Benjamin Graham taught and inspired people worldwide. Graham’s philosophy of “value investing” — which shields investors from substantial error and teaches them to develop long-term strategies — has made The Intelligent Investor the stock market bible ever since its original publication in 1949.Over the years, market developments have proven the wisdom of Graham’s strategies.',
        imageUrl: 'https://m.media-amazon.com/images/I/91L0La1pwDL._SL1500_.jpg',
        price: 399000, // Store price in cents
        quantityInStock: 3,
        category: Category.BusinessAndMoney,
        slug: 'the-intelligent-investor'
    },
    {
        isbn: '978-0091929114',
        title: 'The 4-Hour Workweek',
        author: 'Tim Ferriss',
        publisher: 'Vermilion',
        publicationYear: 2019,
        summary: 'The 4-Hour Work Week is the first book from Tim Ferriss. The New York Times bestselling author of The 4-Hour Body shows readers how to live more and work less, now with more than 100 pages of new, cutting-edge content.\n' +
            '\n' +
            'Forget the old concept of retirement and the rest of the deferred-life plan–there is no need to wait and every reason not to, especially in unpredictable economic times. Whether your dream is escaping the rat race, experiencing high-end world travel, or earning a monthly five-figure income with zero management, The 4-Hour Workweek is the blueprint.',
        imageUrl: 'https://m.media-amazon.com/images/I/41v0w9BFN5L.jpg',
        price: 449000, // Store price in cents
        quantityInStock: 4,
        category: Category.BusinessAndMoney,
        slug: 'the-4-hour-workweek'
    },
    {
        isbn: '978-1847941831',
        title: 'Atomic Habits',
        author: 'James Clear',
        publisher: 'Random House Business',
        publicationYear: 2018,
        summary: 'Tiny Changes, Remarkable Results\n' +
            '\n' +
            'No matter your goals, Atomic Habits offers a proven framework for improving–every day. James Clear, one of the world’s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.\n' +
            '\n' +
            'If you’re having trouble changing your habits, the problem isn’t you. The problem is your system. Bad habits repeat themselves again and again not because you don’t want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you’ll get a proven system that can take you to new heights.',
        imageUrl: 'https://m.media-amazon.com/images/I/41vcjE5lIgL.jpg',
        price: 449000, // Store price in cents
        quantityInStock: 5,
        category: Category.PositivityAndLifeHacks,
        slug: 'atomic-habits'
    },
    {
        isbn: '978-0374533557',
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        publisher: 'Farrar, Straus and Giroux',
        publicationYear: 2013,
        summary: 'Major New York Times bestseller\n' +
            'Winner of the National Academy of Sciences Best Book Award in 2012\n' +
            'Selected by the New York Times Book Review as one of the ten best books of 2011\n' +
            'A Globe and Mail Best Books of the Year 2011 Title\n' +
            'One of The Economist‘s 2011 Books of the Year\n' +
            'One of The Wall Street Journal‘s Best Nonfiction Books of the Year 2011\n' +
            '2013 Presidential Medal of Freedom Recipient\n' +
            'Kahneman’s work with Amos Tversky is the subject of Michael Lewis’s The Undoing Project: A Friendship That Changed Our Minds',
        imageUrl: 'https://m.media-amazon.com/images/I/41ZYHgBlOsL.jpg',
        price: 399000, // Store price in cents
        quantityInStock: 2,
        category: Category.PositivityAndLifeHacks,
        slug: 'thinking-fast-and-slow'
    },
    {
        isbn: '978-0349420219',
        title: 'So Good They Can’t Ignore You',
        author: 'Cal Newport',
        publisher: 'Piatkus',
        publicationYear: 2018,
        summary: 'In this eye-opening account, Cal Newport debunks the long-held belief that “follow your passion” is good advice.  Not only is the cliché flawed-preexisting passions are rare and have little to do with how most people end up loving their work-but it can also be dangerous, leading to anxiety and chronic job hopping.\n' +
            '\n' +
            'After making his case against passion, Newport sets out on a quest to discover the reality of how people end up loving what they do. Spending time with organic farmers, venture capitalists, screenwriters, freelance computer programmers, and others who admitted to deriving great satisfaction from their work, Newport uncovers the strategies they used and the pitfalls they avoided in developing their compelling careers.',
        imageUrl: 'https://m.media-amazon.com/images/I/71vvE5Pkt5L._SL1500_.jpg',
        price: 249000, // Store price in cents
        quantityInStock: 0,
        category: Category.PositivityAndLifeHacks,
        slug: 'so-good-they-cant-ignore-you'
    },
    {
        isbn: '978-0008602949',
        title: '8 Rules of Love',
        author: 'Jay Shetty',
        publisher: 'Thorsons',
        publicationYear: 2023,
        summary: 'The author of the #1 New York Times bestseller Think Like a Monk offers a revelatory guide to every stage of romance, drawing on ancient wisdom and new science.\n' +
            '\n' +
            'Nobody sits us down and teaches us how to love. So we’re often thrown into relationships with nothing but romance movies and pop culture to help us muddle through. Until now.\n' +
            '\n' +
            'Instead of presenting love as an ethereal concept or a collection of cliches, Jay Shetty lays out specific, actionable steps to help you develop the skills to practice and nurture love better than ever before. He shares insights on how to win or lose together, how to define love, and why you don’t break in a break-up. Inspired by Vedic wisdom and modern science, he tackles the entire relationship cycle, from first dates to moving in together to breaking up and starting over. And he shows us how to avoid falling for false promises and unfulfilling partners.',
        imageUrl: 'https://m.media-amazon.com/images/I/71EW1ClrIdL._SL1500_.jpg',
        price: 249000, // Store price in cents
        quantityInStock: 3,
        category: Category.SelfHelp,
        slug: '8-rules-of-love'
    },
    {
        isbn: '978-8172234980',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        publisher: 'Harper',
        publicationYear: 2005,
        summary: 'A global phenomenon, The Alchemist has been read and loved by over 62 million readers, topping bestseller lists in 74 countries worldwide. Now this magical fable is beautifully repackaged in an edition that lovers of Paulo Coelho will want to treasure forever. Every few decades a book is published that changes the lives of its readers forever.\n' +
            '\n' +
            'This is such a book – a beautiful parable about learning to listen to your heart, read the omens strewn along life’s path and, above all, follow your dreams. Santiago, a young shepherd living in the hills of Andalucia, feels that there is more to life than his humble home and his flock. One day he finds the courage to follow his dreams into distant lands, each step galvanised by the knowledge that he is following the right path: his own. The people he meets along the way, the things he sees and the wisdom he learns are life-changing. With Paulo Coelho’s visionary blend of spirituality, magical realism and folklore, The Alchemist is a story with the power to inspire nations and change people’s lives.',
        imageUrl: 'https://m.media-amazon.com/images/I/81FPzmB5fgL._SL1500_.jpg',
        price: 199000, // Store price in cents
        quantityInStock: 1,
        category: Category.SelfHelp,
        slug: 'the-alchemist'
    },
    {
        isbn: '978-0008386597',
        title: 'Think Like a Monk',
        author: 'Jay Shetty',
        publisher: 'Harpercollins',
        publicationYear: 2020,
        summary: 'Jay Shetty, the social media superstar and host of the #1 podcast ‘On Purpose’, distills the timeless wisdom he learned as a practicing monk into practical steps anyone can take every day to live a less anxious, more meaningful life.\n' +
            '\n' +
            'Over the past three years, Jay Shetty has become a favorite in the hearts and minds of millions of people worldwide. One of his clips was the most-watched video on Facebook last year, with over 360 million views. His social media following totals over 32 million, he has produced over 400 viral videos, which have amassed more than 5 billion views, and his podcast, ‘On Purpose’, is consistently ranked the world’s #1 health-related podcast.\n' +
            '\n' +
            'In this inspiring, empowering book, Shetty draws on his time as a monk in the Vedic tradition to show us how we can clear the roadblocks to our potential and power. Drawing on ancient wisdom and his own rich experiences in the ashram, Think Like a Monk reveals how to overcome negative thoughts and habits, and access the calm and purpose that lie within all of us.',
        imageUrl: 'https://m.media-amazon.com/images/I/81MvwM80YHL._SL1500_.jpg',
        price: 269000, // Store price in cents
        quantityInStock: 2,
        category: Category.SelfHelp,
        slug: 'think-like-a-monk'
    },
    {
        isbn: '978-1612681139',
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        publisher: 'Plata Publishing',
        publicationYear: 2022,
        summary: 'Rich Dad Poor Dad is the only book you need to know about personal finance. If you have not read a single book about finance or investing, Rich Dad Poor Dad is the best book to start with. It explains everything you need to know about money, personal finance and investing.\n' +
            '\n' +
            'Rich Dad Poor Dad is the #1 Personal Finance book that has ever been written. This book should be taught in every school. Rich Dad Poor Dad is a must read for any entrepreneur who plans to start their own business. This book encourages us to focus on passive income, rather than working income. It is a practical book with lot of theoretical information broken down so any amateur could understand easily.',
        imageUrl: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SL1500_.jpg',
        price: 299000, // Store price in cents
        quantityInStock: 3,
        category: Category.BusinessAndMoney,
        slug: 'rich-dad-poor-dad'
    },
    {
        isbn: '978-9387944893',
        title: 'The 5 AM Club: Own Your Morning, Elevate Your Life',
        author: 'Robin Sharma',
        publisher: 'Jaico Publishing House',
        publicationYear: 2018,
        summary: 'Part manifesto for mastery, part playbook for genius-grade productivity and part companion for a life lived beautifully, the 5 am club is a work that will transform your life. Forever.\n' +
            '\n' +
            'Legendary leadership and elite performance expert Robin Sharma introduced The 5 AM Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity.\n' +
            '\n' +
            'Now, in this life-changing book, handcrafted by the author over a rigorous four year period, you will discover the early-rising habit that has helped so many accomplish epic results while upgrading their happiness, helpfulness and feelings of aliveness.',
        imageUrl: 'https://m.media-amazon.com/images/I/71loUTDulKL._SL1500_.jpg',
        price: 199000, // Store price in cents
        quantityInStock: 2,
        category: Category.SelfHelp,
        slug: 'the-5-am-club'
    },
    {
        isbn: '978-0062457714',
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        publisher: 'HarperOne',
        publicationYear: 2018,
        summary: 'In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be “positive” all the time so that we can truly become better, happier people.\n' +
            '\n' +
            'For decades, we’ve been told that positive thinking is the key to a happy, rich life. “F**k positivity,” Mark Manson says. “Let’s be honest, shit is f**ked and we have to live with it.” In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mindset that has infected modern society and spoiled a generation, rewarding them with gold medals just for showing up.',
        imageUrl: 'https://m.media-amazon.com/images/I/71kzkcMcAQL._SL1500_.jpg',
        price: 279000, // Store price in cents
        quantityInStock: 4,
        category: Category.SelfHelp,
        slug: 'the-subtle-art-of-not-giving-a-fk'
    }
];