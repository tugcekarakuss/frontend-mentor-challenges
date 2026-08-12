import { creations } from "../data/data"
export default function Creations() {
  return (
    <section className="max-w-6xl mx-auto px-6 my-30">
      <div className="flex items-center justify-between gap-5">
        <h3 className="text-4xl font-josefin-sans uppercase">Our creations</h3>
        <button className=" hidden md:block font-josefin-sans bg-black hover:bg-white text-white hover:text-black hover:outline outline-black transition-colors duration-300 uppercase px-10 py-2 cursor-pointer">See all</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5 font-josefin-sans">
        {creations.map(item => (
          <div
            key={item.id}
            className="group relative h-64 md:h-100 flex items-end p-6 cursor-pointer"
          >

            <div
              className="absolute inset-0 bg-cover bg-center md:hidden transition-opacity duration-300 group-hover:opacity-40"
              style={{
                backgroundImage: `url(${item.image.mobile})`,
              }}
            />

            <div
              className="absolute inset-0 hidden bg-cover bg-center md:block transition-opacity duration-300 group-hover:opacity-30"
              style={{
                backgroundImage: `url(${item.image.desktop})`,
              }}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <h3 className="relative z-10 text-white uppercase text-2xl max-w-35 transition-colors duration-300 group-hover:text-black">
              {item.title}
            </h3>

          </div>
        ))}
      </div>

      <button className="md:hidden inline mx-auto mt-8 font-josefin-sans font-semibold border-2 border-black text-black uppercase px-10 py-2">
        See all
      </button>
    </section>
  )
}
