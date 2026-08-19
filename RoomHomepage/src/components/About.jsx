import AboutDark from "../assets/images/about/image-about-dark.jpg"
import AboutLight from "../assets/images/about/image-about-light.jpg"
import '../App.css'
export default function About() {
  return (
    <div className="grid lg:grid-cols-3 lg:col-span-3">
                    <img src={AboutDark} alt="product image" className="h-full w-full object-cover"/>

                    <div className="p-10 font-league-spartan flex flex-col gap-5">
                        <h2 className="uppercase font-bold tracking-[5px]">About our furniture</h2>
                        <p className="text-grey-light">
                            Our multifunctional collection blends design and function to suit
                            your individual taste. Make each room unique, or pick a cohesive
                            theme that best express your interests and what inspires you.
                            Find the furniture pieces you need, from traditional to
                            contemporary styles or anything in between. Product specialists
                            are available to help you create your dream space.
                        </p>
                    </div>

                    <img src={AboutLight} alt="product image" className="h-full w-full object-cover"/>
                </div>
  )
}
