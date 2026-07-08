import { images, navigations } from "/data"
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center max-w-7xl mx-auto p-6 md:p-10 text-lg border-b border-pale-orange">
            <div className="flex gap-2.5">
                <button
                    className="md:hidden">
                    <img src={images.menuIcon} alt="open menu" />
                </button>

                <h1 className="font-kumbh font-bold  text-2xl md:text-3xl">
                    sneakers
                </h1>

                <div className="hidden md:flex items-center gap-7 px-5 text-dark-grayish-blue ">
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
                    <button className="cursor-pointer">
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
        </nav>

    )
}
