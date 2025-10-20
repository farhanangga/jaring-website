"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function OurServicesContent() {
  const [openService, setOpenService] = useState<number | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const openId = searchParams.get("open");
    if (openId) {
      setOpenService(Number(openId));

      setTimeout(() => {
        const section = document.getElementById(`service-${openId}`);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [searchParams]);

  const services = [
    {
      id: 1,
      icon: "/img/icons/brd-os-1.png",
      name: "AUTOMATIC FARE COLLECTION",
      categories: [
        {
          type: null,
          projects: [
            { img: "/img/ourServices/afc-1-damri.png", name: "DAMRI" },
            { img: "/img/ourServices/afc-2-transjakarta.png", name: "TRANSJAKARTA" },
            { img: "/img/ourServices/afc-3-suroboyo.png", name: "SUROBOYO" },
            { img: "/img/ourServices/afc-4-biskita.png", name: "BISKITA" },
            { img: "/img/ourServices/afc-5-koetaradja.png", name: "TRANS KOETARADJA" },
          ],
        },
      ],
    },
    {
      id: 2,
      icon: "/img/icons/brd-os-2.png",
      name: "INTELLIGENT TRANSPORTATION SYSTEM",
      categories: [
        {
          type: null,
          projects: [
            { img: "/img/ourServices/its-1.png", name: "ARTERIAL TRANSPORT MANAGEMENT SYSTEM" },
            { img: "/img/ourServices/its-2.png", name: "TRAFFIC CCTV SURVEILLANCE" },
            { img: "/img/ourServices/its-3.png", name: "SMART TRAFFIC LIGHT" },
            { img: "/img/ourServices/its-4.png", name: "PASSENGER INFORMATION DISPLAY" },
          ],
        },
        {
          type: "Fleet Management System",
          projects: [
            { img: "/img/ourServices/its-5.png", name: "EXECUTIVE DASHBOARD" },
            { img: "/img/ourServices/its-6.png", name: "FLEET MANAGEMENT SYSTEM" },
            { img: "/img/ourServices/its-7.png", name: "CCTV ON BUS" },
          ],
        },
      ],
    },
    {
      id: 3,
      icon: "/img/icons/brd-os-3.png",
      name: "SOLUSI PERBANKAN",
      categories: [
        {
          type: "Platform Kartu Uang Elektronik",
          projects: [
            { img: "/img/ourServices/sp-1.png", name: "SCMS" },
            { img: "/img/ourServices/sp-2.png", name: "NOBU" },
          ],
        },
        {
          type: "Platform E-Wallet & Virtual Account",
          projects: [{ img: "/img/ourServices/sp-3.png", name: "E-WALLET" }],
        },
      ],
    },
    {
      id: 4,
      icon: "/img/icons/brd-os-4.png",
      name: "ELEKTRONIFIKASI & OTOMATISASI",
      categories: [
        {
          type: "E-Ticketing",
          projects: [
            { img: "/img/ourServices/eo-1.png", name: "SELF SERVICE KIOSK" },
            { img: "/img/ourServices/eo-2.png", name: "EDC POS" },
          ],
        },
        {
          type: "Parking System",
          projects: [
            { img: "/img/ourServices/eo-3.png", name: "GATELESS EDC (POS)" },
            { img: "/img/ourServices/eo-4.png", name: "GATE SYSTEM CASHLESS" },
          ],
        },
        {
          type: "Vending Machine",
          projects: [{ img: "/img/ourServices/eo-5.png", name: "VENDING MACHINE" }],
        },
      ],
    },
    {
      id: 5,
      icon: "/img/icons/brd-os-5.png",
      name: "PLATFORM DIGITALISASI",
      categories: [
        {
          type: null,
          projects: [
            { img: "/img/ourServices/pd-1.png", name: "SIGNAL" },
            { img: "/img/ourServices/pd-2.png", name: "E-KIR" },
            { img: "/img/ourServices/pd-3.png", name: "MATERIALDIGITAL" },
          ],
        },
      ],
    },
    {
      id: 6,
      icon: "/img/icons/brd-os-6.png",
      name: "E-COMMERCE & MARKETPLACE",
      categories: [
        {
          type: null,
          projects: [
            { img: "/img/ourServices/em-1.png", name: "AKUJUAL" },
            { img: "/img/ourServices/em-2.png", name: "AKUTITIP" },
          ],
        },
      ],
    },
    {
      id: 7,
      icon: "/img/icons/brd-os-7.png",
      name: "RETAIL SOLUTION",
      categories: [
        {
          type: null,
          projects: [{ img: "/img/ourServices/rt-1.png", name: "MANAJEMEN GROSIR" }],
        },
      ],
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <div className="relative bg-[url('/img/brd-bg-1.png')] bg-cover bg-center text-white text-center pb-15 pt-38 md:pb-38 md:pt-60 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">LAYANAN KAMI</h1>
      </div>

      {/* SECTION */}
      <section className="py-16 px-4 max-w-6xl mx-auto mb-50">
        {services.map((srv) => (
          <div
            key={srv.id}
            id={`service-${srv.id}`}
            className="border-b border-gray-200"
          >
            {/* HEADER SERVICE */}
            <div
              className={`flex justify-between items-center cursor-pointer px-6 py-6 transition-all ${
                openService === srv.id
                  ? "bg-orange-50 border border-orange-200"
                  : "hover:bg-gray-50"
              }`}
              onClick={() =>
                setOpenService(openService === srv.id ? null : srv.id)
              }
            >
              <div className="flex items-center gap-5">
                <Image src={srv.icon} alt={srv.name} width={50} height={50} />
                <span
                  className={`font-semibold ${
                    openService === srv.id
                      ? "text-orange-500"
                      : "text-gray-800"
                  }`}
                >
                  {srv.name}
                </span>
              </div>

              {/* ARROW ICON */}
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300 ${
                  openService === srv.id
                    ? "border-orange-500 text-orange-500"
                    : "border-gray-400 text-gray-500"
                }`}
              >
                {openService === srv.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* PROJECT CONTENT */}
            {openService === srv.id && (
              <div className="bg-white py-8 border-t">
                {srv.categories.length > 0 ? (
                  <>
                    <div className="text-center font-semibold text-white bg-[#196CB4] py-3 w-full rounded">
                      Project Kami
                    </div>

                    {srv.categories.map((cat, catIdx) => (
                      <div key={catIdx} className="mt-10">
                        {cat.type && (
                          <h5 className="text-xl font-semibold text-gray-800 mb-6 text-left">
                            {cat.type}
                          </h5>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
                          {cat.projects.map((proj, idx) => (
                            <div
                              key={idx}
                              className="w-full bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md flex flex-col hover:shadow-lg transition-all duration-300"
                            >
                              <div className="flex-grow flex justify-center items-center p-4">
                                <Image
                                  src={proj.img}
                                  alt={proj.name}
                                  width={800}
                                  height={500}
                                  className="object-contain w-full h-auto rounded-t-lg"
                                />
                              </div>
                              <div className="bg-[#CFE2FF] text-center py-4 font-bold text-[#004AAD] uppercase tracking-wide">
                                {proj.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-center text-gray-500 italic mt-4">
                    Belum ada project ditampilkan.
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default function OurServices() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <OurServicesContent />
    </Suspense>
  );
}
