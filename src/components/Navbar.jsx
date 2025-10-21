"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
      if (scrolled) return "bg-white shadow-md text-black";
      if (menuOpen) return "bg-[#201A36] text-white";
      return "bg-gradient-to-r from-[#201A36]/70 to-[#201A36] text-white";
    } else {
      if (scrolled) return "bg-white shadow-md text-black";
      return "bg-white text-black";
    }
  })();

  const mobileMenuBgClass = (() => {
    if (isHome) {
      return scrolled ? "bg-white text-black" : "bg-[#201A36] text-white";
    } else {
      return "bg-white text-black";
    }
  })();

  // ======================================
  // 🧭 HANDLER ROUTE
  // ======================================
  const handleNavigate = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  // ======================================
  // ✨ STYLE AKTIF
  // ======================================
  const getLinkClass = (path) => {
    const isActive = pathname === path;
    if (path === "/" && isHome) return "cursor-pointer hover:text-orange-500";
    return `cursor-pointer hover:text-orange-500 flex items-center gap-1 ${
      isActive
        ? "text-orange-500" // hanya teks jadi oranye
        : "text-inherit"
    }`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all shadow-md duration-500 ${navBgClass}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-2">
        {/* LOGO */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
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
          <li className={getLinkClass("/")} onClick={() => handleNavigate("/")}>
            Beranda
          </li>

          <li
            className={getLinkClass("/aboutUs")}
            onClick={() => handleNavigate("/aboutUs/")}
          >
            Tentang Kami
          </li>

          {/* === LAYANAN KAMI === */}
          <li
            className="flex items-center gap-1 cursor-pointer hover:text-orange-500 group"
            onClick={() => handleNavigate("/ourServices/")}
          >
            <span
              className={` border-b-2 ${
                pathname === "/ourServices"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent"
              }`}
            >
              Layanan Kami
            </span>

            {/* Ikon dropdown — sejajar dengan teks */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 translate-y-[1px]"
              style={{ color: "inherit" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>

          <li
            className={getLinkClass("/contactUs")}
            onClick={() => handleNavigate("/contactUs/")}
          >
            Kontak Kami
          </li>
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
        } ${mobileMenuBgClass} ${menuOpen ? "rounded-b-2xl" : "rounded-b-none"}`}
      >
        <ul className="flex flex-col space-y-3 px-4 sm:px-6 py-3 font-medium text-sm sm:text-base">
          <li className={getLinkClass("/")} onClick={() => handleNavigate("/")}>
            Beranda
          </li>
          <li
            className={getLinkClass("/aboutUs/")}
            onClick={() => handleNavigate("/aboutUs/")}
          >
            Tentang Kami
          </li>

          {/* Mobile versi Layanan Kami */}
          <li
            className="flex items-center gap-1 cursor-pointer hover:text-orange-500 group"
            onClick={() => handleNavigate("/ourServices/")}
          >
            <span
              className={` border-b-2 ${
                pathname === "/ourServices"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent"
              }`}
            >
              Layanan Kami
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 relative top-[1px]"
              style={{ color: "inherit" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>

          <li
            className={getLinkClass("/contactUs/")}
            onClick={() => handleNavigate("/contactUs/")}
          >
            Kontak Kami
          </li>
        </ul>
      </div>
    </nav>
  );
}
