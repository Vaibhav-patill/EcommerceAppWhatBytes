import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shophub | Online Store",
  description:
    "Shop electronics, clothing, and home goods with fast, simple checkout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}