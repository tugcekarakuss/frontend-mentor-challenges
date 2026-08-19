import { useState } from "react";
import { icons, navLinks } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="px-6 py-8 absolute top-0 inset-x-0 z-10">
      {/* mobile navbar */}
      <div className="relative flex items-center lg:hidden">
        <button onClick={() => setIsOpen(true)}
          type="button"
          aria-label="Open navigation menu"
        >
          <img
            src={icons.hamburger}
            alt=""
          />
        </button>

        <a
          href="/"
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
          <img src={icons.logo} alt="" />
          <div className="flex gap-7 font-league-spartan text-white font-semibold">
            {
              navLinks.map(link => (
                <a href={link.href}>{link.label}</a>
              ))
            }
          </div>
        </div>
      </div>

      {
        isOpen && (
          <div className="absolute inset-0 top-0  bg-white">
            <div className="px-6 py-8 flex justify-between gap-7">
              <button onClick={() => setIsOpen(false)}>
                <img src={icons.close} alt="" />
              </button>
              <div className="flex gap-10 font-league-spartan font-semibold">
                {
                  navLinks.map(link => (
                    <a href={link.href}>{link.label}</a>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
    </nav>
  );
}