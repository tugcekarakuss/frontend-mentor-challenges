import { navLinks } from "../data/data"
import Logo from "../assets/images/icons/logo.svg"
import Menu from "../assets/images/icons/icon-hamburger.svg"
import Close from "../assets/images/icons/icon-close.svg"

import { useState } from "react"
export default function Navbar() {
  const [IsOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between pt-12">
      <img src={Logo} alt="logo" />

      <div className="flex items-center gap-8">
        <button
          className="cursor-pointer md:hidden z-50"
          onClick={() => setIsOpen(val => !val)}>
          <img src={IsOpen ? Close : Menu} alt="menu bar icon" />
        </button>

        {/* desktop menu */}
        <div className="hidden md:flex gap-8 font-alata">
          {
            navLinks.map(link => (
              <a className="relative font-light hidden md:inline text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href={link.href} key={link.href}>{link.label}</a>
            ))
          }
        </div>
      </div>

      {/* mobile menu */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col p-6 md:hidden transition-all duration-300 ease-out
        ${IsOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"}
        `}>


        <div className="flex justify-between items-center py-6">
          <img src={Logo} alt="logo" />
        </div>

        <div className="flex flex-col gap-6 mt-16 text-2xl uppercase text-grey">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={link.href}
              className="text-white"
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`transform transition-all duration-300
              ${IsOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </nav>
  )
}
