import { useState } from "react"
import { images, products } from "/data"
export default function ProductGallery() {
  const [index, setIndex] = useState(0)
  const product = products[index]

  function handleNextClick() {
    if (index < products.length - 1) {
      setIndex(index + 1)
    }
    else {
      setIndex(0)
    }
  }

  function handlePrevClick() {
    if (index > 0) {
      setIndex(index - 1)
    }
    else {
      setIndex(products.length - 1)
    }
  }
  return (
    <div >
      <div className=" w-full relative lg:hidden">
        <img src={product.image} alt="product" className="relative w-full object-cover  md:rounded-2xl" />
        <div className="flex flex-col z-50 items-center justify-center">
          <button className="absolute left-5 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow" onClick={handlePrevClick}>
            <img src={images.previousIcon} alt="previous button" className="w-4 h-4" />
          </button>
          <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow" onClick={handleNextClick}>
            <img src={images.nextIcon} alt="next button" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-4 grid-rows-2 justify-items-stretch gap-3">
        <img src={product.image} className="col-span-4 w-full h-104 object-cover object-top rounded-xl" alt="" />

        {products.map((item, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`relative cursor-pointer rounded-md overflow-hidden h-24 ${index === i ? "ring-2 ring-orange-500" : ""
              }`}
          >
            <img
              src={item.thumbnail}
              className={`w-full h-32 object-cover ${index === i ? "opacity-50" : ""
                }`}
              alt="thumbnail"
            />
          </div>
        ))}
      </div>

    </div>
  )
}
