import { images, navigations } from "/data"
import { useState } from "react"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenCart, setIsOpenCart] = useState(false)
    return (
        <nav className="font-kumbh flex justify-between items-center max-w-7xl mx-auto p-6 md:p-10 text-lg border-b border-pale-orange">
            <div className="flex gap-2.5">
                <button
                    onClick={() => setIsOpen(true)}
                    className="lg:hidden">
                    <img src={images.menuIcon} alt="open menu" />
                </button>

                <h1 className="font-bold text-2xl md:text-3xl">
                    sneakers
                </h1>

                <div className="hidden lg:flex items-center gap-7 px-5 text-dark-grayish-blue ">
                    {navigations.map(items => (
                        <a className="hover:text-dark-blue transition-colors duration-300"
                            href={items.href}
                            key={items.name}>
                            {items.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center gap-5">
                <div className="relative flex">
                    <button className="cursor-pointer" onClick={() => setIsOpenCart(true)}>
                        <img src={images.cartIcon} alt="cart" />
                    </button>

                    <span className="absolute -top-2 -right-2 bg-orange text-white text-xs px-2 py-0.5 rounded-full">
                        2
                    </span>
                </div>
                <img className="max-w-9 cursor-pointer hover:outline-3  rounded-full outline-orange"
                    src={images.profile}
                    alt="profile" />
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}>
                    <div className="w-2/3 h-full bg-white p-6">
                        <button onClick={() => setIsOpen(false)}>
                            <img src={images.closeIcon} alt="close icon" />
                        </button>

                        <div className="flex flex-col gap-5 mt-10">
                            {navigations.map(item => (
                                <a key={item.name} href={item.href}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {isOpenCart && (
                <div className="absolute top-30 right-30 w-80 bg-white rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b border-dark-grayish-blue font-bold">
                        Cart
                    </div>

                    <div className="p-4">
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    </div>

                </div>
            )}
        </nav>


    )
}
