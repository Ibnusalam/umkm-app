// layout.js
import "./globals.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html lang="id">
      <head>
        <title>UMKM APP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 p-4 text-white text-center text-lg font-bold">
          UMKM APP
          <nav className="mt-2">
            <Link href="/">Home</Link> | 
            <Link href="/makanan">Makanan</Link> | 
            <Link href="/minuman">Minuman</Link> | 
            <Link href="/jasa">Jasa</Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-800 p-4 text-center text-white mt-4">
          &copy; 2025 UMKM APP
        </footer>
      </body>
    </html>
  );
}
