import { slides, icons } from "../data";
import Navbar from "./Navbar";

import '../App.css'
import { useState } from "react";

export default function Header() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slide = slides[currentSlide]

    const handleNext = () => {
        setCurrentSlide(current => current === slides.length - 1 ? 0 : current + 1)
    }
    const handlePrevious = () => {
        setCurrentSlide(current => current === 0 ? slides.length - 1 : current - 1)
    }
    return (
        <header className="relative">
            <Navbar />
            <div className="grid lg:grid-cols-3">

                <div className="relative lg:col-span-2 fade-in">
                    <picture key={slide.id}>
                        <source
                            media="(max-width: 767px)"
                            srcSet={slide.images.mobile}
                        />

                        <img
                            src={slide.images.desktop}
                            alt="desktop product image"
                            className="block w-full fade-in"
                        />
                    </picture>

                    {/* slider buttons */}
                    <div className="absolute bottom-0 right-0 flex lg:-right-35">
                        <button
                            onClick={handlePrevious}
                            className="bg-grey-black px-7 py-3"
                        >
                            <img src={icons.left} alt="Previous slide" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="bg-grey-black px-7 py-3"
                        >
                            <img src={icons.right} alt="Next slide" />
                        </button>
                    </div>
                </div>

                {/* description*/}
                <div className="flex items-center gap-3 px-8 py-12 font-league-spartan">
                    <div className="flex flex-col items-start justify-center gap-5">
                        <h1 className="text-4xl lg:text-5xl font-semibold">{slide.title}</h1>

                        <p className="text-grey-light">{slide.description}</p>

                        <button className="flex gap-3 justify-center items-center">
                            <p className="tracking-[10px] font-medium">SHOP NOW</p>
                            <img src={icons.arrow} alt="arrow icon" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

