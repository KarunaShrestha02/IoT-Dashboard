import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({ subsets: ["latin"],weight:"400" });

export const metadata: Metadata = {
  title: "Weather Station",
  description: "Generated by Roger Chung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}
      <Toaster />
      </body>
    </html>
  );
}