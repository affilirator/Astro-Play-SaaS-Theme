import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Assuming you're using react-icons

const teamMembers = [
  {
    name: "Julian Mang'oka",
    title: "Founder & CEO",
    description:
      "Growing up, Julian supported her parents on their farm, a passion she continues to hold to this day. She has been involved in horticulture and chicken farming before falling in love with rabbit farming. She also held various positions at the Kenya Commercial Bank (KCB) and Subaru Kenya.She understands the farmer's heart and brings personal experience in commercial agriculture. She heads our operations department. Julian holds a Master’s in Finance from the University of Nairobi, a Bachelor’s in Economics and Finance, and a CPA designation.",
    image: "src/images/new-zealand-rabbit.png",
    socials: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "Mary Mutua Osodo",
    title: "Chief Farming Officer",
    description:
      "Mary has over a decade of experience in rabbit farming. She worked with Rabbit Republic Limited, Nation Media Group, and Royal Media Services, bringing a wealth of experience in agribusiness, sales, and marketing. As the head of Marketing, she has been instrumental in driving business development. She holds a degree in Economics and Finance, from Kenyatta University and CPA 2 providing her with a strong foundation in strategic planning and financial management. Mary's passion for empowering farmers and promoting sustainable farming practices continues to inspire her work at Rabbit Choice Farms Limited.",
    image: "src/images/buy-farm-rabbit-hutches-in-Kenya.jpeg",
    socials: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
];

const OurTeam = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#A27055]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>

        {/* Team Members */}
        <div className="grid gap-12 sm:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#106f26] text-white rounded-lg shadow-lg p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg font-semibold mb-4">{member.title}</p>

              {/* Description */}
              <p className="text-center mb-4">{member.description}</p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {member.socials.facebook && (
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#A27055] transition duration-300"
                  >
                    <FaFacebookF size={24} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#A27055] transition duration-300"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#A27055] transition duration-300"
                  >
                    <FaLinkedinIn size={24} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
