import { images, articles } from "../data"
function Hero() {
  return (
    <div className="p-10 flex flex-col gap-7 md:flex-row md:items-stretch">

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

        <div className="flex flex-col md:flex-row my-5 gap-3">
          <h1 className="text-7xl font-bold  text-very-dark-blue ">The Bright Future of Web 3.0?</h1>
          <div className="">
            <p className="text-dark-grayish-blue text-base max-w-3xl">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?
            </p>
            <button className="bg-soft-red text-very-dark-blue uppercase font-bold py-2 px-6 tracking-widest ">Read more</button>
          </div>
        </div>
      </div>



      <div className=" bg-very-dark-blue py-5 px-3 border-b-2 last:border-none md:w-1/3">
        <h3 className="text-soft-orange text-3xl font-bold ">New</h3>
        <div>
          {articles.map(item => (
            <div className="py-5 border-b-2 border-grayish-blue last:border-none" key={item.title}>
              <h3 className="text-white my-2 font-bold text-xl">
                {item.title}
              </h3>

              <p className="text-white text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
export default Hero