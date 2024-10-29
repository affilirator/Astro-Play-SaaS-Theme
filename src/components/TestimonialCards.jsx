import React from "react";

const testimonials = [
  {
    id: 1,
    title: "Speechless with how easy this was to integrate",
    content: [
      "I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.",
      "Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.",
      "If you care for your time, I hands down would go with this.",
    ],
    author: "Bonnie Green",
    role: "Developer at Open AI",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
  },
  {
    id: 2,
    title: "Solid foundation for any project",
    content: [
      "FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.",
      "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
    ],
    author: "Roberta Casas",
    role: "Lead designer at Dropbox",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
  },
  {
    id: 3,
    title: "Mindblowing workflow and variants",
    content: [
      "As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.",
      "Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit).",
      "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
    ],
    author: "Jese Leos",
    role: "Software Engineer at Facebook",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
  },
  {
    id: 4,
    title: "Efficient Collaborating",
    content: [
      "This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.",
      "You have many examples that can be used to create a fast prototype for your team.",
    ],
    author: "Joseph McFall",
    role: "CTO at Google",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
  },
];

const TestimonialCards = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
        {testimonials.map(({ id, title, content, author, role, avatar }) => (
          <figure
            key={id}
            className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
          >
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              {content.map((paragraph, index) => (
                <p key={index} className="my-4">
                  {paragraph}
                </p>
              ))}
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src={avatar}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>{author}</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {role}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="text-center">
        <a
          href="#"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Show more...
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialCards;
