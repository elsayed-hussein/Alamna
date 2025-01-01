import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../css/store.css";
import StoreHeader from "@/components/header/storeHeader";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Alamna Store",
  description: "Alamna Store",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreHeader />
        {children}
      </body>
    </html>
  );
}
