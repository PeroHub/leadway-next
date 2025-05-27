"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmailMenuOpen, setIsEmailMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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

  console.log(hoveredItem);
  const isActive = (href: string) => pathname === href;

  const getLinkStyle = (href: string) => {
    const active = isActive(href);
    // const hovered = hoveredItem === href;

    return {
      display: "block",
      padding: "0.75rem 1rem",
      borderRadius: "0.375rem",
      // color: active ? '#ffffff' : (hovered ? '#ffffff' : '#d1d5db'),
      // backgroundColor: active ? '#3b82f6' : (hovered ? '#1e40af' : 'transparent'),
      fontWeight: active ? 600 : 400,
      textDecoration: "none",
      transition: "all 0.2s ease",
    };
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Mobile Hamburger Menu */}
      <div
        style={{
          display: "block",
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 50,
          backgroundColor: "#1f2937",
          color: "white",
          padding: "0.75rem",
          borderRadius: "0.375rem",
          cursor: "pointer",
        }}
        className="md:hidden" // Only show hamburger on small screens
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Sidebar */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "16rem",
          height: "100vh",
          backgroundColor: "#ffffff",
          color: "#333", // Adjusted for better contrast on white sidebar
          padding: "1.5rem",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 300ms ease-in-out",
          zIndex: 40,
          overflowY: "auto",
        }}
        className="md:relative md:translate-x-0"
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
            textAlign: "center",
            color: "#2c3e50", // Adjusted for better contrast
          }}
        >
          Admin Dashboard
        </h2>

        <ul
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <li>
            <Link
              href="/admin/dashboard"
              style={getLinkStyle("/admin/dashboard")}
              onMouseEnter={() => setHoveredItem("/admin/dashboard")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={closeSidebar} // Added onClick to close sidebar
            >
              Applications
            </Link>
          </li>

          <li>
            <Link
              href="/admin/tracking"
              style={getLinkStyle("/admin/tracking")}
              onMouseEnter={() => setHoveredItem("/admin/tracking")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={closeSidebar} // Added onClick to close sidebar
            >
              All Tracking Code
            </Link>
          </li>

          <li>
            <Link
              href="/admin/tracking/new"
              style={getLinkStyle("/admin/tracking/new")}
              onMouseEnter={() => setHoveredItem("/admin/tracking/new")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={closeSidebar} // Added onClick to close sidebar
            >
              New Tracking
            </Link>
          </li>

          {/* Email Menu with Dropdown */}
          <li>
            <div
              onClick={() => setIsEmailMenuOpen(!isEmailMenuOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1rem",
                borderRadius: "0.375rem",
                // color: isEmailMenuOpen ? '#3b82f6' : (hoveredItem === 'email' ? '#ffffff' : '#d1d5db'),
                // backgroundColor: hoveredItem === 'email' ? '#1f2937' : 'transparent',
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={() => setHoveredItem("email")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Email
              <ChevronDown
                size={16}
                style={{
                  transition: "transform 0.2s ease",
                  transform: isEmailMenuOpen ? "rotate(180deg)" : "rotate(0)",
                }}
              />
            </div>

            {isEmailMenuOpen && (
              <ul
                style={{
                  marginTop: "0.5rem",
                  marginLeft: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <li>
                  <Link
                    href="/admin/email/template1"
                    style={getLinkStyle("/admin/email/template1")}
                    onMouseEnter={() =>
                      setHoveredItem("/admin/email/template1")
                    }
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={closeSidebar} // Added onClick to close sidebar
                  >
                    Template 1
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          // padding: "1.5rem",
          // marginLeft: "0",
          backgroundColor: "#f3f4f6",
          minHeight: "100vh",
        }}
        className="md:ml-64"
      >
        {children}
      </main>
    </div>
  );
}
