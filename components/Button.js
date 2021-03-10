const Button = ({text, color}) => {


	return (
		<button className={`border-${color} px-8 py-3 border-2 border-opacity-80 rounded bg-transparent hover:bg-${color} text-${color} uppercase hover:text-white`}>
			<p>{text}</p>
		</button>
	)
}

export default Button