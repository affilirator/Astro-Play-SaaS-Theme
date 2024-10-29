import React from "react";

// HeadingCTA component
const HeadingCTA = () => {
  return (
    // Main section container with background color settings for light and dark themes
    <section className="bg-white dark:bg-gray-900">
      {/* Inner container with padding and responsive width settings */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        {/* Centered content container with a maximum width */}
        <div className="mx-auto max-w-screen-sm text-center">
          {/* Heading for the call-to-action section */}
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Start your free trial today
          </h2>
          {/* Paragraph describing the offer with responsive text size */}
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Try Flowbite Platform for 30 days. No credit card required.
          </p>
          {/* Link styled as a button with hover and focus states */}
          <a
            href="#"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Free trial for 30 days
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeadingCTA;
