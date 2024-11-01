import React from "react";

// FooterSitemap component
const FooterSitemap = () => {
  // Fetch current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-6 bg-[#A27055] text-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0">
            <a
              href="https://rabbitchoicefarms.com"
              className="flex items-center"
            >
              <img
                src="/path-to-your-logo.png"
                className="mr-3 h-10"
                alt="Rabbit Choice Farms Logo"
              />
              <span className="self-center text-3xl font-bold whitespace-nowrap">
                Rabbit Choice Farms
              </span>
            </a>
          </div>
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources Links */}
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase">Resources</h2>
              <ul>
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Follow Us Links */}
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase">Follow Us</h2>
              <ul>
                <li className="mb-4">
                  <a
                    href="https://github.com/rabbitchoicefarms"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/rabbitchoicefarms"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal Links */}
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase">Legal</h2>
              <ul>
                <li className="mb-4">
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-6 border-[#106f26] lg:my-8" />
        {/* Footer Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © {currentYear} Rabbit Choice Farms. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* Social Media Icons */}
            <a
              href="https://www.facebook.com/rabbitchoicefarms"
              className="text-white hover:text-[#106f26]"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/rabbitchoicefarms"
              className="text-white hover:text-[#106f26]"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 7.093a4.907 4.907 0 100 9.814 4.907 4.907 0 000-9.814zm0 1.802a3.105 3.105 0 110 6.21 3.105 3.105 0 010-6.21zm4.773-2.87a1.147 1.147 0 11-2.293 0 1.147 1.147 0 012.293 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSitemap;
