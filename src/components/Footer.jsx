import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[url('/img/brd-bg-3.png')] relative bg-[#196CB4] bg-cover bg-center overflow-hidden">
      <footer className="bg-[#196CB4]/30 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-6">
          {/* Alamat */}
          <div>
            <h1 className="font-bold text-lg mb-2">PT. JARING SOLUSI APLIKASI</h1>
            <p className="text-gray-300 text-sm">
              JL. Krekot Bunder Raya No.26, RT.2/RW.6, Ps. Baru, <br />
              Kec. Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h1 className="font-bold text-lg mb-2">Kontak Kami</h1>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25..." />
              </svg>
              <p className="text-gray-300 text-sm">(021) 345 2130</p>
            </div>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25..." />
              </svg>
              <p className="text-gray-300 text-sm">cs@net2software.com</p>
            </div>
          </div>

          {/* Sosial Media */}
          <div>
            <h1 className="font-bold text-lg mb-2">Media Sosial</h1>
            <div className="flex space-x-4">
              <Image src="/img/icons/ft-1-fb.png" alt="Facebook" width={30} height={30} />
              <Image src="/img/icons/ft-2-ig.png" alt="Instagram" width={30} height={30} />
              <Image src="/img/icons/ft-3-x.png" alt="X" width={30} height={30} />
              <Image src="/img/icons/ft-4-yt.png" alt="Youtube" width={30} height={30} />
            </div>
          </div>
        </div>

        <div className="pt-20 text-center text-sm text-gray-300">
          PT. Jaring Solusi Aplikasi © 2024
        </div>
      </footer>
    </div>
  );
}
