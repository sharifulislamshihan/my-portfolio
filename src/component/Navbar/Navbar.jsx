import { Sling as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    // to set the menu bar in mobile device
    var style = {
        bmCross: {
            background: '#000000'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmOverlay: {
            background: ''
        }
    }

    return (
        <div className={scrolled ? '' : 'bg-transparent'}>
            <div className="navbar font-heading w-full z-50 py-7 transition duration-300 ease-in-out">
                <div className="navbar-start md:pl-3 xl:pl-20 2xl:pl-40">
                    <div className="">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Hamburger color='#FFFFFF' size={18} md:size={20}></Hamburger>
                        </div>
                        <div className='lg:hidden'>
                            <Menu styles={style}>

                                <li>
                                    <Link to='home'
                                        className={activeLink === 'home' ? 'text-xl font-heading font-bold text-white' : 'text-lg xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-0'}
                                        onClick={() => onUpdateActiveLink('home')}
                                    >Home</Link>
                                </li>
                                <li>
                                    <Link to='aboutMe'
                                        className={activeLink === 'aboutMe' ? 'text-lg xl:text-xl font-heading font-bold text-white' : 'text-lg xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-0'}
                                        onClick={() => onUpdateActiveLink('aboutMe')}
                                    >About Me</Link>
                                </li>
                                <li>
                                    <Link to='services'
                                        className={activeLink === 'services' ? 'text-lg xl:text-xl font-heading font-bold text-white' : 'text-lg xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-0'}

                                        onClick={() => onUpdateActiveLink('services')}
                                    >Services</Link></li>
                                <li>
                                    <Link to='projects'
                                        className={activeLink === 'projects' ? 'text-lg xl:text-xl font-heading font-bold text-white' : 'text-lg xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-0'}

                                        onClick={() => onUpdateActiveLink('projects')}
                                    >Projects</Link></li>
                                <li>
                                    <Link to='skills'
                                        className={activeLink === 'skills' ? 'text-lg xl:text-xl font-heading font-bold text-white' : 'text-lg xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-0'}

                                        onClick={() => onUpdateActiveLink('skills')}
                                    >Skills</Link>
                                </li>
                                <li>
                                    <Link to='contact'
                                        className={activeLink === 'contact' ? 'text-lg xl:text-xl font-heading font-bold text-white' : 'text-lg xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-0'}

                                        onClick={() => onUpdateActiveLink('contact')}
                                    >Contact</Link>
                                </li>
                                <br />
                                <a href="https://www.linkedin.com/in/shariful-islam-shihan/">
                                    <h3 className='text-xl font-heading font-bold text-white no-underline py-5'>Let's Connect</h3>
                                </a>
                                <hr className='text-slate-600 text-xl' />
                                <div className='py-5'>
                                    <a className='text-xl font-heading font-bold text-white no-underline' href="https://www.facebook.com/sham.shihan41/">FaceBook</a>
                                    <br />
                                    <a className='text-xl font-heading font-bold text-white no-underline' href="https://www.instagram.com/mr_shihan/">Instagram</a>
                                    <br />
                                    <a className='text-xl font-heading font-bold text-white no-underline' href="https://github.com/sharifulislamshihan">GitHub</a>
                                    <br />
                                    <a className='text-xl font-heading font-bold text-white no-underline' href="https://www.linkedin.com/in/shariful-islam-shihan/">LinkedIn</a>
                                </div>
                            </Menu>
                        </div>

                    </div>


                    <a className="z-50 text-white text-2xl font-bold">Shihan web</a>
                </div>

                <div className=" navbar-center hidden lg:flex z-50">
                    <ul className="menu menu-horizontal px-1">

                        <li>
                            <Link to='home'
                                smooth={true} duration={500}
                                className={activeLink === 'home' ? ' text-base xl:text-xl font-heading font-bold text-white opacity-95 no-underline' : ' text-base xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-100'}
                                onClick={() => onUpdateActiveLink('home')}
                            >Home</Link>
                        </li>

                        <li>
                            <Link to='aboutMe'
                                smooth={true} duration={500}
                                className={activeLink === 'aboutMe' ? ' text-base xl:text-xl font-heading font-bold text-white opacity-95 no-underline' : ' text-base xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-100'}
                                onClick={() => onUpdateActiveLink('aboutMe')}
                            >About</Link>
                        </li>

                        <li>
                            <Link to='services'
                                smooth={true} duration={500}
                                className={activeLink === 'services' ? ' text-base xl:text-xl font-heading font-bold text-white opacity-95 no-underline' : ' text-base xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-100'}
                                onClick={() => onUpdateActiveLink('services')}
                            >Services</Link>
                        </li>

                        <li>
                            <Link to='projects'
                                smooth={true} duration={500}
                                className={activeLink === 'projects' ? ' text-base xl:text-xl font-heading font-bold text-white opacity-95 no-underline' : ' text-base xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-100'}
                                onClick={() => onUpdateActiveLink('projects')}
                            >Projects</Link>
                        </li>

                        <li>
                            <Link to='contact'
                                smooth={true} duration={500}
                                className={activeLink === 'contact' ? ' text-base xl:text-xl font-heading font-bold text-white no-underline' : ' text-base xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-100'}
                                onClick={() => onUpdateActiveLink('contact')}
                            >Contact</Link>
                        </li>
                    </ul>
                </div>


                <div className="navbar-end gap-5 z-50 xl:gap-10 pr-5 xl:pr-20 2xl:pr-40">
                    <div className='space-x-2 hidden md:block transition duration-300 ease-in-out'>
                        <a href="https://www.facebook.com/sham.shihan41/" target='_blink'>
                            <button className='btn btn-circle btn-outline btn-md lg:btn-sm xl:btn-md bg-[#222222]'>
                                <FaFacebook className='text-base xl:text-xl text-white'></FaFacebook>
                            </button>
                        </a>
                        <a href="https://github.com/sharifulislamshihan" target='_blink'>
                            <button className='btn btn-circle btn-outline btn-md lg:btn-sm xl:btn-md bg-[#222222]'>
                                <FaGithub className='text-base xl:text-xl text-white'></FaGithub>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/shariful-islam-shihan/" target='_blink'>
                            <button className='btn btn-circle btn-outline btn-md lg:btn-sm xl:btn-md bg-[#222222]'>
                                <FaLinkedin className='text-base xl:text-xl text-white'></FaLinkedin>
                            </button>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/in/shariful-islam-shihan/" target='_blink'>
                            <button className="btn text-white font-heading font-semibold text-base xl:text-lg bg-[#222222] hover:bg-[#222222] xl:btn-lg ">
                                Let's Talk
                            </button>
                        </a>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Navbar;