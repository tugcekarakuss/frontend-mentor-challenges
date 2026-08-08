import Navbar from "./Navbar"
export default function Header() {
  return (
    <header className="font-josefin-sans relative h-screen bg-cover bg-center 
                      bg-[url('/src/assets/images/hero/mobile-image-hero.jpg')] 
                      md:bg-[url('/src/assets/images/hero/web-image-hero.jpg')]">

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col">
        <Navbar />

        <div className="flex-1 flex items-center">
          <h1 className="font-light uppercase text-white text-5xl md:text-6xl max-w-md border border-white p-4">
            Immersive experiences that deliver
          </h1>
        </div>
      </div>
    </header>
  )
}
