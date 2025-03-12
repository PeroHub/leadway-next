"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // Added ChevronDown icon
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmailMenuOpen, setIsEmailMenuOpen] = useState(false); // State for email dropdown
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");

    if (pathname !== "/admin/login" && auth !== "true") {
      router.push("/admin/login");
    } else if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, [pathname]);

  if (pathname === "/admin/login") return <>{children}</>;

  if (!isAuthenticated) return null;

  return (
    <div className="flex">
      {/* Mobile Hamburger Menu */}
      <div
        className="md:hidden p-4 fixed cursor-pointer top-10 right-4 z-50 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-100 z-50  p-6 min-h-screen transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <h2
          className="text-lg font-semibold mb-6 text-center"
          style={{ fontSize: "1.5rem" }}
        >
          Admin Dashboard
        </h2>
        <ul className="space-y-4 text-center" style={{ marginTop: "40px" }}>
          <li className="mt-4">
            <Link
              href="/admin/dashboard"
              className="hover:underline focus:outline-none"
            >
              Applications
            </Link>
          </li>

          {/* Email Menu with Dropdown */}
          <li className="">
            <p
              onClick={() => setIsEmailMenuOpen(!isEmailMenuOpen)}
              className="flex items-center justify-center w-full hover:underline cursor-pointer"
              style={{ color: isEmailMenuOpen ? "blue" : "black" }}
            >
              Email
              <ChevronDown
                size={16}
                className={`mr-8 transition ${
                  isEmailMenuOpen ? "rotate-180" : ""
                }`}
              />
            </p>

            {isEmailMenuOpen && (
              <ul className="mt-2 space-y-2  p-2 rounded-md">
                <li>
                  <Link
                    href="/admin/email/template1"
                    className="block p-2 hover:bg-gray-300 rounded"
                  >
                    Template 1
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/admin/email/template2"
                    className="block p-2 hover:bg-gray-300 rounded"
                  >
                    Template 2
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="/admin/email/template3"
                    className="block p-2 hover:bg-gray-300 rounded"
                  >
                    Template 3
                  </Link>
                </li> */}
              </ul>
            )}
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64">{children}</main>
    </div>
  );
}
