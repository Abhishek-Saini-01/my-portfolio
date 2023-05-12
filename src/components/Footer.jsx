import Link from "next/link"
import { Layout } from "./Layout"

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base ">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6" >
                <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
                <Link href="mailto:abhisheksaini655@gmail.com" className="underline underline-offset-2 cursor-pointer">Say, hello!</Link>
            </Layout>
        </footer>
    )
}

export default Footer