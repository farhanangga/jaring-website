"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

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
    
  return (
    <div className="font-sans bg-white text-gray-800">
      
      <Navbar/>

      {/* HERO / HEAD */}
      <div className="relative bg-[url('/img/brd-bg-1.png')] bg-cover bg-center text-white text-center pb-62 pt-52 px-4">
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            Commitment, Integrity, Future
          </h2>
          <h2 className="text-2xl md:text-4xl fofnt-semibold mb-4">
            Kami Berbicara Tentang Digital di Masa Depan
          </h2>
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
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[100px] md:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39 56.44C161.39 80.44 0 0 0 0v120h1200V0s-179.06 65.19-340 39.44c-160.94-25.75-320-60-538.61 17z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>

      {/* SOFTWARE HOUSE */}
      <div className="relative z-20 -mt-42 -mb-20 flex justify-center">
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
      <div className="relative bg-[#196CB4] bg-[url('/img/brd-bg-2.png')] bg-cover bg-center text-white pt-60  pb-28 px-6 overflow-hidden">
        {/* Overlay agar teks tetap jelas */}
        <div className="absolute inset-0 bg-[#196CB4]/30"></div>

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
      <div className="bg-[url('/img/brd-bg-2.png')] relative bg-cover bg-center overflow-hidden">
        <div className="py-20 bg-[#E9F3F9]/10 text-center">
          <h1 className="text-3xl font-bold mb-6">Sertifikasi</h1>
          <div className="flex justify-center gap-8 flex-wrap">
            <Image src="/img/icons/brd-iso-1.png" alt="ISO" width={120} height={120} />
            <Image src="/img/icons/brd-iso-2.png" alt="ISO" width={120} height={120} />
            <Image src="/img/icons/brd-iso-3.png" alt="ISO" width={120} height={120} />
          </div>
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
          <div className="bg-[#196CB4] text-white p-6 space-y-6">
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
                  <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /> 
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
                  <path strokeLinecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /> 
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
                <path strokeLinecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> 
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

      <Footer/>
      
    </div>
  );
}
