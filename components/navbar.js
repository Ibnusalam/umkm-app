// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      <div className="space-x-4">
      <div className="text-xl font-bold">UMKM APP</div>
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/makanan" className="hover:text-gray-300">Makanan</Link>
        <Link href="/minuman" className="hover:text-gray-300">Minuman</Link>
        <Link href="/jasa" className="hover:text-gray-300">Jasa</Link>
      </div>
    </nav>
  );
}