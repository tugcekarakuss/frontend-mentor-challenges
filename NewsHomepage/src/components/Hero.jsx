import { images, articles } from "../data"
function Hero() {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-8 lg:flex-row">

      <div className="flex flex-col flex-1">
        <div>
          <div className="w-full">
            <img
              src={images.imageWeb3Desktop}
              alt="Web Görünümü"
              className="hidden md:block w-full h-auto"
            />

            <img
              src={images.imageWeb3Mobile}
              alt="Mobil Görünümü"
              className="block md:hidden w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-6 gap-6 justify-between">
          <h1 className=" text-5xl md:text-6xl/15 font-bold md:max-w-[10ch] text-very-dark-blue ">The Bright Future of Web 3.0?</h1>
          <div className="flex flex-col justify-between gap-4">
            <p className=" text-dark-grayish-blue text-md md:text-base max-w-[40ch]">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?
            </p>
            <button className="self-start  bg-soft-red text-very-dark-blue uppercase font-bold py-2 px-6 mt-5 tracking-widest transition-colors duration-500 hover:bg-very-dark-blue hover:text-off-white cursor-pointer">Read more</button>
          </div>
        </div>
      </div>

      {/* sidebar */}
      <section className="flex flex-col bg-very-dark-blue p-5 border-b-2 last:border-none lg:w-1/3" aria-labelledby="new-title">
        <h2 className="text-soft-orange text-3xl md:text-4xl font-bold mb-4" id="new-title">New</h2>
        <div className="flex flex-col  justify-evenly gap-5">
          {articles.map(item => (
            <div className=" border-b border-grayish-blue py-4  last:border-none" key={item.title}>
              <h3 className="transition duration-300 text-white hover:text-soft-orange  font-bold text-2xl cursor-pointer mb-2">
                {item.title}
              </h3>
              <p className="text-grayish-blue text-lg ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default Hero