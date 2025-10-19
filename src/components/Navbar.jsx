"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // 🔥 ambil path halaman saat ini

  // cek apakah sedang di halaman utama
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ======================================
  // 🎨 LOGIKA WARNA NAVBAR
  // ======================================
  const navBgClass = (() => {
    if (isHome) {
      // Jika di halaman utama
      if (scrolled) return "bg-white shadow-md text-black";
      if (menuOpen) return "bg-[#201A36] text-white";
      return "bg-gradient-to-r from-[#201A36]/70 to-[#201A36] text-white";
    } else {
      // Jika di halaman lain
      if (scrolled) return "bg-white shadow-md text-black";
      return "bg-white text-black";
    }
  })();

  const mobileMenuBgClass = (() => {
    if (isHome) {
      return scrolled
        ? "bg-white text-black"
        : "bg-[#201A36] text-white"; // tanpa gradasi di mobile
    } else {
      return "bg-white text-black";
    }
  })();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBgClass}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-2">
        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={100}
            height={30}
            className="object-contain sm:w-[110px] md:w-[110px]"
          />
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-orange-500 cursor-pointer">Beranda</li>
          <li className="hover:text-orange-500 cursor-pointer">Tentang Kami</li>
          <li className="hover:text-orange-500 cursor-pointer">Layanan Kami</li>
          <li className="hover:text-orange-500 cursor-pointer">Kontak Kami</li>
        </ul>

        {/* HAMBURGER */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              size={26}
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Menu
              size={26}
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } ${mobileMenuBgClass} ${
          menuOpen ? "rounded-b-2xl" : "rounded-b-none"
        }`}
      >
        <ul className="flex flex-col space-y-3 px-4 sm:px-6 py-3 font-medium text-sm sm:text-base">
          <li className="hover:text-orange-500 py-2 cursor-pointer">Beranda</li>
          <li className="hover:text-orange-500 py-2 cursor-pointer">Tentang Kami</li>
          <li className="hover:text-orange-500 py-2 cursor-pointer">Layanan Kami</li>
          <li className="hover:text-orange-500 py-2 cursor-pointer">Kontak Kami</li>
        </ul>
      </div>
    </nav>
  );
}
