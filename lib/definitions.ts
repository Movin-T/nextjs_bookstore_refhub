// Contains interface definitions for the data.

export enum SortBy {
    TitleAsc = "Title (A-Z)",
    TitleDesc = "Title (Z-A)",
    AuthorAsc = "Author (A-Z)",
    AuthorDesc = "Author (Z-A)",
    PriceAsc = "Price (Low to High)",
    PriceDesc = "Price (High to Low)"
}

export enum Category {
    BusinessAndMoney = "Business & Money",
    PositivityAndLifeHacks = "Positivity & Life Hacks",
    SelfHelp = "Self Help"
}

export interface Book {
    isbn: string; // Unique identifier
    title: string;
    author: string;
    publisher: string;
    publicationYear: number;
    summary: string;
    imageUrl: string;
    price: number;  // Store price in cents
    quantityInStock: number;
    category: Category;
}