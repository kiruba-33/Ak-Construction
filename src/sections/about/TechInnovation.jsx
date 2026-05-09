import React from 'react';
import SlideIn from '../../components/SlideIn';
import {
  FileText,
  BrainCircuit,
  HardHat,
  ClipboardList,
  Building,
  Zap
} from 'lucide-react';

const TechInnovation = () => {

  const techItems = [
    {
      id: '01',
      title: 'Cloud Collaboration',
      icon: FileText,
      desc: 'Real-time sync of architectural designs and structural blueprints.',
      label: 'DIGITAL'
    },
    {
      id: '02',
      title: 'AI Design Optimization',
      icon: BrainCircuit,
      desc: 'Algorithms optimizing material usage and structural efficiency.',
      label: 'AI'
    },
    {
      id: '03',
      title: 'AR Field Guides',
      icon: HardHat,
      desc: 'On-site AR overlays guiding teams with precision.',
      label: 'ON-SITE'
    },
    {
      id: '04',
      title: 'IoT Jobsite Monitoring',
      icon: ClipboardList,
      desc: 'Sensors tracking safety, materials, and progress.',
      label: 'DATA'
    },
    {
      id: '05',
      title: '3D Prefabrication',
      icon: Building,
      desc: 'Precision prefabrication reducing waste and time.',
      label: 'TECH'
    },
    {
      id: '06',
      title: 'Integrated Delivery',
      icon: Zap,
      desc: 'Unified workflow from design to execution.',
      label: 'SYSTEM'
    },
  ];

  return (
    <section className="py-24 px-6 bg-transparent">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">

          <p className="text-xs tracking-[0.3em] text-red-600 mb-4 font-semibold">
            INNOVATION
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-black leading-tight">
            Built on <br />
            <span className="text-red-600">Smart Systems</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl">
            Every phase of our construction process is powered by integrated technologies designed for precision and scale.
          </p>

        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

          <div className="space-y-20">

            {techItems.map((item, i) => {

              const isLeft = i % 2 === 0;

              return (

                <SlideIn
                  key={item.id}
                  direction={isLeft ? "left" : "right"}
                  delay={i * 0.12}
                >

                  <div className="flex flex-col md:flex-row items-center">

                    {isLeft ? (
                      <>
                        {/* LEFT CARD */}
                        <div className="w-full md:w-[45%] p-[1px] bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl">

                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition duration-300">

                            <div className="flex justify-between mb-4">

                              <span className="text-xs tracking-widest text-red-600 font-semibold">
                                {item.label}
                              </span>

                              <span className="text-gray-400 text-sm">
                                {item.id}
                              </span>

                            </div>

                            <item.icon className="w-5 h-5 text-red-600 mb-3" />

                            <h3 className="text-xl font-bold text-black mb-2">
                              {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                              {item.desc}
                            </p>

                          </div>

                        </div>

                        {/* DOT */}
                        <div className="hidden md:flex w-[10%] justify-center relative">

                          <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-md z-10"></div>

                        </div>

                        {/* EMPTY */}
                        <div className="hidden md:block w-[45%]"></div>
                      </>
                    ) : (
                      <>
                        {/* EMPTY */}
                        <div className="hidden md:block w-[45%]"></div>

                        {/* DOT */}
                        <div className="hidden md:flex w-[10%] justify-center relative">

                          <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-md z-10"></div>

                        </div>

                        {/* RIGHT CARD */}
                        <div className="w-full md:w-[45%] p-[1px] bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl">

                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition duration-300">

                            <div className="flex justify-between mb-4">

                              <span className="text-xs tracking-widest text-red-600 font-semibold">
                                {item.label}
                              </span>

                              <span className="text-gray-400 text-sm">
                                {item.id}
                              </span>

                            </div>

                            <item.icon className="w-5 h-5 text-red-600 mb-3" />

                            <h3 className="text-xl font-bold text-black mb-2">
                              {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                              {item.desc}
                            </p>

                          </div>

                        </div>
                      </>
                    )}

                  </div>

                </SlideIn>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default TechInnovation;