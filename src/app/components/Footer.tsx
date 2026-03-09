import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaWordpress } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row  items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <Link className="footer-heading" href="/" >cloud gallery&trade;</Link>
                    <p className="footer-text mt-2">&copy; {new Date().getFullYear()} Cloud Gallery. All rights reserved.</p>
                </div>

                <div className="flex justify-center space-x-4 mb-8">
                    <Link href="https://github.com/harshita-aggarwal" target="_blank" rel="noopener noreferrer"  className="footer-link">
                    <FaGithub/></Link>
                    <Link href="https://www.linkedin.com/in/harshita-aggarwal/" target="_blank" rel="noopener noreferrer"  className="footer-link">
                    <FaLinkedin/></Link>
                    <Link href="https://iambookdragon.wordpress.com/" className="footer-link">
                    <FaWordpress/></Link>
                </div>
            </div>
        </div>

    </footer>
  )
};

export default Footer;
