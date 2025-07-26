import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://araha-triathlon.example.com"),
  title: "アラハビーチトライアスロン大会",
  description: "沖縄アラハビーチで開催されるトライアスロン大会の公式サイト",
  openGraph: {
    title: "アラハビーチトライアスロン大会",
    description: "沖縄アラハビーチで開催されるトライアスロン大会の公式サイト",
    url: "https://araha-triathlon.example.com",
    siteName: "アラハビーチトライアスロン大会",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "アラハビーチトライアスロン大会",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "アラハビーチトライアスロン大会",
    description: "沖縄アラハビーチで開催されるトライアスロン大会の公式サイト",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
