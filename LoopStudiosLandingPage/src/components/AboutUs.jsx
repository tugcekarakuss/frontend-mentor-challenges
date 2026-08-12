import heroWeb from "../assets/images/about/web-image-interactive.jpg"
import heroMobile from "../assets/images/about/mobile-image-interactive.jpg"

export default function AboutUs() {
  return (
    <section className="max-w-6xl mx-auto px-6 my-30">
      <div className="relative">

        <picture>
          <source srcSet={heroWeb} media="(min-width:768px)" />
          <img src={heroMobile} alt="about us image" />
        </picture>


        <div className="bg-white md:pt-15 md:ps-15 mt-8 md:absolute md:bottom-0 md:right-0 md:max-w-lg flex-col items-end">
          <h3 className="font-josefin-sans uppercase text-4xl mb-4 text-center md:text-left">The leader in interactive VR</h3>
          <p className="font-alata text-black/50 text-center md:text-left">
            Founded in 2011, Loopstudios has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our award-winning
            creations have transformed businesses through digital experiences that bind
            to their brand.
          </p>
        </div>
        
      </div>
    </section>
  )
}
