import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const formRef = useRef(null);

  // Function to scroll to form
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Office Location",
      content: "Cumbum Theni, Tamil Nadu",
      label: "Visit Office",
      action: () => window.open("https://www.google.com/maps/dir//AK+Group+of+Companies,+Indira+Colony,+nearby+RR+International+School,+C.Pudupatti,+Puduppatti,+Tamil+Nadu+625556/@10.0159719,77.4633715,6889m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3b0705f33b2ac0e3:0x6be393af702e0d25!2m2!1d77.3027696!2d9.7601932!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", "_blank"),
    },
    {
      icon: Phone,
      title: "Phone Number 1",
      content: "+91 93622 25555",
      label: "Call Now",
      action: () => (window.location.href = "tel:+919362225555"),
    },
    {
      icon: Phone,
      title: "Phone Number 2",
      content: "+91 97881 11666",
      label: "Call Now",
      action: () => (window.location.href = "tel:+919788111666"),
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "akconstruction@gmail.com",
      label: "Send Email",
      action: scrollToForm,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const project = form.project.value;
    const message = form.message.value;

    const subject = `New Project Inquiry from ${fullName}`;
    const body = `
Full Name: ${fullName}
Email Address: ${email}
Phone Number: ${phone}
Project Type: ${project}

Message:
${message}
    `;

    window.location.href = `mailto:akconstruction@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="text-black overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] h-[85vh] md:h-screen overflow-hidden flex items-center">
        {/* HERO IMAGE */}
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/contact/contact.webp"
            alt="Construction"
            loading="eager"
            fetchpriority="high"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </motion.div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 w-full">
          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.05em] mb-4 md:mb-8 text-white leading-tight">
              Start Your Next
              <span className="block text-[#c78b48]">
                Project
              </span>
              With Confidence.
            </h1>

            <p className="text-white/80 text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed max-w-3xl">
              AK Construction delivers modern residential,
              commercial, and industrial construction
              solutions built with precision, durability,
              and trust.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative z-20 -mt-16 sm:-mt-24 md:-mt-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-xl border border-black/5 rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-10 min-h-[240px] md:min-h-[300px] flex flex-col justify-between shadow-[0_15px_50px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border border-black/5 bg-white/50 flex items-center justify-center mb-6 md:mb-10">
                    <card.icon className="w-5 h-5 md:w-6 md:h-6 text-[#c78b48]" />
                  </div>

                  <p className="uppercase text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-black/40 mb-3 md:mb-5">
                    {card.title}
                  </p>

                  <h3 
                    onClick={card.action}
                    className="text-lg md:text-xl xl:text-2xl font-medium leading-snug text-black break-words cursor-pointer hover:text-[#c78b48] transition-colors"
                  >
                    {card.content}
                  </h3>
                </div>

                <button 
                  onClick={card.action}
                  className="flex items-center gap-2 md:gap-3 mt-8 md:mt-12 uppercase tracking-[0.2em] md:tracking-[0.25em] text-[10px] md:text-xs text-[#c78b48] hover:opacity-70 transition-opacity font-semibold"
                >
                  {card.label}
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-16 md:py-24 lg:py-36 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 xl:gap-24 items-start">
          
          {/* LEFT CONTENT */}
          <div className="pt-2">
            <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-xs md:text-sm text-[#c78b48] mb-4 md:mb-6">
              Contact AK Construction
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-[-0.03em] mb-6 md:mb-10 text-black">
              Partner With
              <br />
              Industrial Experts.
            </h2>

            <div className="w-20 md:w-28 h-[2px] bg-[#c78b48] mb-8 md:mb-12" />

            <p className="text-black/70 text-base md:text-lg xl:text-xl leading-relaxed mb-8 md:mb-12 max-w-2xl">
              We build modern infrastructure with precision,
              engineering excellence, and long-term reliability.
              Every project is handled with uncompromising
              attention to detail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#c78b48]" />
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 font-semibold">
                    Business Hours
                  </p>
                </div>
                <ul className="space-y-2 md:space-y-3 text-black/60 text-sm md:text-base">
                  <li>Mon – Fri : 8 AM – 6 PM</li>
                  <li>Saturday : Appointment Only</li>
                  <li>Sunday : Closed</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5 text-[#c78b48]" />
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 font-semibold">
                    Headquarters
                  </p>
                </div>
                <p className="text-black/60 text-sm md:text-base leading-relaxed">
                  AK Construction Group
                  <br />
                  Theni Operations Center
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div ref={formRef} className="bg-white/60 backdrop-blur-xl border border-black/5 rounded-[30px] md:rounded-[40px] p-6 md:p-10 xl:p-14 shadow-[0_15px_60px_rgba(0,0,0,0.08)]">
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div>
                  <label className="block uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 mb-3 md:mb-5 font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="John Wick"
                    className="w-full bg-transparent border-b border-black/10 py-3 md:py-5 text-sm md:text-base outline-none focus:border-[#c78b48] transition-all placeholder:text-black/30"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 mb-3 md:mb-5 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@email.com"
                    className="w-full bg-transparent border-b border-black/10 py-3 md:py-5 text-sm md:text-base outline-none focus:border-[#c78b48] transition-all placeholder:text-black/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div>
                  <label className="block uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 mb-3 md:mb-5 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="+91 9876543210"
                    className="w-full bg-transparent border-b border-black/10 py-3 md:py-5 text-sm md:text-base outline-none focus:border-[#c78b48] transition-all placeholder:text-black/30"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 mb-3 md:mb-5 font-semibold">
                    Project Type
                  </label>
                  <select
                    name="project"
                    required
                    className="w-full bg-transparent border-b border-black/10 py-3 md:py-5 text-sm md:text-base outline-none focus:border-[#c78b48] transition-all text-black/70 cursor-pointer"
                  >
                    <option value="">Select Project</option>
                    <option>Commercial Construction</option>
                    <option>Industrial Infrastructure</option>
                    <option>Residential Projects</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 mb-3 md:mb-5 font-semibold">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-black/10 py-3 md:py-5 text-sm md:text-base outline-none focus:border-[#c78b48] transition-all resize-none placeholder:text-black/30"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#c78b48] text-black py-4 md:py-6 rounded-xl md:rounded-2xl uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-bold hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center gap-3 shadow-lg shadow-[#c78b48]/20"
              >
                Submit Request
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CINEMATIC BREAK */}
      <section className="relative h-[40vh] md:h-[60vh] lg:h-[75vh] overflow-hidden flex items-center justify-center">
        <img
          src="contact/contact1.webp"
          alt="Industrial"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[0.2em] md:tracking-[0.35em] text-[10px] md:text-sm text-[#c78b48] mb-4 md:mb-8">
            AK Construction
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl xl:text-[90px] font-bold leading-[1.1] md:leading-[0.95] tracking-[-0.04em] text-white max-w-6xl">
            Built With Precision.
            <br />
            Driven By Trust.
          </h2>
        </div>
      </section>
    </div>
  );
}