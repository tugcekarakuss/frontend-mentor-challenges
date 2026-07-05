import { slider, images } from "/data"
export default function ProductGallery() {
  return (
    <div >
      <div className=" w-full relative md:hidden">
        <img src={slider.product_1} alt="product" className="relative w-full h-90 object-cover object-center md:rounded-2xl" />
        <div className="flex flex-col z-50 items-center justify-center">
          <button className="absolute left-5 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow">
            <img src={images.previousIcon} alt="previous button" className="w-4 h-4" />
          </button>

          <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow">
            <img src={images.nextIcon} alt="next button" className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  )
}
