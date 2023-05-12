import AnimatedText from "@/components/AnimatedText"
import { GithubIcon } from "@/components/Icons"
import { Layout } from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import featuredImg1 from '../../public/images/projects/addTocart.png'
import featuredImg2 from '../../public/images/projects/image1.png'
import projectImg1 from '../../public/images/projects/airclone-1.jpg'
import projectImg2 from '../../public/images/projects/iphone.png'
import projectImg3 from '../../public/images/projects/image2.png'
import projectImg4 from '../../public/images/projects/image3.png'
import { motion } from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect"

const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full relative flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">

            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full ">
                <FramerImage 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={img}
                    alt={title}
                    className="w-full h-auto "
                />
            </Link>


            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base sm:text-sm">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2 " >
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light/75 sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10" ><GithubIcon className="dark:text-light" /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold cursor-pointer sm:px-4 sm:text-base" >Visit Project</Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full  flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%]  xs:rounded-[1.5rem]" />

            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={img}
                    alt={title}
                    className="w-full h-auto "
                    priority
                    sizes="(max-width: 768px ) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>


                <div className="w-full flex flex-col items-start justify-between mt-4">
                    <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">{type}</span>
                    <Link href={link} target="_blank" className="hover:underline underline-offset-2" >
                        <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl  ">{title}</h2>
                    </Link>
                    <div className="w-full mt-2 flex items-center justify-between">
                        <Link href={link} target="_blank" className="text-lg font-semibold underline underline-offset-2 cursor-pointer dark:text-light md:text-base" >Visit </Link>
                        <Link href={github} target="_blank" className="w-10 md:w-8" ><GithubIcon className="dark:text-light" /></Link>
                    </div>
                </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Abhishek Saini - Web developer</title>
                <meta name="description" content="Projects" />
            </Head>
            <TransitionEffect />

            <main className="flex w-full mb-16 flex-col items-center justify-center dark:text-light ">
                <Layout className="pt-16 ">
                    <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8"/>

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject 
                                img={featuredImg1}
                                title="Add to Cart web Application"
                                summary="A add to cart application which uses real time database firebase and uses front-end technologies like HTML, CSS and Javascript.
                                In this web application we add shopping list items and on-click the items in it will be removed from database"
                                link='https://add-shopping-list.netlify.app/'
                                type="Featured Project"
                                github="https://github.com/Abhishek-Saini-01/Add-to-cart-"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                img={projectImg1}
                                title="Airbnb Clone"
                                link='https://project-rent-clone-nextjs-13-5q0kfblyu-abhishek-saini-01.vercel.app/'
                                type="Project"
                                github="https://github.com/Abhishek-Saini-01/Airbnb-clone-NEXTJS-13"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                img={projectImg2}
                                title="3D Iphone Website"
                                link='https://iphone14-clone.netlify.app/'
                                type="Project"
                                github="https://github.com/Abhishek-Saini-01/iphone14-clone-3Dwebsite"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject 
                                img={featuredImg2}
                                title="3D Customise T-shirt Website"
                                link='https://golden-pothos-e10fcb.netlify.app/'
                                type="Featured Project"
                                github="https://github.com/Abhishek-Saini-01/threejs_t_shirt_design_web"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                img={projectImg3}
                                title="Food Delivery Website"
                                link='https://3-d-portfolio-design.vercel.app/'
                                type="Project"
                                github="https://github.com/Abhishek-Saini-01/food-website"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                img={projectImg4}
                                title="Banking Website"
                                link='https://bank-website-ui-3v9b.vercel.app/'
                                type="Project"
                                github="https://github.com/Abhishek-Saini-01/Bank-website-ui"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects