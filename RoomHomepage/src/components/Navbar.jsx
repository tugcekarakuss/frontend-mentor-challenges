import { useState } from "react";
import { icons, navLinks } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="px-6 py-8 absolute top-0 inset-x-0 z-10">
      {/* mobile navbar */}
      <div className="relative flex items-center lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          aria-label="Open navigation menu"
        >
          <img
            src={icons.hamburger}
            alt="menu icon"
          />
        </button>

        <a
          href="/index.html"
          aria-label="Room homepage"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <img
            src={icons.logo}
            alt="Room"
          />
        </a>
      </div>

      {/* desktop navbar */}
      <div className="hidden lg:block max-w-7xl mx-auto mt-6">
        <div className="flex items-center gap-15">
          <img src={icons.logo} alt="logo icon" />

          <div className="flex gap-7 font-league-spartan text-white font-semibold">
            {navLinks.map(link => (
              <a className="relative inline-block after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
                key={link.label}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 bg-black/40 z-10
          transition-opacity duration-500
          ${isOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
          }
        `}
      ></div>

      {/* mobile menu */}
      <div
        className={`
          absolute inset-0 top-0 bg-white z-20
          transition-transform duration-500 ease-out
          ${isOpen
            ? "translate-y-0"
            : "-translate-y-full"
          }
        `}
      >
        <div className="px-6 py-8 flex justify-between gap-7">

          <button
            onClick={() => setIsOpen(false)}
            type="button"
            aria-label="Close navigation menu"
          >
            <img
              src={icons.close}
              alt="close icon"
            />
          </button>

          <div className="flex gap-10 font-league-spartan font-semibold">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}