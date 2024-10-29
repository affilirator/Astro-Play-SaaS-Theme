import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Alice Mwangi",
    title: "Co-Founder & Farm Manager",
    photo: "https://example.com/alice.jpg",
    description:
      "Alice is passionate about sustainable farming practices and has been instrumental in pioneering rabbit farming in Kenya.",
    socialLinks: {
      facebook: "https://facebook.com/alice",
      twitter: "https://twitter.com/alice",
      linkedin: "https://linkedin.com/in/alice",
    },
  },
  {
    name: "John Otieno",
    title: "Head of Operations",
    photo: "https://example.com/john.jpg",
    description:
      "John oversees the daily operations at Rabbit Choice Farms, ensuring efficiency and quality in our processes.",
    socialLinks: {
      facebook: "https://facebook.com/john",
      twitter: "https://twitter.com/john",
      linkedin: "https://linkedin.com/in/john",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#A27055] to-[#106f26] py-10">
      <h2 className="text-4xl text-center text-white font-bold mb-8">
        Meet Our Team
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 max-w-xs transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05, rotateZ: 5 }}
          >
            <div className="relative">
              <img
                src={member.photo}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-[#106f26] shadow-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#106f26] opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-center text-[#A27055]">
              {member.name}
            </h3>
            <p className="text-md text-center text-gray-700">{member.title}</p>
            <p className="text-sm text-center text-gray-600 mb-4">
              {member.description}
            </p>
            <div className="flex justify-center space-x-4">
              {Object.entries(member.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#A27055] transition-colors duration-300"
                >
                  <i className={`fab fa-${platform} text-xl`}></i>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
