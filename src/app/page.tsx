

export default function Home() {
  const ourServices = [
    {icon: "afc.png", names: "AUTOMATIC FARE COLLECTION",},
    {icon: "its.png", names: "INTELLEGENCE TRANSPORTATION SYSTEM",},
    {icon: "sp.png", names: "SOLUSI PERBANKAN",},
    {icon: "eo.png", names: "ELEKTRONIFIKASI & OTOMATISASI",},
    {icon: "pd.png", names: "PLATFORM DIGITALISASI",},
    {icon: "em.png", names: "E-COMMERECE & MARKETPLACE",},
    {icon: "rs.png", names: "RETAIL SOLUTION",},
  ];

  return (
    <div>
        {/* navbar */}
        <nav>

        </nav>

        {/* head */}
        <div>

        </div>

        {/* software house */}
        <div className="flex justify-center">
            {/* main content of software house */}
            <div className="flex justtify-between" >
               <div>
                  <img></img>
                </div>
                <div className="flex flex-col justify-between">
                  <h1>Software House</h1>
                  <p></p>
                  <p></p>
                  <button></button>
                </div> 
            </div>
        </div>
        
        {/* model bussines */}
        <div className="flex justify-between"> 
          <div className="">
            <h1>Bisnis Model</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-between">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h1>Solution As Services</h1>
                <p></p>
              </div>
            </div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h1>Development & Delivery</h1>
                <p></p>
              </div>
            </div> 
          </div>
        </div>

        {/* our services */}
        <div>
          <div>
            <h1>LAYANAN KAMI</h1>
          </div>
          <div>

            {/* card */}
            <div>
              <div>
                <div></div>
                <img src="" alt="" />  
              </div>
              <h2></h2>
              {/* line */}
              <div></div>
              <div>
                <p>Lihat Detatil</p>
              </div>
            </div>

          </div>
        </div>

        {/* certificate */}
        <div>
          <h1>Sertifikasi</h1>
          {/* line */}
          <div></div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>

        {/* contact us */}
        <div>
          <h1>KONTAK KAMI</h1>
          <p>hubungi kami atau kirim pesan mendapatkan informasi lebih lengkap dari kami</p>
          <div>
            {/* contact */}
            <div>
              {/* card */}
              <div>
                <div>
                  svg
                </div>
                <div>
                  <p>Alamat:</p>
                  <p></p>
                </div>
              </div>

              <div>
                <div>
                  svg
                </div>
                <div>
                  <p>Email:</p>
                  <p></p>
                </div>
              </div>

              <div>
                <div>
                  svg
                </div>
                <div>
                  <p>Telepon:</p>
                  <p></p>
                </div>
              </div>

              <div>
                <div>
                  svg
                </div>
                <div>
                  <p>Jjam Kerja:</p>
                  <p></p>
                </div>
              </div>

            </div>

            {/* input */}
            <div>
              <div>
                <input type="text" />
                <input type="text" />
              </div>
              <input type="text" />
              <input type="text" />
              <button>KIRIM PESAN</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <div>
            <div>
              <h1>PT.JARING SOLUSI APLIKASI</h1>
              <p>Alamat:</p>
              <p></p>
            </div>

            <div>
              <h1>Kontak Kami</h1>
              <div>
                svg
                <p>(021) 345 2130</p>
              </div>
            </div>

            <div>
              <h1>Media Sosial</h1>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div>
            <p>PT. Jaring Solusi Aplikasi c 2024</p>
          </div>
        </footer>

    </div>
  );
}
