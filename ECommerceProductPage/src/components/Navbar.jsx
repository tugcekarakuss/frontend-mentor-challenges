import { images, navigations, products } from "/data"
import { useState } from "react"
export default function Navbar({ cardCount, setCardCount }) {
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
                        <a className="relative  text-dark-grayish-blue hover:text-dark-blue transition-colors duration-300 after:absolute after:left-0 after:-bottom-10 after:h-1 after:w-0 after:bg-orange after:transition-all after:duration-300 hover:after:w-full"
                            href={items.href}
                            key={items.name}>
                            {items.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center gap-5">
                <div className="relative flex">
                    <button className="cursor-pointer" onClick={() => setIsOpenCart(prev => !prev)}>
                        <img src={images.cartIcon} alt="cart" />
                    </button>

                    {cardCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-orange text-white text-xs px-2 py-0.5 rounded-full">
                            {cardCount}
                        </span>
                    )}
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
                <div className="fixed inset-0 z-40"
                    onClick={() => setIsOpenCart(false)}>
                    <div className="absolute top-30 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white rounded-lg shadow-lg z-50 md:left-auto md:right-30 md:translate-x-0">
                        <div className="p-4 border-b border-light-grayish-blue font-bold">
                            Cart
                        </div>

                        <div className="p-4" >
                            {cardCount > 0 ? (
                                <div>
                                    <div className="flex justify-evenly items-center gap-3">
                                        <img src={products[0].thumbnail} className="w-16 rounded-md" alt="product image" />
                                        <div>
                                            <h1 className="text-sm text-dark-grayish-blue">Fall Limited Edition Sneakers</h1>
                                            <p>$125.00 x <span>{cardCount}</span>{" "} <span className="font-bold">${(cardCount * 125).toFixed(2)}</span></p>
                                        </div>
                                        <img src={images.deleteIcon} alt="delete icon" className="cursor-pointer" onClick={() => setCardCount(0)} />
                                    </div>

                                    <button className="w-full bg-orange hover:bg-pale-orange hover:text-dark-blue transition duration-500 text-white py-3 rounded-md mt-4">
                                        Checkout
                                    </button>
                                </div>
                            ) : (
                                <p className="text-center text-gray-500 py-13">
                                    Your cart is empty.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
