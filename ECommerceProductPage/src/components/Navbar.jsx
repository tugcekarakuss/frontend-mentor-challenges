import { images } from "../../data"
export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto p-6 md:p-10 text-lg">
      <div>
       <button><img src={images.menuIcon} alt="open menu"/></button>
       <h1>sneakers</h1>
      </div>
    </nav>
  )
}
