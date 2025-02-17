import Navbar from "@/components/navbar";

// page.js (Home)
export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Selamat Datang di UMKM APP</h1>
      <p className="text-lg text-gray-700 mb-6">Platform untuk mendukung usaha kecil dan menengah</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <img src="/makanan.jpg" alt="UMKM Makanan" className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-semibold mt-2">UMKM Makanan</h2>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <img src="/minuman.jpg" alt="UMKM Minuman" className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-semibold mt-2">UMKM Minuman</h2>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <img src="/jasa.jpg" alt="UMKM Jasa" className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-semibold mt-2">UMKM Jasa</h2>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mt-8">Tim Pengembang</h2>
      <div className="flex flex-wrap justify-center mt-4 gap-6">
        <div className="text-center">
          <img src="/developer1.jpg" alt="Developer 1" className="w-24 h-24 rounded-full mx-auto" />
          <p className="mt-2 font-semibold">Nama Developer 1</p>
        </div>
        <div className="text-center">
          <img src="/developer2.jpg" alt="Developer 2" className="w-24 h-24 rounded-full mx-auto" />
          <p className="mt-2 font-semibold">Nama Developer 2</p>
        </div>
        <div className="text-center">
          <img src="/developer3.jpg" alt="Developer 3" className="w-24 h-24 rounded-full mx-auto" />
          <p className="mt-2 font-semibold">Nama Developer 3</p>
        </div>
      </div>
    </div>
    </div>
     );
}