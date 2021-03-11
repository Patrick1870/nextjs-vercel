const SectionHeading = ({sectionName, sectionHeading}) => {
	return (
		<>
			<h2 className="text-2xl mb-1 text-darkSecondary">{sectionName}</h2> 
			<h2 className="text-4xl mb-8 text-white font-bold">{sectionHeading}</h2>
		</>
	)
}

export default SectionHeading