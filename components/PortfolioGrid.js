import PortfolioItem from './PortfolioItem'

const PortfolioGrid = ({data, cols}) => {

    const colsRwdCalc = cols == 2 ? 1 : 2;

    return (
        <div className={`w-full grid sm:grid-cols-${colsRwdCalc} md:grid-cols-${cols} sm:gap-10 gap-5`}> 
            {data.map((item) => <PortfolioItem title={item.title} key={item.id} />)}
        </div>
    )
}

export default PortfolioGrid