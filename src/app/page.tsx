"use client";
import Image from "next/image";

export default function Home() {
  const ourServices = [
    { icon: "/afc.png", names: "AUTOMATIC FARE COLLECTION" },
    { icon: "/its.png", names: "INTELLEGENCE TRANSPORTATION SYSTEM" },
    { icon: "/sp.png", names: "SOLUSI PERBANKAN" },
    { icon: "/eo.png", names: "ELEKTRONIFIKASI & OTOMATISASI" },
    { icon: "/pd.png", names: "PLATFORM DIGITALISASI" },
    { icon: "/em.png", names: "E-COMMERCE & MARKETPLACE" },
    { icon: "/rs.png", names: "RETAIL SOLUTION" },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow">
        <div>
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Beranda</li>
          <li className="hover:text-blue-600 cursor-pointer">Tentang Kami</li>
          <li className="hover:text-blue-600 cursor-pointer">Layanan Kami</li>
          <li className="hover:text-blue-600 cursor-pointer">Kontak Kami</li>
        </ul>
      </nav>

      {/* HERO / HEAD */}
      <div className="relative bg-[url('/bg-hero.jpg')] bg-cover bg-center text-white text-center py-32 px-4">
        <div className="absolute inset-0 bg-[#0C0C47]/70"></div>
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
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold">
              LAYANAN KAMI
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold">
              HUBUNGI KAMI
            </button>
          </div>
        </div>
      </div>

      {/* SOFTWARE HOUSE */}
      <div className="flex justify-center bg-white py-20 px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-10 max-w-6xl">
          <div className="flex justify-center md:w-1/2">
            <Image
              src="/software.png"
              alt="Software"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center md:w-1/2 mt-8 md:mt-0 space-y-4">
            <h1 className="text-3xl font-semibold text-gray-800">
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
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md w-fit">
              SELENGKAPNYA TENTANG KAMI
            </button>
          </div>
        </div>
      </div>

      {/* MODEL BISNIS */}
      <div className="bg-[#0C2D6B] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:space-x-10">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <h1 className="text-3xl font-bold">MODEL BISNIS</h1>
          </div>
          <div className="md:w-2/3 space-y-10">
            <div className="flex items-start space-x-4">
              <Image src="/service.png" alt="" width={40} height={40} />
              <div>
                <h2 className="text-xl font-semibold">Solution as Services</h2>
                <p className="text-gray-200">
                  Penyediaan platform siap pakai berbasis langganan sesuai
                  kebutuhan bisnis dengan biaya investasi yang efisien.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Image src="/delivery.png" alt="" width={40} height={40} />
              <div>
                <h2 className="text-xl font-semibold">
                  Development & Delivery
                </h2>
                <p className="text-gray-200">
                  Pengembangan platform aplikasi dengan layanan backend maupun
                  frontend, disesuaikan dengan kebutuhan klien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LAYANAN KAMI */}
      <div className="py-20 bg-gray-50 px-6">
        <h1 className="text-center text-3xl font-bold mb-10">LAYANAN KAMI</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ourServices.map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <Image src={service.icon} alt={service.names} width={60} height={60} />
              <h2 className="font-semibold mt-4 text-lg">{service.names}</h2>
              <div className="w-10 h-[2px] bg-orange-500 my-3"></div>
              <p className="text-orange-500 font-medium cursor-pointer">
                Lihat Detail →
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SERTIFIKASI */}
      <div className="py-20 bg-gradient-to-b from-[#EAF0FF] to-white text-center">
        <h1 className="text-3xl font-bold mb-6">Sertifikasi</h1>
        <div className="flex justify-center gap-8 flex-wrap">
          <Image src="/iso1.png" alt="ISO" width={120} height={120} />
          <Image src="/iso2.png" alt="ISO" width={120} height={120} />
          <Image src="/iso3.png" alt="ISO" width={120} height={120} />
        </div>
      </div>

      {/* KONTAK KAMI */}
      <div className="bg-white py-20 px-6">
        <h1 className="text-3xl font-bold text-center mb-3">KONTAK KAMI</h1>
        <p className="text-center text-gray-600 mb-10">
          Hubungi kami atau kirim pesan untuk mendapatkan informasi lebih lengkap dari kami
        </p>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* LEFT CONTACT INFO */}
          <div className="bg-[#0C2D6B] text-white rounded-lg p-8 space-y-6">
            <div>
              <p className="font-bold">Alamat:</p>
              <p className="text-gray-200">
                Jl. Ks Tubun Raya No. 10, Jakarta Pusat, Indonesia
              </p>
            </div>
            <div>
              <p className="font-bold">Email:</p>
              <p className="text-gray-200">info@netzsoftware.com</p>
            </div>
            <div>
              <p className="font-bold">Telepon:</p>
              <p className="text-gray-200">(021) 345 2130</p>
            </div>
            <div>
              <p className="font-bold">Jam Kerja:</p>
              <p className="text-gray-200">Senin–Jumat: 08:00–17:00</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-1/2 border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Alamat Email"
                className="w-1/2 border p-2 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Subjek"
              className="w-full border p-2 rounded mb-4"
            />
            <textarea
              placeholder="Tulis pesan di sini..."
              className="w-full border p-2 rounded mb-4 h-32"
            ></textarea>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md">
              KIRIM PESAN
            </button>
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
