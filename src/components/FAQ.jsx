import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of construction projects do you handle?",
      answer: "We specialize in residential homes, commercial buildings, and industrial renovations. From foundation to finishing, we handle everything with premium quality."
    },
    {
      question: "How do I get an initial quote for my project?",
      answer: "You can reach out via our contact form or call us directly. We will schedule a site visit and provide a detailed estimate based on your specific requirements."
    },
    {
      question: "Do you provide 3D architectural designs before starting?",
      answer: "Yes! We provide high-quality 3D visualizations and floor plans so you can see exactly how your project will look before construction begins."
    },
    {
      question: "What is the typical timeline for a residential project?",
      answer: "A standard residential project usually takes 6 to 12 months, depending on the scale and complexity. We provide a clear project schedule at the start."
    },
    {
      question: "Are your construction services licensed and insured?",
      answer: "Absolutely. AK Construction is fully licensed and insured, ensuring that your property and our workers are protected throughout the process."
    },
    {
      question: "What materials do you use for construction?",
      answer: "We use only A-grade, certified materials from trusted brands. Quality is our top priority, and we never compromise on the structural integrity of your build."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-transparent font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center lg:text-left mb-10 md:mb-16">

          <h2 className="text-xs sm:text-sm md:text-base font-display font-semibold text-red-600 tracking-[0.2em] uppercase">
            Got Questions?
          </h2>

          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0B1220] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Image Area */}
          <div className="lg:col-span-5 order-1 lg:order-2 sticky lg:top-32">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/homeimages/homefaq.webp"
                  loading="lazy"
                  alt="High quality construction site"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                  <p className="font-display font-bold text-lg sm:text-xl md:text-2xl">
                    AK Construction
                  </p>

                  <p className="text-[10px] sm:text-xs md:text-sm opacity-80 uppercase tracking-wider font-sans">
                    Building Dreams since 2016
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Area */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-4 md:space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`border border-gray-100 rounded-xl md:rounded-2xl bg-white shadow-sm transition-all duration-300 ease-in-out ${
                    isOpen ? 'shadow-lg ring-1 ring-gray-100 scale-[1.01]' : 'hover:shadow-md'
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-center p-4 sm:p-5 md:p-6 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm sm:text-base md:text-lg font-display font-semibold transition-colors duration-300 ${
                        isOpen ? 'text-orange-600' : 'text-gray-800'
                      }`}
                    >
                      {faq.question}
                    </span>

                    <div
                      className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${
                          isOpen ? 'text-orange-600' : 'text-gray-400'
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 border-t border-gray-100 text-gray-600 bg-gray-50/30 rounded-b-xl md:rounded-b-2xl">
                      <div className="pt-3 md:pt-4 text-sm sm:text-base leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;