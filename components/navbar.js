// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white h-screen w-64 fixed flex justify-between items-center p-6 shadow-lg">
      <div className="text-2xl font-bold mb-6">UMKM APP</div>
      <div className="space-y-4">
        <Link href="/" className="block hover:text-gray-300">Home</Link>
        <Link href="/makanan" className="block hover:text-gray-300">Makanan</Link>
        <Link href="/minuman" className="block hover:text-gray-300">Minuman</Link>
        <Link href="/jasa" className="block hover:text-gray-300">Jasa</Link>
      </div>
    </nav>
  );
}