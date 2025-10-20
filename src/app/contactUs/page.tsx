"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-800 relative overflow-hidden">
      <Navbar />

      {/* ===================== KONTAK KAMI ===================== */}
      <div className="relative pt-28 md:pb-20 md:pt-28 md:px-6 md:px-10">
        {/* === IKON LINGKARAN DEKORATIF === */}
        <div className="absolute top-0 right-0 w-[250px] md:w-[800px] opacity-20 pointer-events-none z-0">
          <Image
            src="/img/cu-bg-half-circle.png"
            alt="Background Circle"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        {/* === TEKS HEADER === */}
        <h1 className="text-3xl font-bold text-center mb-3 relative z-10">
          KONTAK KAMI
        </h1>
        <p className="text-center text-gray-600 mb-10 relative z-10">
          Hubungi kami atau kirim pesan untuk mendapatkan informasi lebih lengkap dari kami
        </p>

        {/* === WRAPPER GRID === */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] md:rounded-lg overflow-hidden shadow-md">
          {/* === LEFT CONTACT INFO === */}
          <div className="bg-[#196CB4] text-white p-6 space-y-6 relative">
            {/* Alamat */}
            <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Alamat :</p>
                <p className="text-gray-200 text-sm leading-snug">
                  JL. Krekot Bunder Raya No.26, RT.2/RW.6, Ps. Baru, <br />
                  Kec. Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Email :</p>
                <p className="text-gray-200 text-sm leading-snug">cs@net2software.com</p>
              </div>
            </div>

            {/* Telepon */}
            <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Telepon :</p>
                <p className="text-gray-200 text-sm leading-snug">(021) 345 2130</p>
              </div>
            </div>

            {/* Jam Kerja */}
            <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Jam Kerja :</p>
                <p className="text-gray-200 text-sm leading-snug">Senin–Jumat: 08:00–17:00</p>
              </div>
            </div>
          </div>

          {/* === RIGHT FORM === */}
          <div className="bg-gray-50 p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row gap-8 mb-4">
                <input type="text" placeholder="Nama Lengkap" className="sm:w-1/2 border border-gray-400 p-2" />
                <input type="text" placeholder="Alamat Email" className="sm:w-1/2 border border-gray-400 p-2" />
              </div>

              <input type="text" placeholder="Subjek" className="w-full border border-gray-400 p-2 mb-4" />
              <textarea placeholder="Tulis pesan di sini..." className="w-full border border-gray-400 p-2 mb-4 h-40 resize-none"></textarea>
            </div>

            <div className="flex justify-end">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-transform duration-200 hover:scale-105">
                KIRIM PESAN
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
