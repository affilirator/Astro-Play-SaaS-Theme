import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Implement form submission logic here
      console.log("Form submitted:", formData);
      setSuccess("Thank you for contacting us! We will get back to you soon.");
      setFormData({ name: "", email: "", reason: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className="bg-[#F5F5F5] py-16 px-10 text-gray-800">
      <div className="container mx-auto mt-16 flex flex-col lg:flex-row lg:justify-between lg:items-start">
        {/* Form Section */}
        <motion.div
          className="flex-1 lg:order-1 mb-8 lg:mb-0 lg:pr-8"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[#A27055] mb-4">
            Use This Form to Contact Us
          </h3>
          <form
            className="bg-white p-6 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border-2 border-[#A27055] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#42f56c]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border-2 border-[#A27055] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#42f56c]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="reason"
                className="block text-gray-700 font-semibold mb-2"
              >
                Reason for Contacting
              </label>
              <select
                id="reason"
                name="reason"
                className="w-full p-3 border-2 border-[#A27055] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#42f56c]"
                value={formData.reason}
                onChange={handleChange}
                required
              >
                <option value="">Select a reason</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="feedback">Feedback</option>
                <option value="support">Support Request</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border-2 border-[#A27055] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#42f56c]"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            <button
              type="submit"
              className="bg-[#44634b] hover:bg-[#0c4e1a] text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          className="flex-1 flex flex-col lg:order-2 justify-center lg:items-start"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#A27055] mb-4">
            We'd Love to Hear From You!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Whether you have questions about rabbit farming, want to explore
            partnership opportunities, or just want to say hello, we're here to
            listen. Reach out to us using the details below or fill out the
            contact form, and we'll get back to you as soon as possible.
          </p>

          <div className="flex flex-col space-y-6 mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-[#A27055]">📞</span>
              <div className="text-gray-800">
                <p className="font-semibold">John Doe</p>
                <p>+254 701 234 567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-[#A27055]">📞</span>
              <div className="text-gray-800">
                <p className="font-semibold">Jane Smith</p>
                <p>+254 701 890 123</p>
              </div>
            </div>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://facebook.com"
                className="text-[#4267B2] hover:text-[#365899] transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                className="text-[#1DA1F2] hover:text-[#0d8cfc] transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="text-[#C13584] hover:text-[#b1306b] transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="text-[#0077B5] hover:text-[#005582] transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSection;
