import { motion } from "framer-motion"

const quote = {
    initial: {
        opacity: 1,
    },
    animate:{
        opacity: 1,
        transition:{
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}
const words = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate:{
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
        }
    }
}
const AnimatedText = ({ text, className="" }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden 
        sm:py-0 '>
            <motion.h1 
            variants={quote}
            initial="initial"
            animate="animate"
            className={`inline-block w-full text-dark font-bold capitalize text-8xl  ${className} dark:text-light`}>
                {
                    text.split(" ").map((word, index) => (
                        <motion.span
                            variants={words}
                            key={word+'-'+index} 
                            className="inline-block"
                        >{word}&nbsp;</motion.span>
                    ))
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText