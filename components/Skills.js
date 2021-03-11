import PortfolioGrid from "./PortfolioGrid"
import SectionButton from "./SectionButton"
import SectionHeading from "./SectionHeading";
import data from '../data/skills';

const Portfolio = () => {

	return (
		<div className="w-full px-20 py-20 flex flex-col items-start bg-darkPrimary">
				<SectionHeading sectionName="Skills" sectionHeading="Tech stack" />
				{/*<SectionButton text="view all projects" />*/}
				<PortfolioGrid data={data} cols="4" />
		</div>
	)
}

export default Portfolio