import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import '@mantine/core/styles.css';
import { ColorSchemeScript, Combobox, Container, MantineProvider } from '@mantine/core';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Book Haven",
    default: "Book Haven",
  },
  description: "Fictional online book store for Refhub interview assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
        <MantineProvider>
            <div className="gradient"/>
            <div className={`h-screen`}>
                <Header/>
                <div className={`main overflow-auto`}>
                    <Container size={"xl"} className={`min-h-[100%]`}>
                        {children}
                    </Container>
                    <Footer/>
                </div>
            </div>
        </MantineProvider>
        </body>
      </html>
  );
}
