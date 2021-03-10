const Button = ({text, color}) => {


	return (
		<div className={`border-${color} px-8 py-3 border-2 border-opacity-80 rounded bg-transparent`}>
			<p className={`text-${color} uppercase`}>{text}</p>
		</div>
	)
}

export default Button