import Logo from './Logo';
import Button from './Button';

const Navbar = () => {
	return (
			<div className="w-full flex flex-wrap px-20 items-center content-center justify-between bg-darkPrimary p-5 text-white">
				<Logo />
				<Button text="Get pricing" color="pinkPrimary" />

			</div>
	) 
}

export default Navbar