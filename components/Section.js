const Section = ({heading, component}) => {
	return (
        <div className="h-screen py-20 px-5 sm:p-20 w-full flex flex-wrap content-center justify-left align-center items-center bg-darkPrimary bg-hero-pattern">
        	<div>{component}</div>	
        </div>
	)
}

export default Section