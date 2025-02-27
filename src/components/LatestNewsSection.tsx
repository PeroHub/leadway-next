import Image from "next/image";
export default function LatestNewsSection() {
  const posts = [
    {
      id: 1,
      title: "Understanding Immigration Policies",
      description:
        "We debunk myths surrounding visas, providing accurate information to help you make informed decisions.",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/65285cd1be5ecd0018f1f401_pexels-ketut-subiyanto-4245905.jpg",
      category: "Immigration",
      link: "/blog-posts/understanding-immigration-policies",
    },
    {
      id: 2,
      title: "Smooth Visa Application Process",
      description:
        "We debunk myths surrounding visas, providing accurate information to help you make informed decisions.",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/65285c8e35e6881190af2574_pexels-dominika-roseclay-1252500.jpg",
      category: "Visa",
      link: "/blog-posts/smooth-visa-application-process",
    },
    {
      id: 3,
      title: "Choose Right Visa for Your Journey",
      description:
        "We debunk myths surrounding visas, providing accurate information to help you make informed decisions.",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/65285c7458160bda3b078c91_pexels-kampus-production-6181092.jpg",
      category: "News",
      link: "/blog-posts/choose-right-visa-for-your-journey",
    },
  ];

  return (
    <div className="section without-bottom-spacing">
      <div className="base-container w-container">
        <div
          data-w-id="e4b01cad-d7fb-7d45-4504-1016bae76010"
          style={{ opacity: 1 }}
          className="section-title-wrapper"
        >
          <h2 className="section-title">Latest news</h2>
          <p>
            We&apos;re here to guide you every step of the way. Our experienced
            team of experts is dedicated to making your journey to a new country
            as smooth and stress-free as possible.
          </p>
        </div>
        <div className="home-blog-collection w-dyn-list">
          <div role="list" className="home-blog-list w-dyn-items">
            {posts.map((post) => (
              <div
                key={post.id}
                data-w-id="e4b01cad-d7fb-7d45-4504-1016bae76017"
                style={{ opacity: 1 }}
                role="listitem"
                className="home-blog-item w-dyn-item"
              >
                <article className="home-blog-wrapper">
                  <a
                    href={post.link}
                    className="home-blog-image w-inline-block"
                  >
                    <Image
                      src={post.image}
                      alt="photo"
                      layout="responsive"
                      width={435}
                      height={290}
                      className="blog-grid-image"
                    />
                  </a>
                  <div className="home-blog-content">
                    <div>
                      <a href={post.link} className="w-inline-block">
                        <h6 className="blog-post-title">{post.title}</h6>
                      </a>
                      <p className="no-margin">{post.description}</p>
                    </div>
                    <div className="button-wrapper smaller-spacing">
                      <a href={post.link} className="link-with-arrow-underline">
                        Read full post
                      </a>
                    </div>
                  </div>
                  <a
                    href={`/posts-categories/${post.category.toLowerCase()}`}
                    className="home-blog-category"
                  >
                    {post.category}
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
