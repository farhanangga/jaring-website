"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function OurServices() {
  const [openService, setOpenService] = useState(null);

  const services = [
    {
      id: 1,
      icon: "/img/icons/brd-os-1.png",
      name: "AUTOMATIC FARE COLLECTION",
      projects: [
        { img: "/img/ourServices/afc-1-damri.png", name: "DAMRI" },
        { img: "/img/ourServices/afc-2-transjakarta.png", name: "TRANSJAKARTA" },
        { img: "/img/ourServices/afc-3-suroboyo.png", name: "SUROBOYO" },
        { img: "/img/ourServices/afc-4-biskita.png", name: "BISKITA" },
        { img: "/img/ourServices/afc-5-koetaradja.png", name: "TRANS KOETARADJA" },
      ],
    },
    {
      id: 2,
      icon: "/img/icons/brd-os-2.png",
      name: "INTELLIGENT TRANSPORTATION SYSTEM",
      projects: [],
    },
    {
      id: 3,
      icon: "/img/icons/brd-os-3.png",
      name: "SOLUSI PERBANKAN",
      projects: [],
    },
    {
      id: 4,
      icon: "/img/icons/brd-os-4.png",
      name: "ELEKTRONIFIKASI & OTOMATISASI",
      projects: [],
    },
    {
      id: 5,
      icon: "/img/icons/brd-os-5.png",
      name: "PLATFORM DIGITALISASI",
      projects: [],
    },
    {
      id: 6,
      icon: "/img/icons/brd-os-6.png",
      name: "E-COMMERCE & MARKETPLACE",
      projects: [],
    },
    {
      id: 7,
      icon: "/img/icons/brd-os-7.png",
      name: "RETAIL SOLUTION",
      projects: [],
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <div className="relative bg-[url('/img/brd-bg-1.png')] bg-cover bg-center text-white text-center pb-48 pt-56 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">LAYANAN KAMI</h1>
      </div>

      {/* SECTION */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {services.map((srv) => (
          <div key={srv.id} className="mb-4 border-b border-gray-200">
            {/* HEADER SERVICE */}
            <div
              className={`flex justify-between items-center cursor-pointer px-6 py-4 rounded-md transition-all ${
                openService === srv.id ? "bg-orange-50 border border-orange-200" : "hover:bg-gray-50"
              }`}
              onClick={() => setOpenService(openService === srv.id ? null : srv.id)}
            >
              <div className="flex items-center gap-3">
                <Image src={srv.icon} alt={srv.name} width={30} height={30} />
                <span
                  className={`font-semibold ${
                    openService === srv.id ? "text-orange-500" : "text-gray-800"
                  }`}
                >
                  {srv.name}
                </span>
              </div>
              {openService === srv.id ? (
                <ChevronDown className="text-orange-500" />
              ) : (
                <ChevronRight className="text-gray-500" />
              )}
            </div>

            {/* PROJECT CONTENT */}
            {openService === srv.id && (
              <div className="bg-white py-8 px-4 border-t">
                {srv.projects.length > 0 ? (
                  <>
                    <h3 className="text-center font-semibold text-white bg-blue-600 py-2 w-full max-w-md mx-auto rounded">
                      Project Kami
                    </h3>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                      {srv.projects.map((proj, idx) => (
                        <div
                          key={idx}
                          className="w-full max-w-sm bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition"
                        >
                          <Image
                            src={proj.img}
                            alt={proj.name}
                            width={600}
                            height={400}
                            className="object-cover w-full h-auto"
                          />
                          <div className="bg-blue-100 text-center py-2 font-semibold text-blue-800">
                            {proj.name}
                          </div>
                        </div>
                      ))}
                    </div>
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
