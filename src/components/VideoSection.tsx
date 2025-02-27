import Image from "next/image";
export default function VideoSection() {
  return (
    <section>
      <a
        href="#"
        data-w-id="c73a01a8-5d91-43b1-39f4-ccd8101f27e3"
        style={{ opacity: 1 }}
        className="video-big w-inline-block w-lightbox"
      >
        <div
          data-w-id="c73a01a8-5d91-43b1-39f4-ccd8101f27e4"
          style={{ opacity: 1 }}
          className="video-content-wrapper"
        >
          <div
            data-w-id="c73a01a8-5d91-43b1-39f4-ccd8101f27e5"
            style={{ opacity: 1 }}
            className="video-content"
          >
            <h2 className="in-section-title text-white">
              Guiding your every step
            </h2>
            <p className="text-white">
              Our experienced team of immigration experts is dedicated to making
              your journey to a new country as smooth and stress-free as
              possible. Your trusted partner in this exciting venture.
            </p>
          </div>
          <div
            data-w-id="c73a01a8-5d91-43b1-39f4-ccd8101f27ea"
            style={{ opacity: 1 }}
            className="video-button-wrapper"
          >
            <div
              //   href="#"
              data-w-id="c73a01a8-5d91-43b1-39f4-ccd8101f27eb"
              className="btn-circle-big"
            >
              <div className="clip">
                <div
                  style={{
                    transform:
                      "translate3d(0%, null, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="button-icon"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/6526bde578717103f92b5b9a_play-icon.svg"
                    alt="icon"
                    className="icon-bottom big"
                    width={50} // Adjust width as needed
                    height={50} // Adjust height as needed
                  />
                </div>
                <div className="button-icon button-icon-top">
                  <Image
                    src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/6526bde578717103f92b5b9a_play-icon.svg"
                    alt="icon"
                    className="icon-bottom big"
                    width={50} // Adjust width as needed
                    height={50} // Adjust height as needed
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          type="application/json"
          className="w-json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              items: [
                {
                  url: "https://www.youtube.com/watch?v=KGg5cIjHQiw",
                  originalUrl: "https://www.youtube.com/watch?v=KGg5cIjHQiw",
                  width: 940,
                  height: 528,
                  thumbnailUrl:
                    "https://i.ytimg.com/vi/KGg5cIjHQiw/hqdefault.jpg",
                  html: '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FKGg5cIjHQiw%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKGg5cIjHQiw&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FKGg5cIjHQiw%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube" width="940" height="528" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>',
                  type: "video",
                },
              ],
              group: "",
            }),
          }}
        />
      </a>
    </section>
  );
}
