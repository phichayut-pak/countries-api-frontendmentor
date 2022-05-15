
const BorderButton = ({ border }) => {
  return(
    <div className="px-3 py-1 inline-flex justify-center items-center font-nunito font-light text-md shadow-md bg-white dark:bg-darkElements text-black dark:text-white">
      { border }
    </div>
  )
}

export default BorderButton