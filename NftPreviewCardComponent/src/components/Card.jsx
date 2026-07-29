import equilibrium from "../assets/image-equilibrium.jpg";
import ethIcon from "../assets/icon-ethereum.svg";
import clockIcon from "../assets/icon-clock.svg";
import avatar from "../assets/image-avatar.png";
import view from "../assets/icon-view.svg";


export default function Card() {
  return (
    <div className="bg-card-bg p-5 rounded-2xl max-w-xs md:max-w-sm">

      <div className="relative group">
        <img
          src={equilibrium}
          alt="Equilibrium"
          className="rounded-lg w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-heading/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity duration-300">
          <img src={view} alt="view icon" className="w-10" />
        </div>
      </div>


      <div className="mt-4 space-y-4">
        <h2
          className="text-white text-lg font-semibold hover:text-heading cursor-pointer transition-colors duration-300">
          Equilibrium #3429
        </h2>
        <p className="text-text">Our Equilibrium collection promotes balance and calm.</p>

        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-2">
            <img
              src={ethIcon}
              alt="ethereum icon" />
            <span className="text-heading">0.041 ETH</span>
          </div>

          <div className="flex items-center gap-2">
            <img
              src={clockIcon}
              alt="clock icon" />
            <span className="text-text">3 days left</span>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-line pt-3">
          <img
            src={avatar}
            className="w-8 border border-white rounded-full"
            alt="avatar icon" />
          <p className="text-text">Creation of <span className="text-white hover:text-heading cursor-pointer transition-colors duration-300">Jules Wyvern</span></p>
        </div>

      </div>
    </div>
  )
}
