const Section = ({heading, component}) => {
	return (
        <div className="h-screen p-20 w-full flex flex-wrap content-center justify-left align-center items-center bg-darkPrimary">
        	<div>{component}</div>	
        </div>
	)
}

export default Section