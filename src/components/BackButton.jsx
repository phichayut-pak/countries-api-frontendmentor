

const BackButton = ({ backButton, language}) => {
  return(
    <button onClick={backButton} className="px-5 py-2 inline-flex justify-center items-center font-nunito font-light text-xl shadow-md bg-white dark:bg-darkElements text-black dark:text-white">
      <span className="mt-1 mr-2"><ion-icon name="arrow-back-outline"></ion-icon></span>
      {language ? language : 'Back'}
    </button>
  )
}

export default BackButton