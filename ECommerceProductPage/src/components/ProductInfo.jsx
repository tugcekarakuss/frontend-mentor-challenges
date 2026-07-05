import { images } from "/data"
export default function ProductInfo() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div>
        <h3>Sneaker Company</h3>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
  <div>
    <div>
      <h4>$125.00</h4>
      <p>50%</p>
    </div>
    <p>$250.00</p>
  </div>
  <div>
    <div>
      <button><img src={images.plusIcon} alt="plus icon" /></button>
      <p>1</p>
      <button><img src={images.minusIcon} alt="minus icon" /></button>
    </div>
    <button className="flex justify-center items-center bg-orange"><img src={images.cartIcon} alt="add to cart" />Add to Card</button>
  </div>

      </div>
    </div>
  )
}
