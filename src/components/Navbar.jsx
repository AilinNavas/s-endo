import { useState } from 'react';
import logo from '../assets/logo-Neal.jpeg';
import { GrLanguage } from "react-icons/gr";
import { HiXMark } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Testimonials", path: "testimonials" },
        { link: "Get your answers", path: "blog" },
    ]
    return (
        <>
            <nav className='bg-white md:px-1  max-w-screen-2x1 mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium animate-fade-down animate-delay-[1000ms]'>
                    <div className='flex space-x-14 items-center'>
                        <a className='' href="/">
                            <img className='h-20 w-30 p-2 inline-block items-center hover:animate-rotate-y animate-duration-[50ms] animate-delay-[50ms]' src={logo} alt="" />
                        </a>

                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) => <a key={link} href={path} className='block hover:text-secondary'>{link}</a>)
                            }
                        </ul>
                    </div>

                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage
                            className='mr-2 animate-pulse' /> <span>Language</span></a>
                        
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none  text-xl focus:text-gray'>
                            {
                                isMenuOpen ? (<HiXMark className='w-8 h-8 text-primary' />) : (<FaBars className='w-8 h-8 text-primary' />)
                            }
                        </button>
                    </div>


                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-36 pb-5 bg-gray ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden" }`}>
                {
                    navItems.map(({ link, path }) => <a key={link} href={path} className='block text-2xl hover:text-secondary'>{link}</a>)
                }
            </div>

        </>


    );
};

export default Navbar;