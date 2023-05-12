import AnimatedText from "@/components/AnimatedText"
import { Layout } from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import profileImage2 from '../../public/images/profile/developer-pic-2.jpg'
import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect"

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);
    useEffect(() => {
        springValue.on('change', (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue, value])
    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Abhishek Saini - Web developer</title>
                <meta name="description" content="Biography | About" />
            </Head>
            <TransitionEffect />

            <main className="flex w-full flex-col items-center justify-center dark:text-light ">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75" >Biography</h2>
                            <p className="font-medium"> Hi, I'm Abhishek Saini, a MERN stack web developer with a passion for creating beautiful, responsive, and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I have expanded my skillset to include React.js, Next.js, Tailwind CSS, Firebase, MongoDB, and other popular web technologies.
                            </p>
                            <p className="font-medium my-4"> Through my learning journey, I have created numerous websites and projects, which have helped me gain valuable experience and hone my development skills. My love for web development is rooted in my desire to bring innovative and creative ideas to life, while making sure they are functional and accessible to everyone.
                            </p>
                            <p className="font-medium">Whether I'm working on a website, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8  dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image 
                                src={profileImage2}
                                alt="profile image"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px ) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col items-end gap-10 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={40}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projected completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={1}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">year of experience</h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about