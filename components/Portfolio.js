const Portfolio = () => {
	return (
		<div className="w-full p-20 flex flex-col items-start bg-darkPrimary">
			<div>
				<h2 className="text-4xl mb-3 text-darkSecondary">Portfolio</h2> {/* wyodrębnij jako sectionHeading */}
				<h2 className="text-4xl mb-3 text-white">Choosen web projects</h2>
				<button className="flex items-center justify-items-stretch mb-10 text-pinkSecondary uppercase">
					VIEW ALL PROJECTS <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fillRule="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" fillOpacity="" />
					</svg>
				</button> {/* wyodrębnij jako komponent */}
			</div>

			<div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-4">
					<div className="flex-1 bg-darkThird rounded-xl shadow-md overflow-hidden h-96 mx-auto place-self-center w-full">portfolio first item</div> {/* map here the data from ./data */}
					<div className="flex-1 bg-darkThird rounded-xl shadow-md overflow-hidden h-96 mx-auto place-self-center w-full">portfolio first item</div> {/* map here the data from ./data */}
				</div>
		</div>
	)
}

export default Portfolio