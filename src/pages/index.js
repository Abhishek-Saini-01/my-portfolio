import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import Image from 'next/image'
import profileImage from '../../public/images/profile/developer-pic-3.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import FloatingDiv from '@/components/FloatingDiv'
import crown from '../../public/images/icons/crown.png'
import thumbup from '../../public/images/icons/react.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhishek Saini - Web developer</title>
        <meta name="description" content="I am a web developer with a passion for creating beautiful and functional websites. Check out my portfolio to see my latest projects." />
        <meta name='keywords' content='Web developer, portfolio, reactjs/nextjs developer, Abhishek Saini' />
      </Head>
      <TransitionEffect />
      <main className='flex items-center w-full min-h-[90vh] text-light sm:pt-[50px] xs:pt-[50px] md:pt-[50px] '>
        <Layout className=' !p-0 !py-0 pb-0  md:!pt-16  sm:!pt-8 !overflow-x-hidden'>
          <div className='flex items-center justify-between lg:flex-col '>
            
            <div className='w-[60%] 2xl:pl-32 xl:pl-32 lg:p-0 md:p-0 sm:p-0 xs:p-0 p-32  flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Bringing your vision to Reality, one line of code at a time." className='!text-[4rem] !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs text-dark/75 dark:text-light/75'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Abhishek-Saini-Resume.pdf" target='_blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark  border-2 border-solid border-transparent hover:border-dark cursor-pointer dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:p-2 md:px-4 md:text-base'
                >Resume <LinkArrow className="w-6 ml-1 sm:pl-1 xs:pl-1 md:pl-1" /></Link>
                <Link href="mailto:abhisheksaini655@gmail.com" target='_blank'
                  className='ml-4 text-lg font-medium capitalize text-dark underline cursor-pointer dark:text-light md:text-base '
                >Contact</Link>
              </div>
            </div>
            <div className='md:mt-[150px]  sm:mt-[150px] ml-0 sm:ml-[35%] xs:ml-[35%] md:ml-[35%] xs:mt-[100px]  w-[37%]  md:w-[75%] lg:w-[40%] relative'>
              <Image 
                priority
                sizes='(max-width: 768px ) 100vw, (max-width: 1200px) 50vw, 50vw'
                src={profileImage}
                alt='Image'
                className='w-full h-auto lg:hidden md:inline-block md:w-full '
              />
            <FloatingDiv image={crown} text1="web" text2="Developer" className='top-[100px] -left-28 xs:top-[30px] sm:top-[30px] md:top-[30px] lg:hidden md:flex'  />
            <FloatingDiv image={thumbup} text1="React/Next" text2="Developer" className='bottom-10 -left-16 lg:hidden md:flex'  />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
