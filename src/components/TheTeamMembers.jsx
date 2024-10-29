import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mary Mutua Osodo",
    title: "CMO & Founder",
    description: "Visionary leader with a passion for rabbits & marketing.",
    image: "src/images/new-zealand-rabbit.png",
    detailedDescription:
      "Mary has over a decade of experience in rabbit farming. She worked with Rabbit Republic Limited, Nation Media Group, and Royal Media Services, bringing a wealth of experience in agribusiness, sales, and marketing. As the head of Marketing, she has been instrumental in driving business development. She holds a degree in Economics and Finance, from Kenyatta University and CPA 2 providing her with a strong foundation in strategic planning and financial management. Mary's passion for empowering farmers and promoting sustainable farming practices continues to inspire her work at Rabbit Choice Farms Limited.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Julian Mang'oka",
    title: "CTO",
    description: "Agricultural wizard turning ideas into reality.",
    image: "src/images/quality-rabbit-hutches-construction-in-Kenya.jpeg",
    detailedDescription:
      "Growing up, Julian supported her parents on their farm, a passion she continues to hold to this day. She has been involved in horticulture and chicken farming before falling in love with rabbit farming. She also held various positions at the Kenya Commercial Bank (KCB) and Subaru Kenya.She understands the farmer's heart and brings personal experience in commercial agriculture. She heads our operations department. Julian holds a Master’s in Finance from the University of Nairobi, a Bachelor’s in Economics and Finance, and a CPA designation.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            className="text-4xl font-serif text-primary mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(member)}
            >
              <div className="flex flex-col items-center">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover mb-4"
                  whileHover={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <h3 className="text-2xl font-serif text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-lg font-monospace text-secondary mb-4">
                  {member.title}
                </p>
                <p className="text-center text-gray-600 italic font-script">
                  {member.description}
                </p>
                <div className="flex space-x-4 mt-6">
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-secondary text-2xl hover:text-primary transition duration-300" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-secondary text-2xl hover:text-primary transition duration-300" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-secondary text-2xl hover:text-primary transition duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg mx-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              >
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
                />
                <h3 className="text-2xl font-serif text-primary text-center mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-lg font-monospace text-secondary text-center mb-4">
                  {selectedMember.title}
                </p>
                <p className="text-gray-700 text-center">
                  {selectedMember.detailedDescription}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurTeam;
