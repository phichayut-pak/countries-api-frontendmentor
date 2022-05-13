
const Card = ({ img, title, population, region, capital}) => {
  return(
    <div className="grid grid-rows-2 grid-flow-col rounded-md h-auto bg-white dark:bg-darkElements">
      <div id="image" className="inline-flex justify-center">
        <img className="rounded-t-md " src={img} alt="" />
      </div>
      <div id="info" className="flex flex-col justify-start items-start px-5 py-12">
        <div id="title" className="font-nunito font-extrabold text-xl dark:text-white">
          {title}
        </div>
        <div id="description" className="mt-5">
          <div id="population" className="font-nutino font-light dark:text-white">
            <span className="font-semibold">Population: </span>
            {population}
          </div>
          <div id="region" className="font-nutino font-light dark:text-white"><span className="font-semibold">Region: </span>{region}</div>
          <div id="capital" className="font-nutino font-light dark:text-white"><span className="font-semibold">Capital: </span>{capital}</div>
        </div>
      </div>
    </div>
  )
}

export default Card