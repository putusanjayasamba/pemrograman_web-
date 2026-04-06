"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-10 py-4 bg-black border-b border-cyan-400 text-white z-50">
        <div className="text-2xl md:text-3xl font-bold text-cyan-400">
          Sanjaya
        </div>

        <ul className="flex space-x-3 md:space-x-8 font-bold text-[11px] sm:text-sm md:text-base">
          <li>
            <a
              href="#about"
              className="font-bold hover:text-cyan-400 transition"
            >
              About Me
            </a>
          </li>
          <li>
            <a href="#biodata" className="hover:text-cyan-400 transition">
              Biodata
            </a>
          </li>
          <li>
            <a href="#experiences" className="hover:text-cyan-400 transition">
              Experience
            </a>
          </li>
        </ul>
      </nav>
      <section
        id="about"
        className="min-h-screen flex items-center bg-black text-white pt-24 pb-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 px-6 md:px-20 w-full">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="sanjaya.jpeg"
              alt="foto Saya"
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px]  object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left md:ml-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-300">About </span>
              <span className="text-cyan-400">Me</span>
            </h1>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Hello! I'm an Informatics student interested in UI/UX and Web
              Development. I enjoy learning new things and developing my skills
              in technology.
            </p>

            <div className="flex justify-center md:justify-start gap-5 text-2xl">
              <a
                href="https://instagram.com/putusanjaya07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:scale-110 transition"
              >
                <i className="fa-brands fa-square-instagram"></i>
              </a>

              <a
                href="https://wa.me/6285858965089"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:scale-110 transition"
              >
                <i className="fa-brands fa-square-whatsapp"></i>
              </a>

              <a
                href="https://tiktok.com/@putusanjaya_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:scale-110 transition"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="biodata"
        className="min-h-screen py-20 bg-black scroll-mt-24 px-4"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-16 rounded-3xl shadow-[0_0_40px_rgba(0,188,212,0.3)] border border-cyan-900 flex flex-col md:flex-row gap-10 md:gap-16 text-white bg-black/50 backdrop-blur-sm">
          {/* Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Biodata</h2>
            <p className="leading-relaxed text-gray-300">
              Here is some personal information about me as an Informatics
              student who has an interest in UI/UX and Web Development.
            </p>
          </div>

          {/* Right */}
          <div className="md:w-1/2 space-y-4">
            <div>
              <span className="font-bold">Full Name</span>
              <p>Putu Sanjaya Samba</p>
            </div>

            <div>
              <span className="font-bold">Place, Date of Birth</span>
              <p>Bangli, 07 November 2005</p>
            </div>

            <div>
              <span className="font-bold">Address</span>
              <p>Bali, Bangli, Tamanbali, Banjar Umanyar</p>
            </div>

            <div>
              <span className="font-bold">Hobbies</span>
              <p>Volleyball, Futsal, Videography, Singing</p>
            </div>

            <div>
              <span className="font-bold">Email</span>
              <p>putusanjayasamba@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experiences"
        className="min-h-screen py-20 bg-black scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-300 mb-10">
            Experience
          </h2>

          {/* List */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="p-6 bg-black rounded-xl shadow-[0_0_20px_#00b4d8] hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Wedding Videographer
              </h3>
              <p className="text-gray-600">
                Worked as a videographer for wedding events, capturing special
                moments and creating memorable video documentation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-black rounded-xl shadow-[0_0_20px_#00b4d8] hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">DW at Falala</h3>
              <p className="text-gray-600">
                Worked as a Daily Worker at Falala, gaining experience in
                teamwork, responsibility, and customer service.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-black rounded-xl shadow-[0_0_20px_#00b4d8] hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                3rd Place – National Education Day Video Competition
              </h3>
              <p className="text-gray-600">
                Won 3rd place in a video competition celebrating National
                Education Day (HARSINAS) by producing a creative video project.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-black rounded-xl shadow-[0_0_20px_#00b4d8] hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                UI/UX Design – Coffee Cepat App
              </h3>
              <p className="text-gray-600">
                Designed the UI/UX for a mobile application called "Coffee
                Cepat", focusing on creating a simple, modern, and user-friendly
                interface for ordering coffee quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-cyan-400 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Nama */}
          <h3 className="text-2xl font-bold mb-2">Putu Sanjaya Samba</h3>

          {/* Deskripsi */}
          <p className="text-gray-400 mb-6">
            Informatics Student | Interested in UI/UX and Web Development
          </p>

          {/* Social */}
          <div className="flex justify-center gap-6 text-2xl mb-6">
            <a
              href="https://instagram.com/putusanjaya07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:scale-110 transition"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://wa.me/6285858965089"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:scale-110 transition"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a
              href="https://tiktok.com/@putusanjaya_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:scale-110 transition"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 Putu Sanjaya Samba | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
