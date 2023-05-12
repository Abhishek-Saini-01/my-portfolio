import Link from "next/link"
import Logo from "./Logo"
import { useRouter } from "next/router"
import {  GithubIcon, LinkedInIcon, MoonIcon,  SunIcon, } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light
            `}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href);
    }
    return (
        <button href={href} onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}
            <span className={`h-[1px] inline-block  bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-dark
            `}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light text-dark dark:text-light dark:bg-dark relative  z-10 lg:px-16 md:px-12 sm:px-8">

            <button className=" flex-col justify-center items-center hidden lg:flex " onClick={handleMenu}>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            { 
                isOpen ?
                <motion.div 
                initial={{scale: 0, opacity: 0, x:"-50%", y: "-50%"}}
                animate={{scale: 1, opacity: 1}}

                className="min-w-[70vw] flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/75 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                <nav className="flex items-center flex-col justify-center">
                    <CustomMobileLink toggle={handleMenu} href="/" title="Home"  />
                    <CustomMobileLink toggle={handleMenu} href="/about" title="About"  />
                    <CustomMobileLink toggle={handleMenu} href="/projects" title="Projects"  />
                </nav>
                <nav className="flex flex-center justify-center flex-wrap mt-2 ">
                    
                    <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://github.com/Abhishek-Saini-01"
                        target="_blank"
                        className="w-8 mx-3 sm:mx-1 bg-light rounded-full  dark:bg-dark"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://www.linkedin.com/in/abhisheksaini02/"
                        target="_blank"
                        className="w-7 sm:mx-1 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : 'bg-light text-dark   '}`}
                    >
                        {
                            mode === "dark" ?
                                <SunIcon className={`fill-dark `} /> :
                                <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
                </motion.div>
                : null
            }

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                </nav>
                <nav className="flex flex-center justify-center flex-wrap">
                    
                    <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://github.com/Abhishek-Saini-01"
                        target="_blank"
                        className="w-7 mx-3"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://www.linkedin.com/in/abhisheksaini02/"
                        target="_blank"
                        className="w-7 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : 'bg-light text-dark   '}`}
                    >
                        {
                            mode === "dark" ?
                                <SunIcon className={`fill-dark `} /> :
                                <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>


            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar