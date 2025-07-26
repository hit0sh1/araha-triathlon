import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "アラハビーチトライアスロン大会",
  description: "沖縄アラハビーチで開催されるトライアスロン大会の公式サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-blue-600">
                アラハトライアスロン
              </div>
              <div className="space-x-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">ホーム</Link>
                <Link href="/entry" className="text-gray-700 hover:text-blue-600 transition-colors">エントリー</Link>
                <Link href="/admin" className="text-gray-700 hover:text-blue-600 transition-colors">管理画面</Link>
                <Link href="/results" className="text-gray-700 hover:text-blue-600 transition-colors">結果</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2026 アラハビーチトライアスロン大会. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
