import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AG Dentistry | Premium Dental Care in London",
  description:
    "Award-winning dental practice offering comprehensive general and cosmetic dentistry across multiple London locations. Book your consultation today.",
  keywords: "dentist london, cosmetic dentistry, dental implants, invisalign, teeth whitening",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-pearl text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
