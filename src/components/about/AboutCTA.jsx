import React from 'react';
import MotionWrapper from '../MotionWrapper';
import { SendHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import PhysicsButton from '../PhysicsButton';

const ctaBg = "/hero1.webp";

const AboutCTA = () => {
  return (
    <section className="w-full relative overflow-hidden">

      <div
        className="relative w-full min-h-[420px] md:min-h-[500px] grid md:grid-cols-2 items-center px-6 md:px-20 py-16 md:py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >

        {/* 🔥 DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* 🔥 ANIMATED GRID (CONSTRUCTION STYLE) */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-gridMove"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-white max-w-xl">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-red-500"></div>
            <MotionWrapper>
              <p className="text-xs tracking-[0.3em] uppercase text-red-300 font-semibold">
                LET'S BUILD TOGETHER
              </p>
            </MotionWrapper>
          </div>

          <MotionWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight uppercase">
              Looking for a <br />
              <span className="text-red-500">Reliable</span> Construction Partner?
            </h2>

            <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed">
              We deliver precision-built projects with uncompromising quality and long-term durability.
            </p>
          </MotionWrapper>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10 flex justify-start md:justify-end mt-8 md:mt-0">

          <Link to="/contact">
            <PhysicsButton>
              <div className="flex items-center gap-3">
                <SendHorizontal className="w-4 h-4" />
                Get a Quote
              </div>
            </PhysicsButton>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default AboutCTA;