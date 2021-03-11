import Arrow from './svgs/Arrow'

const SectionButton = ({text}) => {
    return (
        <button className="flex items-center justify-items-stretch mb-10 text-pinkSecondary uppercase transition transform duration-500 hover:translate-x-4 focus:outline-none focus:text-purple-600">
            {text}
                    
            <Arrow />
		</button> 
    )
}

export default SectionButton