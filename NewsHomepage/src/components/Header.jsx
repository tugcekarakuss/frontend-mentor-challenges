import { images, navigations } from "../data"
function Header() {
  return (
    <div className="p-10">
      <header >
        <nav className="flex justify-between">
          <img src={images.logo} alt="" />
          <div >
            {navigations.map(item => (
              <a href={item.href} key={item.name} className="px-4">{item.name}</a>
            ))}
          </div>
          <div>
            <button>
              <img src={images.iconMenu} alt="" />
            </button>
          </div>
            <div className="flex flex-col ">
              {navigations.map(item=>(
                <a href={item.href} key={item.name} className="px-4">{item.name}</a>
              ))}
            </div>

        </nav>
      </header>
    </div>
  )
}
export default Header