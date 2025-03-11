"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu
import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");

    // Only check auth for protected routes (not login)
    if (pathname !== "/admin/login" && auth !== "true") {
      router.push("/admin/login");
    } else if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, [pathname]);

  // Allow login page to render
  if (pathname === "/admin/login") return <>{children}</>;

  // Prevent other pages from rendering if not authenticated
  if (!isAuthenticated) return null;

  return (
    <div className="flex">
      {/* Mobile Hamburger Menu */}
      <div
        // style={{ top: "10px" }}
        className="md:hidden p-4 fixed cursor-pointer top-10 right-4 z-50 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-100 text-gray-900 p-6 min-h-screen transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <h2
          className="text-lg font-semibold mb-6 text-center"
          style={{ fontSize: "1.5rem", textAlign: "center" }}
        >
          Admin Dashboard
        </h2>
        <ul className="space-y-4" style={{ textAlign: "center" }}>
          <li style={{ marginTop: "20px" }}>
            <a href="/admin/dashboard" className="hover:underline">
              Applications
            </a>
          </li>
          {/* <li>
            <a href="/admin/settings" className="hover:underline">
              Settings
            </a>
          </li> */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64">{children}</main>
    </div>
  );
}
