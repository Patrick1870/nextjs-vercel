import Button from "./Button";

const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row w-full justify-between align-middle items-center">    
            <div className="flex py-5 sm:px-20">
                <div>&copy; 2021 Build of course on NextJS</div>
            </div>
            <div className="flex py-5 px-20">
                <div className="p-5">Github</div>
                <div className="p-5 pr-10">LinkedIn</div>
                <Button text="Contact me" color="pinkPrimary" link="/contact" />
            </div>
        </footer>
    )
} 

export default Footer;