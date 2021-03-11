
const PortfolioItem = ({title}) => {

    return (
        <div className="flex flex-1 items-center justify-center hover:bg-gray-700 cursor-pointer bg-darkThird rounded-md shadow-lg overflow-hidden h-72 sm:h-96 mx-auto place-self-center w-full text-white">
            {title}
        </div>
    )
}

export default PortfolioItem