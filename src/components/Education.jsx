import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import Lilcon from './Lilcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <Lilcon reference={ref}/>
            <motion.div
                initial={{y: 50}}
                whileInView={{y: 0}}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">{time} | {place}</span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className="my-28">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mt-32">Education</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-0  w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" 
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details 
                        type="Bachelor Of Science In Computer Science"
                        time="2021-current"
                        place="Swami Keshvanand Institute of Technology, Management & Gramothan (SKIT)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Database management system."
                    />
                    <Details 
                        type="Online Coursework"
                        time="2016-2020"
                        place="Udemy and Learncodeonline"
                        info="Completed coursework in reactjs, nextjs and MERN stack web developer "
                    />

                </ul>
            </div>
        </div>
    )
}

export default Education