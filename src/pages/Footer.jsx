import React from 'react';
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">

        {/* BG IMAGE */}
        <img
          src="/hero1.webp"
          alt="Footer Background"
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.06] scale-110"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/92" />

        {/* RED GLOW */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-red-600/10 blur-[180px]" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

      </div>

      {/* MAIN */}
      <div className="relative z-10">

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-16">

            {/* BRAND */}
            <div>

              {/* LOGO */}
              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-white shadow-2xl p-2">
                  <img
                    src="/loho.png"
                    alt="AK Construction"
                    loading='lazy'
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>

                  <h2 className="text-3xl font-bold tracking-tight leading-tight">
                    AK
                    <br />
                    Construction
                  </h2>

                  <p className="text-gray-500 mt-1 text-sm tracking-wide">
                    Premium Construction
                  </p>

                </div>

              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed text-[15px] max-w-md">
                We build premium residential and commercial spaces with
                precision engineering, architectural excellence, and
                uncompromising construction quality.
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-4 mt-10">

                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/share/1CLgY4Tvtb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                >
                  <Facebook
                    size={18}
                    className="group-hover:scale-110 transition"
                  />
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/akcumbum?igsh=Ym51Z3lpMmRyaTVr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                >
                  <Instagram
                    size={18}
                    className="group-hover:scale-110 transition"
                  />
                </a>

                {/* MAIL */}
                <a
                  href="mailto:akcumbum@gmail.com"
                  className="group w-12 h-12 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                >
                  <Mail
                    size={18}
                    className="group-hover:scale-110 transition"
                  />
                </a>

              </div>

            </div>

            {/* QUICK LINKS */}
            <div>

              <h3 className="text-white text-xl font-semibold mb-8">
                Quick Links
              </h3>

              <ul className="space-y-5">

                {[
                  ['Home', '/'],
                  ['About', '/about'],
                  ['Services', '/services'],
                  ['Gallery', '/gallery'],
                  ['Contact', '/contact'],
                ].map(([label, link]) => (
                  <li key={label}>
                    <a
                      href={link}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition"
                    >
                      <span>{label}</span>

                      <ArrowUpRight
                        size={15}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </a>
                  </li>
                ))}

              </ul>

            </div>

            {/* SERVICES */}
            <div>

              <h3 className="text-white text-xl font-semibold mb-8">
                Services
              </h3>

              <ul className="space-y-5 text-gray-400">

                <li className="hover:text-white transition cursor-pointer">
                  Residential Construction
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Commercial Projects
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Interior Design
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Renovation Works
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Architectural Planning
                </li>

              </ul>

            </div>

            {/* CONTACT */}
            <div>

              <h3 className="text-white text-xl font-semibold mb-8">
                Contact Info
              </h3>

              <div className="space-y-7">

                {/* ADDRESS */}
                {/* ADDRESS */}
<div className="flex items-start gap-4">

  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center flex-shrink-0 mt-1">
    <MapPin
      size={18}
      className="text-red-500"
    />
  </div>

  <div>
    <a
      href="https://www.google.com/maps/dir//AK+Group+of+Companies,+Indira+Colony,+nearby+RR+International+School,+C.Pudupatti,+Puduppatti,+Tamil+Nadu+625556/@10.0159719,77.4633715,6889m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3b0705f33b2ac0e3:0x6be393af702e0d25!2m2!1d77.3027696!2d9.7601932!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition leading-relaxed"
    >
      Indira Colony, C.Pudupatti Cumbum-625556, Theni,
      <br />
      Tamil Nadu
    </a>
  </div>

</div>

                {/* PHONE */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone
                      size={18}
                      className="text-red-500"
                    />
                  </div>

                  <div className="flex flex-col gap-3">

                    <a
                      href="tel:+919362225555"
                      className="text-gray-400 hover:text-white transition"
                    >
                      +91 93622 25555
                    </a>

                    <a
                      href="tel:+919788111666"
                      className="text-gray-400 hover:text-white transition"
                    >
                      +91 97881 11666
                    </a>

                  </div>

                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                    <Mail
                      size={18}
                      className="text-red-500"
                    />
                  </div>

                  <div className="flex items-center min-h-[48px]">
                    <a
                      href="mailto:akcumbum@gmail.com"
                      className="text-gray-400 hover:text-white transition break-all leading-none"
                    >
                      akcumbum@gmail.com
                    </a>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-7">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5 border-t border-white/10 pt-7">

            {/* COPYRIGHT */}
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} AK Construction. All Rights Reserved.
            </p>

            {/* DESIGN CREDIT */}
            <a
              href="https://navipromotions.in/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-all duration-300"
            >
              <span>
                Designed by Navi Promotions
              </span>

              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;