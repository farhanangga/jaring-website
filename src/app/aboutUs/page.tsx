"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  const fokusBisnis = [
    {
      icon: "/img/icons/au-1.png",
      title: "Retail",
      desc: "Product, pricing & tax, inventory, stock movement, merchant/shop, sales, user cashier, sales accounting, reporting.",
    },
    {
      icon: "/img/icons/au-2.png",
      title: "Customer Management",
      desc: "Customer registration and database, product mastering, customer handling, open/close ticket, data analytical.",
    },
    {
      icon: "/img/icons/au-3.png",
      title: "Ticketing",
      desc: "Bus management ticketing, commuter train management ticketing, entertainment/event management ticketing.",
    },
    {
      icon: "/img/icons/au-4.png",
      title: "Server Based Electronic Money",
      desc: "Account management, KEY and credential security management, 2FA, accounting management, transaction management, merchant management, settlement management.",
    },
    {
      icon: "/img/icons/au-5.png",
      title: "Chip Based Electronic Money",
      desc: "Card issuing management, KEY security management, 2FA, accounting management, transaction management, merchant and terminal management, settlement management.",
    },
    {
      icon: "/img/icons/au-6.png",
      title: "Cross Platform Electronic Payment",
      desc: "Payment and channeling distribution.",
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative bg-[url('/img/brd-bg-1.png')] bg-cover bg-center text-white text-center pb-15 pt-35 md:pb-38 md:pt-60 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">TENTANG KAMI</h1>
        <p className="text-lg md:text-xl font-light">Commitment, Integrity, Future.</p>
        <p className="text-base mt-2">Kami Berbicara Tentang Digital di Masa Depan</p>
      </div>

    {/* PROFILE SECTION */}
    <section className="relative px-6 md:px-30 py-20 overflow-hidden ">
        {/* ICON BACKGROUND LAYER */}
        <div className="absolute top-[-150px] left-[-100px] z-0 opacity-20 pointer-events-none">
        <Image
            src="/img/icons/au-bg-half-circle.png"
            alt="Background Circle"
            width={400}
            height={400}
            className="object-contain"
        />
        </div>

    {/* CONTENT */}
    <div className="relative z-10 py-10">
        <div className="flex flex-col justify-between space-y-10 md:space-y-0 md:flex-row md:items-center">
        {/* LEFT SIDE */}
            <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
                PT. JARING SOLUSI APLIKASI
                </h2>
                <p className="text-gray-700 leading-relaxed">
                Didirikan di Jakarta pada awal tahun 2016 berkedudukan di Jakarta, beralamat di Jalan
                Pintu Air IV No.25-A, Pasar Baru, Jakarta Pusat 10710.
                </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center md:justify-end md:w-1/2">
                <Image
                src="/img/logo.png"
                alt="Jaring Logo"
                width={500}
                height={250}
                className="object-contain"
                />
            </div>
        </div>

        {/* DESCRIPTION SECTION */}
        <div className="">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
            SOFTWARE HOUSE
        </h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
            Berlatar belakang tim human resource dengan kualifikasi software engineering
            mengilhami PT Jaring Solusi Aplikasi (selanjutnya disebut JARING) yang didedikasikan
            sebagai software house bertujuan menghasilkan produk-produk aplikasi pada tataran
            platform serta aplikasi antar muka sebagai media alat mendukung pelanggan dalam
            menyelenggarakan tata kelola usaha dan komersial.
        </p>
        <p className="text-gray-700 leading-relaxed">
            Karakter dunia usaha Indonesia yang sangat dinamis, keragaman serta keunikan bisnis
            proses dalam berbagai segmen industri menjadi tantangan bagi pelaku usaha dalam
            penerapan sistem berbasis teknologi. Diilhami oleh hal ini, JARING tampil melahirkan
            produk sebagai keunggulan lokal menjawab tantangan implementasi teknologi aplikasi
            mengutamakan fleksibilitas, kehandalan, dan skalabilitas.
        </p>
        </div>
    </div>
    </section>

      {/* FOKUS BISNIS */}
      <section className="bg-blue-50 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">FOKUS BISNIS</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {fokusBisnis.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg flex flex-col w-90 
                        transition-all duration-300 transform hover:scale-105 hover:shadow-xl group text-left"
            >
                <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute bg-gray-100 w-10 h-10 rounded-full z-10 top-1 left-7" />
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="relative z-10"
                />
                </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
