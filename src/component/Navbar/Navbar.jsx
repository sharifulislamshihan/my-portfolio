import { Sling as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
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
        <div className={scrolled ? 'bg-[#121212]' : 'bg-transparent'}>
            <div className="navbar font-heading fixed w-full z-50 py-7 transition duration-300 ease-in-out">
                <div className="navbar-start md:pl-3 xl:pl-20 2xl:pl-40">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Hamburger color='#FFFFFF' size={18} md:size={20}></Hamburger>
                        </div>
                        <Menu styles={style}>

                            <li>
                                <Link to='#home'
                                    className={activeLink === 'home' ? 'text-xl font-heading font-bold text-white' : 'text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-0'}
                                    onClick={() => onUpdateActiveLink('home')}
                                >Home</Link>
                            </li>
                            <li>
                                <Link to='#skills'
                                    className={activeLink === 'skills' ? 'text-xl font-heading font-bold text-white' : 'text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-0'}

                                    onClick={() => onUpdateActiveLink('skills')}
                                >Skills</Link></li>
                            <li>
                                <Link to='#projects'
                                    className={activeLink === 'projects' ? 'text-xl font-heading font-bold text-white' : 'text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-0'}

                                    onClick={() => onUpdateActiveLink('projects')}
                                >Project</Link></li>
                            <br />
                            <h3 className='text-xl font-heading font-bold text-white no-underline py-5'>Let's Connect</h3>
                            <hr className='text-slate-600 text-xl' />
                            <div className='py-5'>
                                <a className='text-xl font-heading font-bold text-white no-underline' href="https://www.facebook.com/sham.shihan41/">FaceBook</a>
                                <br />
                                <a className='text-xl font-heading font-bold text-white no-underline' href="">Instagram</a>
                                <br />
                                <a className='text-xl font-heading font-bold text-white no-underline' href="">GitHub</a>
                                <br />
                                <a className='text-xl font-heading font-bold text-white no-underline' href="">LinkedIn</a>
                            </div>
                        </Menu>

                    </div>


                    <a className="z-50 text-white text-2xl font-bold">Shihan web</a>
                </div>

                <div className=" navbar-center hidden lg:flex z-50">
                    <ul className="menu menu-horizontal px-1 py-10 space-x-12">

                        <NavLink to='#home'
                            className={activeLink === 'home' ? ' text-base xl:text-xl font-heading font-bold text-white opacity-95 no-underline' : ' text-base xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-100'}
                            onClick={() => onUpdateActiveLink('home')}
                        >Home</NavLink>


                        <NavLink to='#skills'
                            className={activeLink === 'skills' ? ' text-base xl:text-xl font-heading font-bold text-white no-underline' : ' text-base xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-100'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >Skills</NavLink>

                        <NavLink to='#projects'
                            className={activeLink === 'projects' ? ' text-base xl:text-xl font-heading font-bold text-white no-underline' : ' text-base xl:text-xl font-heading font-bold text-white opacity-50 no-underline hover:opacity-100'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >Project</NavLink>
                    </ul>
                </div>


                <div className="navbar-end gap-5 z-50 xl:gap-10 pr-5 lg:pr-2 xl:pr-20 2xl:pr-40">
                    <div className='space-x-2 hidden md:block transition duration-300 ease-in-out'>
                        <button className='btn btn-circle btn-outline btn-base xl:btn-md bg-[#222222]'>
                            <FaFacebook className='text-base xl:text-xl text-white'></FaFacebook>
                        </button>
                        <button className='btn btn-circle btn-outline btn-base xl:btn-md bg-[#222222]'>
                            <FaGithub className='text-base xl:text-xl text-white'></FaGithub>
                        </button>
                        <button className='btn btn-circle btn-outline btn-base xl:btn-md bg-[#222222]'>
                            <FaLinkedin className='text-base xl:text-xl text-white'></FaLinkedin>
                        </button>
                    </div>
                    <button className="btn text-white font-heading font-semibold text-base xl:text-lg bg-[#222222] hover:bg-[#222222] xl:btn-lg ">Let's Connect</button>
                </div>
            </div >
        </div>
    );
};

export default Navbar;