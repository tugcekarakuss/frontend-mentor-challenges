import { images } from "/data"
export default function ProductInfo() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col gap-2">
        <h3 className="uppercase tracking-wider text-sm font-bold text-dark-grayish-blue">Sneaker Company</h3>
        <h2 className="font-bold text-2xl lg:text-4xl max-w-[20ch] text-dark-blue">Fall Limited Edition Sneakers</h2>
        <p className="text-dark-grayish-blue max-w-[40ch]">These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
  <div className="flex justify-between items-start gap-3 my-3 lg:flex-col">
    <div className="flex items-end gap-3">
      <h4 className="text-dark-blue font-bold text-3xl">$125.00</h4>
     <p className="inline-block text-light-grayish-blue bg-dark-blue px-2 py-1 rounded">50%</p>
    </div>
    <p className="text-dark-grayish-blue line-through font-bold">$250.00</p>
  </div>
  <div className="flex flex-col gap-5  lg:flex-row">
    <div className="flex bg-light-grayish-blue w-full px-8 py-4 justify-between items-center rounded-md">
      <button className="cursor-pointer hover:opacity-50"><img src={images.plusIcon} alt="plus icon" /></button>
      <p>1</p>
      <button className="cursor-pointer hover:opacity-50"><img src={images.minusIcon} alt="minus icon" /></button>
    </div>
    <button className="flex grow justify-center items-center gap-2.5 px-8 py-4 font-bold bg-orange hover:bg-pale-orange transition-colors duration-300 w-full rounded-md"><img src={images.cartIcon} alt="add to cart" />Add to Card</button>
  </div>

      </div>
    </div>
  )
}
