import Image from "next/image";
export default function PermanentResidentSection() {
  return (
    <div
      id="w-node-bf82eb32-4ca6-1452-57f4-b6426d6d6968-296c1808"
      className="collection-list-wrapper-services w-dyn-list"
    >
      <div role="list" className="collection-list-services w-dyn-items">
        <div role="listitem" className="collection-item-services w-dyn-item">
          <div
            data-w-id="bf82eb32-4ca6-1452-57f4-b6426d6d696b"
            style={{
              backgroundImage:
                'url("https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652892299ec9911fdd311500_pexels-cytonn-photography-955389.jpg")',
              opacity: 1,
            }}
            className="work-wrapper"
          >
            <Image
              loading="lazy"
              src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/65289172057200ddd4f42749_documents.svg"
              alt=""
              className="icon-work"
              width={50} // specify appropriate width
              height={50} // specify appropriate height
            />
            <a href="/visa/permanent-visa" className="w-inline-block">
              <h5 className="services-titles">Permanent Resident</h5>
            </a>
            <p className="service-item-description">
              Our team meticulously reviews all your documents to ensure they
              meet the specific requirements of the immigration authorities.
            </p>
            <div className="button-wrapper smaller-spacing">
              <a
                href="/visa/permanent-visa"
                className="link-with-arrow-underline white-style"
              >
                Learn more
              </a>
            </div>
            <div className="dark-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
