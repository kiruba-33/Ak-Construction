import React from 'react';
import { Link } from 'react-router-dom';
import { SendHorizontal } from 'lucide-react';
import PhysicsButton from '../../components/PhysicsButton';

const AboutCTA = () => {
  return (
    <section className="w-full py-24 sm:py-28 px-6 md:px-16 lg:px-24 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TOP LABEL */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-[2px] bg-red-600"></div>

          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-red-600">
            LET&apos;S BUILD TOGETHER
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-14">

          {/* LEFT CONTENT */}
          <div className="max-w-4xl">

            <h2
              className="
                font-bold
                text-[#0B1220]
                tracking-tight
                leading-[0.95]
                uppercase
                text-[clamp(2.8rem,7vw,6.5rem)]
              "
            >
              Engineering
              <br />
              Excellence.
            </h2>

            <p className="mt-8 text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl">
              At AK Construction, we craft modern architectural spaces with
              precision engineering, premium materials, and uncompromising
              quality standards built to last for generations.
            </p>

          </div>

          {/* RIGHT SIDE BUTTON */}
          <div className="flex-shrink-0">

            <Link to="/contact">
              <PhysicsButton>
                <div className="flex items-center gap-3">
                  <SendHorizontal className="w-4 h-4" />
                  Start Your Project
                </div>
              </PhysicsButton>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutCTA;