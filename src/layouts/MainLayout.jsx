import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MainLayout({ children }) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const flags = [
    { label: "Manga", class: "flag-jp", link: "/category/manga" },
    { label: "Manhua", class: "flag-cn", link: "/category/manhua" },
    { label: "Manhwa", class: "flag-kr", link: "/category/manhwa" },
  ];

  const navLinks = [
    { label: "Beranda", path: "/" },
    { label: "Terbaru", path: "/terbaru" },
    { label: "Populer", path: "/populer" },
    { label: "Daftar Komik", path: "/daftar-komik" },
    { label: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* HEADER */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 text-3xl font-bold text-gray-900">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-2xl">K</span>
            Komiku
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-1 border rounded text-sm font-medium transition ${
                    isActive ? "bg-blue-600 text-white" : "hover:bg-blue-50 text-gray-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {user && (
              <NavLink
                to="/studio"
                className="bg-orange-500 text-white px-4 py-1 rounded text-sm font-medium"
              >
                Studio
              </NavLink>
            )}

            {user ? (
              <button
                onClick={logout}
                className="text-red-600 border border-red-600 px-4 py-1 rounded text-sm font-medium hover:bg-red-50"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="bg-gray-100 px-4 py-1 rounded text-sm font-medium text-gray-700">
                Login
              </Link>
            )}
          </div>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden p-2 text-2xl" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 border rounded text-sm font-medium ${
                    isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {user && (
              <NavLink
                to="/studio"
                onClick={() => setOpen(false)}
                className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium text-center"
              >
                Studio
              </NavLink>
            )}

            {user ? (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="text-red-600 border border-red-600 px-4 py-2 rounded text-sm font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="bg-gray-100 px-4 py-2 rounded text-sm font-medium text-center text-gray-700"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto p-6 w-full">
        {children}
      </main>
    </div>
  );
}





