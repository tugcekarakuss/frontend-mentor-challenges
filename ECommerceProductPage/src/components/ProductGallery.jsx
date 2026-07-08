import {images,products } from "/data"
export default function ProductGallery() {
  return (
    <div >
      <div className=" w-full relative md:hidden">
        <img src={products[0].image} alt="product" className="relative w-full h-80 object-cover object-center md:rounded-2xl" />
        <div className="flex flex-col z-50 items-center justify-center">
          <button className="absolute left-5 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow">
            <img src={images.previousIcon} alt="previous button" className="w-4 h-4" />
          </button>
          <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow">
            <img src={images.nextIcon} alt="next button" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-4 grid-rows-2 justify-items-stretch gap-3">
        <img src={products[0].image} className="col-span-4 w-full h-80 object-cover rounded-xl" alt="" />
        <img src={products[0].thumbnail} className="outline-5 opacity-50 outline-orange w-full h-32 object-cover rounded-md" alt="" />
        <img src={products[1].thumbnail} className="w-full h-32 object-cover rounded-md" alt="" />
        <img src={products[2].thumbnail} className="w-full h-32 object-cover rounded-md" alt="" />
        <img src={products[3].thumbnail} className="w-full h-32 object-cover rounded-md" alt="" />
      </div>

    </div>
  )
}
