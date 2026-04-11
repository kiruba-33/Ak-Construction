import React from "react";
import { Phone, MapPin, Mail, Globe } from "lucide-react";
import MotionWrapper from "../components/MotionWrapper";
import SlideIn from "../components/SlideIn";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>

    
    <div className="bg-transparent text-[#1a1a1a] min-h-screen font-display pt-32 md:pt-36">

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">

          <MotionWrapper delay={0}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Contact
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#c89b3c] mt-2">
              AK Construction
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.4}>
            <p className="mt-4 text-gray-500">
              We build your vision into reality
            </p>
          </MotionWrapper>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT */}
          <SlideIn direction="left" delay={0.2}>
            <div className="group h-full backdrop-blur-md bg-white/50 border border-gray-200 p-10 rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div>
                <h2 className="text-2xl font-semibold mb-8">Get In Touch</h2>

                <div className="space-y-6">

                  <div className="flex items-start gap-4">
                    <Phone className="text-[#c89b3c] mt-1 transition-transform duration-300 group-hover:scale-110" size={22} />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p>936 222 5555</p>
                      <p>9788 111 666</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#c89b3c] mt-1 transition-transform duration-300 group-hover:scale-110" size={22} />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p>90/W-14, Indira Colony</p>
                      <p>C.Pudupatti, Cumbum - 625 556</p>
                      <p>Theni (Dt)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-[#c89b3c] mt-1 transition-transform duration-300 group-hover:scale-110" size={22} />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p>akcumbum@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Globe className="text-[#c89b3c] mt-1 transition-transform duration-300 group-hover:scale-110" size={22} />
                    <div>
                      <h4 className="font-medium">Social</h4>
                      <p>Instagram: akcumbum</p>
                      <p>Facebook: AK Construction</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </SlideIn>

          {/* RIGHT */}
          <SlideIn direction="right" delay={0.3}>
            <div className="group h-full backdrop-blur-md bg-white/50 border border-gray-200 p-10 rounded-2xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div>
                <h2 className="text-2xl font-semibold mb-8">Send Message</h2>

                <form className="space-y-6">

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-[#c89b3c] focus:shadow-md"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-[#c89b3c] focus:shadow-md"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-[#c89b3c] focus:shadow-md"
                  />

                  <textarea
                    placeholder="Your Message"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg outline-none h-32 resize-none transition-all duration-300 focus:ring-2 focus:ring-[#c89b3c] focus:shadow-md"
                  />

                </form>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-[#c89b3c] text-black font-semibold py-3 rounded-lg transition-all duration-200 hover:bg-[#e0b24c] active:scale-95 active:shadow-inner"
              >
                Send Message
              </button>

            </div>
          </SlideIn>

        </div>

        {/* MAP */}
        <div className="mt-20 rounded-2xl overflow-hidden shadow-sm">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=cumbum%20theni&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[320px]"
          ></iframe>
        </div>

      </div>
    </div>
    </PageWrapper>
  );
};

export default Contact;