import { navLinks, socialLinks } from "../data/data"
import Logo from "../assets/images/icons/logo.svg"

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 font-alata">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-between">

        {/* Left */}
        <div className="flex flex-col items-center gap-6 md:items-start">

          <img src={Logo} alt="Loopstudios" />

          <nav className="flex flex-col items-center gap-4 md:flex-row">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                className="relative uppercase font-alata text-sm text-white
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:w-0
                  after:h-0.5
                  after:bg-white
                  after:transition-all
                  after:duration-300
                  hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-6 md:items-end">

          <div className="flex gap-5">
            {socialLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                aria-label={link.title}
                className="relative pb-2
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-0.5
                  after:bg-white
                  after:transition-all
                  after:duration-300
                  hover:after:w-full"
              >
                <img src={link.icon} alt="" />
              </a>
            ))}
          </div>

          <p className="font-alata text-sm text-white/50">
            © 2026 Loopstudios. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}