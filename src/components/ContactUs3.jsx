import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfoFooter = () => {
  return (
    <>
      {/* CONTACT INFO SECTION */}
      <section className="pt-48 pb-16 px-6 bg-gradient-to-b from-[#f7fafc] to-[#e8f0f8] text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#1a365d] mb-8 tracking-wide">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-10">
          We’d love to hear from you! Whether it’s a collaboration, question, or just a hello,
          reach out through any of the options below.
        </p>

        <ul className="space-y-6 text-gray-700 text-lg font-medium">
          <li className="flex items-center justify-center gap-3 hover:text-[#4e7ea8] transition-all duration-300">
            <Phone className="text-[#4e7ea8]" size={22} /> +977 3579834759739
          </li>
          <li className="flex items-center justify-center gap-3 hover:text-[#4e7ea8] transition-all duration-300">
            <Mail className="text-[#4e7ea8]" size={22} /> xceleratestats@gmail.com
          </li>
          <li className="flex items-center justify-center gap-3 hover:text-[#4e7ea8] transition-all duration-300">
            <MapPin className="text-[#4e7ea8]" size={22} /> Dhobidhara, Kathmandu
          </li>
        </ul>
      </section>

      {/* FOOTER SECTION */}
      <footer
        className="text-white pt-20 pb-12 px-6 mt-0 rounded-t-3xl shadow-inner"
        style={{
          background: "linear-gradient(135deg, #3f6279, #4e7ea8)",
        }}
      >
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center border border-white/20">
          <h3 className="text-3xl font-semibold mb-4 text-[#e0ecff] tracking-wide">
            Join <span className="text-white">The Scoreboard</span>
          </h3>
          <p className="text-blue-100 text-base mb-6 leading-relaxed font-light">
            Get quarterly updates filled with insights, tips, and the latest trends in sports data
            and engagement. Stay connected with what’s next in sports innovation.
          </p>

          <div className="flex flex-col items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-3/4 px-5 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            />
            <label className="text-sm text-blue-100">
              <input type="checkbox" className="mr-2 accent-blue-300" /> I agree to receive updates
            </label>
            <button className="mt-3 px-8 py-3 bg-gradient-to-r from-[#5a90c7] to-[#4e7ea8] rounded-full font-bold text-white shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300">
              Sign Me Up!
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactInfoFooter;
