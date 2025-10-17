"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const ourServices = [
    { icon: "/img/icons/brd-os-1.png", names: "AUTOMATIC FARE COLLECTION" },
    { icon: "/img/icons/brd-os-2.png", names: "INTELLEGENCE TRANSPORTATION SYSTEM" },
    { icon: "/img/icons/brd-os-3.png", names: "SOLUSI PERBANKAN" },
    { icon: "/img/icons/brd-os-4.png", names: "ELEKTRONIFIKASI & OTOMATISASI" },
    { icon: "/img/icons/brd-os-5.png", names: "PLATFORM DIGITALISASI" },
    { icon: "/img/icons/brd-os-6.png", names: "E-COMMERCE & MARKETPLACE" },
    { icon: "/img/icons/brd-os-7.png", names: "RETAIL SOLUTION" },
  ];
    
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50); // ketika scroll lebih dari 50px ubah warna navbar
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* NAVBAR */}
      <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md text-black"
          : "bg-gradient-to-r from-[#201A36]/70 to-[#201A36] text-white"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-10 py-4">
        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={130}
            height={40}
            className="object-contain"
          />
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-orange-500 transition-all duration-200 cursor-pointer">
            Beranda
          </li>
          <li className="hover:text-orange-500 transition-all duration-200 cursor-pointer">
            Tentang Kami
          </li>
          <li className="hover:text-orange-500 transition-all duration-200 cursor-pointer">
            Layanan Kami
          </li>
          <li className="hover:text-orange-500 transition-all duration-200 cursor-pointer">
            Kontak Kami
          </li>
        </ul>

        {/* HAMBURGER MENU (MOBILE) */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              size={28}
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              size={28}
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* DROPDOWN MENU MOBILE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } ${scrolled ? "bg-white text-black" : "bg-[#0C0C47]/90 text-white"}`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 font-medium">
          <li className="hover:text-orange-500 cursor-pointer">Beranda</li>
          <li className="hover:text-orange-500 cursor-pointer">Tentang Kami</li>
          <li className="hover:text-orange-500 cursor-pointer">Layanan Kami</li>
          <li className="hover:text-orange-500 cursor-pointer">Kontak Kami</li>
        </ul>
      </div>
    </nav>

      {/* HERO / HEAD */}
      <div className="relative bg-[url('/img/brd-bg-1.png')] bg-cover bg-center text-white text-center pb-62 pt-62 px-4">
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Commitment, Integrity, Future
          </h2>
          <p className="text-xl md:text-2xl mb-4">
            Kami Berbicara Tentang Digital di Masa Depan
          </p>
          <p className="text-lg font-medium mb-8">
            PT JARING SOLUSI APLIKASI (NET2SOFTWARE)
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white hover:bg-orange-500 text-orange-500 hover:text-white px-6 py-3 trantition-all duration-200 rounded-md font-semibold">
              LAYANAN KAMI
            </button>
            <button className="bg-orange-500 hover:bg-white text-white hover:text-orange-500 trantition-all duration-200 px-6 py-3 rounded-md font-semibold">
              HUBUNGI KAMI
            </button>
          </div>
        </div>
      </div>

      {/* SOFTWARE HOUSE */}
      <div className="relative z-20 -my-32 flex justify-center">
        <div className="bg-white flex flex-col md:flex-row items-center md:space-x-10 max-w-6xl p-10 md:p-16 rounded-2xl shadow-lg">
          {/* Gambar */}
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/img/brd-sh-1.png"
              alt="Software"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Teks */}
          <div className="flex flex-col justify-center md:w-1/2 mt-8 md:mt-0 space-y-4 ">
            <h1 className="text-3xl font-semibold ">
              Software House
            </h1>
            <p>
              Kami berfokus dalam membangun solusi digital untuk kebutuhan bisnis
              dan institusi Anda, dengan pendekatan modern dan profesional.
            </p>
            <p>
              PT Jaring Solusi Aplikasi telah membantu berbagai instansi dalam
              membangun sistem berbasis teknologi untuk mendukung operasional
              sehari-hari.
            </p>
            <button className="border-2 border-orange-500 hover:bg-orange-500 transition-all duration-200 hover:text-white text-orange-500 px-5 py-3 rounded-md w-fit">
              SELENGKAPNYA TENTANG KAMI
            </button>
          </div>
        </div>
      </div>

      {/* MODEL BISNIS */}
      <div className="relative bg-[#0C2D6B] bg-[url('/img/brd-bg-1.png')] bg-cover bg-center text-white pt-60  pb-28 px-6 overflow-hidden">
        {/* Overlay agar teks tetap jelas */}
        <div className="absolute inset-0 bg-[#0C2D6B]/80"></div>

        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-start md:space-x-10">
          {/* KIRI - Judul */}
          <div className="md:w-1/3 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              MODEL <br /> BISNIS
            </h1>
          </div>

          {/* KANAN - Konten */}
          <div className="md:w-2/3 space-y-10">
            {/* CARD 1 */}
            <div className="flex items-start space-x-4 hover:scale-[1.03] transition-transform duration-300">
              <Image
                src="/img/icons/brd-bm-1.png"
                alt="icon-solution"
                width={50}
                height={50}
                className="flex-shrink-0"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Solution as Services
                </h2>
                <p className="text-white/90 mt-2 leading-relaxed">
                  Penyediaan Platform aplikasi pada backend maupun user frontend
                  aplikasi menyesuaikan kepada kebutuhan pelanggan termasuk opsi
                  infrastruktur (data center, server dan jaringan, *jika
                  dibutuhkan*). Pola kerjasama dalam bentuk manage service tanpa
                  biaya investasi capex sehingga pelanggan hanya fokus kepada biaya
                  opex penggunaan sistem.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex items-start space-x-4 hover:scale-[1.03] transition-transform duration-300">
              <Image
                src="/img/icons/brd-bm-2.png"
                alt="icon-development"
                width={50}
                height={50}
                className="flex-shrink-0"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Development & Delivery
                </h2>
                <p className="text-white/90 mt-2 leading-relaxed">
                  Penyediaan Platform aplikasi pada backend maupun user frontend
                  aplikasi menyesuaikan kepada kebutuhan pelanggan termasuk opsi
                  infrastruktur (data center, server dan jaringan, *jika
                  dibutuhkan*). Dengan metode biaya one time charge, JARING
                  menyediakan seluruh kebutuhan sistem pada pelanggan dan jika
                  dibutuhkan termasuk dukungan purna layanan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR SERVICES*/}
      <div className="py-20 bg-gray-50 px-6">
        <h1 className="text-center text-3xl font-bold mb-10">LAYANAN KAMI</h1>

        {/* Ganti grid jadi flex agar baris terakhir bisa center */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {ourServices.map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-lg flex flex-col w-90 
                        transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute bg-gray-100 w-10 h-10 rounded-full z-10 top-1 left-7" />
                <Image
                  src={service.icon}
                  alt={service.names}
                  width={40}
                  height={40}
                  className="relative z-10"
                />
              </div>

              <h2 className="font-semibold mt-4 text-sm">{service.names}</h2>

              {/* Animation Line */}
              <div className="relative w-full h-[2px] my-3 bg-gray-300 overflow-hidden">
                <div className="absolute left-0 top-0 h-full bg-orange-500 w-0 transition-all duration-500 group-hover:w-full"></div>
              </div>

              <p className="text-orange-500 font-medium cursor-pointer">
                Lihat Detail →
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sertification */}
      <div className="py-20 bg-gradient-to-b from-[#EAF0FF] to-white text-center">
        <h1 className="text-3xl font-bold mb-6">Sertifikasi</h1>
        <div className="flex justify-center gap-8 flex-wrap">
          <Image src="/img/icons/brd-iso-1.png" alt="ISO" width={120} height={120} />
          <Image src="/img/icons/brd-iso-2.png" alt="ISO" width={120} height={120} />
          <Image src="/img/icons/brd-iso-3.png" alt="ISO" width={120} height={120} />
        </div>
      </div>

      {/* KONTAK KAMI */}
      <div className="bg-white py-20 px-6">
        <h1 className="text-3xl font-bold text-center mb-3">KONTAK KAMI</h1>
        <p className="text-center text-gray-600 mb-10">
          Hubungi kami atau kirim pesan untuk mendapatkan informasi lebih lengkap dari kami
        </p>

        {/* Wrapper dengan rasio berbeda */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] rounded-lg overflow-hidden">
          {/* LEFT CONTACT INFO */}
          <div className="bg-[#0C2D6B] text-white p-6 space-y-6">
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white"> 
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /> 
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white"> 
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /> 
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white"> 
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> 
                </svg>
              </div>
              <div>
                <p className="font-bold">Jam Kerja :</p>
                <p className="text-gray-200 text-sm leading-snug">Senin–Jumat: 08:00–17:00</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-gray-50 p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row gap-8 mb-4">
                <input type="text" placeholder="Nama Lengkap" className="sm:w-1/2 border border-gray-400 p-2 " />
                <input type="text" placeholder="Alamat Email" className="sm:w-1/2 border border-gray-400 p-2" />
              </div>

              <input type="text" placeholder="Subjek" className="w-full border border-gray-400 p-2 mb-4 " />
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


      {/* FOOTER */}
      <footer className="bg-[#0C2D6B] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-6">
          <div>
            <h1 className="font-bold text-lg mb-2">PT. JARING SOLUSI APLIKASI</h1>
            <p className="text-gray-300 text-sm">
              Alamat: Jl. Ks Tubun Raya No. 10, Jakarta Pusat, Indonesia
            </p>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-2">Kontak Kami</h1>
            <p className="text-gray-300 text-sm">(021) 345 2130</p>
            <p className="text-gray-300 text-sm">info@netzsoftware.com</p>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-2">Media Sosial</h1>
            <div className="flex space-x-4">
              <Image src="/fb.png" alt="Facebook" width={30} height={30} />
              <Image src="/ig.png" alt="Instagram" width={30} height={30} />
              <Image src="/yt.png" alt="YouTube" width={30} height={30} />
              <Image src="/x.png" alt="X" width={30} height={30} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 pt-4 text-center text-sm text-gray-300">
          © 2024 PT. Jaring Solusi Aplikasi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
