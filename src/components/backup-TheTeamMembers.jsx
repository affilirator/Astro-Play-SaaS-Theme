import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mary Mutua Osodo",
    title: "CMO & Founder",
    description:
      "Visionary leader with a passion for rabbit farming & marketing.",
    image: "src/images/new-zealand-rabbit.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Joan Mang'oka",
    title: "CTO",
    description: "Agricultural wizard turning ideas into reality.",
    image: "src/images/kenyan-woman-feeding-kales-to-rabbits.jpeg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

const OurTeam = () => {
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
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
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
      </div>
    </section>
  );
};

export default OurTeam;
