import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: "Fato ou Fake",
  description: "Criado com tecnologia Next.js para desmascarar notícias falsas e revelar a verdade",
  icons: {
    icon: "./src/assets/favicon.png", 
  },
};

const font = Inter({
  style: "normal",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`antialiased ${font}`}
      >
        {children}
      </body>
    </html >
  );
}
