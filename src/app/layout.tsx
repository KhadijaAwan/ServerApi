import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ServerHub",
  description: "It is a nextjs application which display the data from an external apis using nextjs server actions.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  keywords: ["nextjs server actions", "server", "apis", "next apis", "fetch api", "GET api"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
