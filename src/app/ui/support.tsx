import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactCard() {
  return (
    <div
      className="max-w-sm p-2 bg-white rounded-2xl shadow-md"
      style={{ margin: "60px auto", padding: "10px" }}
    >
      <h2 className="text-xl font-semibold mb-4" style={{ fontSize: "1.5rem" }}>
        Ask Us Anything
      </h2>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MapPin className="text-red-500 w-5 h-5 mt-1" />
          <p className="text-gray-700">
            3250 Bloor St W Suite 600, Toronto, ON M8X 2X9, Canada
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="text-red-500 w-5 h-5" />
          <p className="text-gray-700">+1 (430) 248-5763</p>
        </div>
        <div className="flex items-center gap-2">
          <Mail
            className="text-red-500 w-5 h-5"
            // style={{ width: "20px", height: "20px" }}
          />
          {/* <p className="text-gray-700">support@kelenserviceca.com</p> */}
          <p className="text-gray-700">
            <Link
              className="text-gray-700"
              style={{ color: "black" }}
              href={"mailto:attorney@legalpathwayimmigrationlawfirm.org"}
            >
              attorney@legalpathwayimmigrationlawfirm.org
            </Link>
          </p>
        </div>
      </div>
      <Link
        style={{ marginTop: "10px", marginBottom: "10px" }}
        href="/contact-us"
        className="mt-4 inline-block text-red-500 font-medium hover:underline"
      >
        Contact us →
      </Link>
    </div>
  );
}
