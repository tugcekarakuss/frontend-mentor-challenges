import ProductGallery from "./ProductGallery"
import ProductInfo from "./ProductInfo"
export default function ProductSection() {
  return (
    <div className="max-w-7xl mx-auto p-6 px-0 md:p-10 flex flex-col md:flex-row gap-1">
      <ProductGallery/>
      <ProductInfo/>
    </div>
  )
}
