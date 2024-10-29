import React, { useEffect, useState } from "react";

// Component to fetch and display blog posts from Strapi CMS
const BlogSection = () => {
  // State to hold blog posts
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog posts from Strapi API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Replace with your Strapi API endpoint
        const response = await fetch(
          "http://localhost:1337/api/broker-reviews?populate=*",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Extracting data from Strapi's response structure
        setBlogPosts(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Render loading, error, or the list of blog posts
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Broker Reviews
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore our detailed reviews of various forex brokers.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  {/* Adjust category display if you have categories */}
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  {post.attributes.forexBrokerName}
                </span>
                <span className="text-sm">
                  {new Date(post.attributes.reviewDate).toLocaleDateString()}
                </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href={`/${post.attributes.slug}`}>
                  {post.attributes.reviewTitle}
                </a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                {post.attributes.editorReviewSummary[0].children[0].text}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  {post.attributes.forexBrokerLogoImg.data && (
                    <img
                      className="w-7 h-7 rounded-full"
                      src={`http://localhost:1337${post.attributes.forexBrokerLogoImg.data.attributes.url}`}
                      alt={
                        post.attributes.forexBrokerLogoImg.data.attributes
                          .alternativeText || "Broker Logo"
                      }
                    />
                  )}
                  <span className="font-medium dark:text-white">
                    {post.attributes.reviewAuthor}
                  </span>
                </div>
                {post.attributes.reviewFeaturedImg.data && (
                  <a
                    href={`/${post.attributes.slug}`}
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
