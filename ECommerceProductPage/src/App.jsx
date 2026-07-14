import "./App.css"
import { useState } from "react"

import Navbar from "./components/Navbar"
import ProductGallery from "./components/ProductGallery"
import ProductInfo from "./components/ProductInfo"

function App() {
  const[cardCount,setCardCount]=useState(0)
  return (
    <>
     <Navbar cardCount={cardCount}/>
     <main className="max-w-7xl mx-auto p-6 px-0 md:p-10 flex flex-col lg:flex-row gap-1 md:gap-5">
      <ProductGallery/>
      <ProductInfo setCardCount={setCardCount}/>
    </main>
    </>
  )
}
export default App
