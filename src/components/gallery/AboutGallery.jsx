import React from "react";

const AboutGallery = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="w-full bg-transparent py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[520px]">
            <img
              src="/hero1.webp"
              alt="About AK Construction"
              className="w-full h-full object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>

            <div className="absolute bottom-6 left-6 bg-white px-6 py-4 rounded-xl shadow-lg">
              <p className="text-sm text-gray-500">Since</p>
              <h3 className="text-xl font-bold text-red-600">2015</h3>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About <span className="text-red-600">AK Construction</span>
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              We specialize in delivering high-quality construction solutions 
              tailored to meet modern standards. With years of experience, our team 
              focuses on precision, durability, and client satisfaction.
            </p>

            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              From residential to commercial projects, we ensure every detail is 
              executed with professionalism and commitment to excellence.
            </p>

            <div className="mt-10">
              <button className="bg-black text-white px-7 py-3 rounded-full hover:bg-red-600 transition duration-300 shadow-md">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutGallery;