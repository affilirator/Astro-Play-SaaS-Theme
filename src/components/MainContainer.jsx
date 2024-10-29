import React from "react";
//import "./MainContainer.css"; // Ensure you have a corresponding CSS file

const MainContainer = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex justify-center items-center">
      <div className="container mx-auto flex flex-wrap justify-between p-4">
        {/* Our Mission */}
        <div className="box w-full md:w-1/4 p-6 m-4">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            At Mahinge Markets, we empower Kenyans to set up online side hustles
            and explore new career opportunities in the digital space.
          </p>
        </div>

        {/* Our Vision */}
        <div className="box w-full md:w-1/4 p-6 m-4">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p>
            Our vision is to create a sustainable ecosystem where every Kenyan
            has access to online work and side hustle opportunities.
          </p>
        </div>

        {/* Collaboration */}
        <div className="box w-full md:w-1/4 p-6 m-4">
          <h2 className="text-2xl font-bold mb-4">Collaboration</h2>
          <p>
            We collaborate with industry leaders and innovators to bring more
            opportunities and resources to aspiring digital entrepreneurs.
          </p>
        </div>

        {/* Contact Us */}
        <div className="box w-full md:w-1/4 p-6 m-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            Reach out to Mahinge Markets for guidance, partnerships, or general
            inquiries about how you can start your online journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
