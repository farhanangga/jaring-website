"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function OurServices() {
const [openService, setOpenService] = useState<number | null>(null);


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
    projects: [
      { img: "/img/ourServices/its-1.png", name: "ITS PLATFORM" },
      { img: "/img/ourServices/its-2.png", name: "TRAFFIC MONITORING" },
      { img: "/img/ourServices/its-3.png", name: "SMART LIGHT SYSTEM" },
      { img: "/img/ourServices/its-4.png", name: "CONTROL DASHBOARD" },
      { img: "/img/ourServices/its-5.png", name: "TRAFFIC DATA CENTER" },
      { img: "/img/ourServices/its-6.png", name: "VEHICLE TRACKING" },
      { img: "/img/ourServices/its-7.png", name: "PAYMENT INTEGRATION" },
    ],
  },
  {
    id: 3,
    icon: "/img/icons/brd-os-3.png",
    name: "SOLUSI PERBANKAN",
    projects: [
      { img: "/img/ourServices/sp-1.png", name: "BANKING GATEWAY" },
      { img: "/img/ourServices/sp-2.png", name: "SMART PAYMENT" },
      { img: "/img/ourServices/sp-3.png", name: "ACCOUNT MANAGEMENT" },
    ],
  },
  {
    id: 4,
    icon: "/img/icons/brd-os-4.png",
    name: "ELEKTRONIFIKASI & OTOMATISASI",
    projects: [
      { img: "/img/ourServices/eo-1.png", name: "PARKING SYSTEM" },
      { img: "/img/ourServices/eo-2.png", name: "E-KARCIS" },
      { img: "/img/ourServices/eo-3.png", name: "E-TOLLING" },
      { img: "/img/ourServices/eo-4.png", name: "PARKING CONTROL" },
      { img: "/img/ourServices/eo-4-2.png", name: "PARKING MONITORING" },
      { img: "/img/ourServices/eo-5.png", name: "PARKING DASHBOARD" },
    ],
  },
  {
    id: 5,
    icon: "/img/icons/brd-os-5.png",
    name: "PLATFORM DIGITALISASI",
    projects: [
      { img: "/img/ourServices/pd-1.png", name: "KARSUKU" },
      { img: "/img/ourServices/pd-2.png", name: "ILP MILITER" },
      { img: "/img/ourServices/pd-3.png", name: "MATERIAL DIGITAL" },
    ],
  },
  {
    id: 6,
    icon: "/img/icons/brd-os-6.png",
    name: "E-COMMERCE & MARKETPLACE",
    projects: [
      { img: "/img/ourServices/em-1.png", name: "AKULAKU" },
      { img: "/img/ourServices/em-2.png", name: "NYEBRANG" },
    ],
  },
  {
    id: 7,
    icon: "/img/icons/brd-os-7.png",
    name: "RETAIL SOLUTION",
    projects: [
      { img: "/img/ourServices/rt-1.png", name: "JARING RETAIL SYSTEM" },
    ],
  },
];

  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <div className="relative bg-[url('/img/brd-bg-1.png')] bg-cover bg-center text-white text-center pb-15 pt-38 md:pb-38 md:pt-52 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">LAYANAN KAMI</h1>
      </div>

      {/* SECTION */}
      <section className="py-16 px-4 max-w-6xl mx-auto mb-50">
        {services.map((srv) => (
          <div key={srv.id} className=" border-b border-gray-200">
            {/* HEADER SERVICE */}
            <div
              className={`flex justify-between items-center cursor-pointer px-6 py-6 transition-all ${
                openService === srv.id ? "bg-orange-50 border border-orange-200" : "hover:bg-gray-50"
              }`}
              onClick={() => setOpenService(openService === srv.id ? null : srv.id)}
            >
              <div className="flex items-center gap-5">
                <Image src={srv.icon} alt={srv.name} width={50} height={50} />
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
              <div className="bg-white py-8 border-t">
                {srv.projects.length > 0 ? (
                  <>
                    <div className="text-center font-semibold text-white bg-blue-600 py-3 w-full rounded">
                      Project Kami
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
                    {srv.projects.map((proj, idx) => (
                      <div
                        key={idx}
                        className="w-full bg-white rounded-lg overflow-hidden shadow-md flex flex-col hover:shadow-lg transition-all duration-300"
                      >
                        {/* Gambar */}
                        <div className="flex-grow flex justify-center items-center p-4">
                          <Image
                            src={proj.img}
                            alt={proj.name}
                            width={800}
                            height={500}
                            className="object-contain w-full h-auto rounded-t-lg"
                          />
                        </div>

                        {/* Nama Project */}
                        <div className="bg-[#CFE2FF] text-center py-4 font-bold text-[#004AAD] uppercase tracking-wide">
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
