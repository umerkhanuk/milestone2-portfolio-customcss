import Link from "next/link"
import Image from "next/image"
const Header = () => {
  return (
    <div>
        {/* annoucement bar */}
        <div className="flex h-14 bg-[#000000] justify-center items-center gap-3">
          <p className=" text-[#fcb532] align">Freehand is now part of Miro           <span className="text-white underline cursor-pointer">Read the announcement.</span></p>

        </div>
        {/* Nav bar */}
        <div className="flex bg-[#f2f2f3]  h-28  gap-7 px-4 py-3">
            {/* logo */}
            <Image src={"/logo (1).png"} alt={"logo"} width={100} height={200}></Image>
            <ul className="flex gap lg:gap-14 text-base lg:text-lg font-sans m-auto items-center justify-center ">
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="/contact">CONTACT</Link></li>
            </ul>
        </div>
    </div>
  )
}
export default Header