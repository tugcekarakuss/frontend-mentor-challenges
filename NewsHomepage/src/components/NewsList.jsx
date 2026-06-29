import { news_list } from "../data"
function NewsCard() {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col lg:flex-row gap-5 lg:gap-5">
      {news_list.map(item => (
      <div className=" flex flex-row gap-5">
        <div className="w-32 shrink-0">
           <img src={item.image} className=" w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-4xl text-soft-red font-bold">0{item.id}</h4>
          <h5 className="text-lg hover:text-soft-red font-bold cursor-pointer">{item.title}</h5>
          <p className="text-dark-grayish-blue">{item.description}</p>
        </div>
       
      </div>
     ))}
    </div>
  )
}
export default NewsCard