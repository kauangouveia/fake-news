import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
