import Link from 'next/link'

const Button = ({text, color, link}) => {
	return (
		<Link href="/contact"><button className={`bg-${color} px-8 py-3 rounded hover:bg-${color} text-white uppercase font-bold text-sm transition duration-300 hover:bg-purple-600`}>
			<p>{text}</p>
		</button>
		</Link>
	)
}

export default Button