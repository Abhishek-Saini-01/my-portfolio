
import Image from "next/image"



const FloatingDiv = ({ image, className="",text1, text2 }) => {
    return (
        <div
        className={`absolute ${className} justify-around bg-light dark:bg-dark text-dark dark:text-light shadow-lg  border-2 border-solid border-transparent  dark:border-light rounded-[17px]  flex items-center  pt-1 pr-[20px] pb-1 pl-1`}>
            <Image src={image} alt="crown" className="h-14 w-14 p-2 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24"  />
            <span className="text-lg 2xl:text-xl">
                {text1}
                <br />
                {text2}
            </span>
        </div>
    )
}

export default FloatingDiv