import { images, navigations } from "/data"
import { useState } from "react"

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black/50" onClick={onClose}>
      <div
        id="mobile-menu"
        className="fixed right-0 inset-y-0 w-64 bg-white p-10"
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menu"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
        className="float-right" 
        onClick={onClose}
        aria-label="Close menu"
        >
          <img src={images.iconMenuClose} alt="close icon" />
        </button>
        <div className="flex flex-col mt-10 gap-4">
          {navigations.map(item => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 text-lg">
      <header>
        <nav className="flex justify-between items-center">
          <img src={images.logo} alt="News homepage logo" />

          {/* desktop */}
          <div className="hidden sm:flex gap-6">
            {navigations.map(item => (
              <a key={item.name} href={item.href} className="hover:text-soft-red transition duration-300">
                {item.name}
              </a>
            ))}
          </div>

          {/* mobile button */}
          <div className="sm:hidden">
            <button 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            >
              <img src={images.iconMenu} alt="" />
            </button>
          </div>

        </nav>
      </header>

      {/* mobile menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  )
}

export default Header