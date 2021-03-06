import PortfolioGrid from "./PortfolioGrid"
import SectionButton from "./SectionButton"
import SectionHeading from "./SectionHeading";
import data from '../data/projects';

const Portfolio = () => {

	return (
		<div className="w-full px-20 py-20 flex flex-col items-start bg-darkPrimary">
				<SectionHeading sectionName="Portfolio" sectionHeading="Choosen best web application" />
				<SectionButton text="view all projects" />
				<PortfolioGrid data={data} cols="2" />
		</div>
	)
}

export default Portfolio