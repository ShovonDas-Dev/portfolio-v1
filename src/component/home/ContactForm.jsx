import { useState } from "react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import navdata from "../../Data/HeroData"

export default function ContactForm() {
  const link = navdata[0].navBar
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-4 py-12 bg-bg1 flex items-center justify-center " >
      <motion.div className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}

        transition={{ duration: 1, ease: "easeOut" }}

      >
        <div className="flex justify-center mb-12">
          <h1 className="inline-block border-2 border-[#00ffcc] text-white font-semibold text-sm px-6 py-2 rounded-tl-[24px] rounded-br-[24px] bg-[#1f242d] shadow-[0_0_15px_rgba(0,255,255,0.1)] md:text-xl">
            Contact Me
          </h1>
        </div>



        {/* Title */}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-[#00e5c8] text-xs font-medium tracking-wide">
                Your name <span className="text-[#00e5c8]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="bg-transparent border-b border-gray-600 focus:border-[#00e5c8] outline-none text-gray-300 placeholder-gray-500 text-sm py-2 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#00e5c8] text-xs font-medium tracking-wide">
                Your email <span className="text-[#00e5c8]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="bg-transparent border-b border-gray-600 focus:border-[#00e5c8] outline-none text-gray-300 placeholder-gray-500 text-sm py-2 transition-colors duration-300"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-[#00e5c8] text-xs font-medium tracking-wide">
              Your message <span className="text-[#00e5c8]">*</span>
            </label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your needs"
              required
              className="bg-transparent border-b border-gray-600 focus:border-[#00e5c8] outline-none text-gray-300 placeholder-gray-500 text-sm py-2 transition-colors duration-300"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#00e5c8] hover:bg-[#00c9ae] active:scale-95 text-[#1a1f2e] font-semibold text-sm px-8 py-3 rounded-full transition-all duration-300">
              {submitted ? "Message Sent!" : "Send Message"}
              {!submitted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M2 3l20 9-20 9V3zm0 0v7l10 2-10 2v7" />
                  <path d="M2 3l20 9-20 9V3z" fillRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </form>

        <div className="flex flex-col align-center mt-12 items-center gap-4 md:flex-row justify-center md:gap-40">
          <div className=" flex items-center gap-4 md:gap-6 text-xs text-gray-400">
            <a
              href={link.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-white hover:text-mint transition-colors md:text-sm">
              <FaInstagram className="text-md md:text-lg text-mint" /> Instagram
            </a>
            <a
              href={link.discord}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-mint transition-colors md:text-sm">
              <FaDiscord className="text-md md:text-lg text-mint" /> Discord
            </a>
            <a
              href={link.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-mint transition-colors md:text-sm">
              <FaGithub className="text-md md:text-lg text-mint" /> Github
            </a>
          </div>
          <div>
            <p className="text-xs text-gray-400 md:text-sm">
              Address: 123 Main Street, City, Country
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
