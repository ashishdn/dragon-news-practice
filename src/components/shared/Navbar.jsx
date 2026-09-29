import Image from 'next/image'
import Link from 'next/link'
import userIcon from "../../assets/user.png"
import Navlink from './Navlink'


export default function Navbar() {
  return (
    <div className='flex justify-between items-center mb-12 '>
      <div></div>
      <div>
        <ul className='flex gap-5 text-[18px]  text-gray-600'>
            <li><Navlink href={"/"}>Home</Navlink></li>
            <li><Navlink href={"/about"}>About</Navlink></li>
            <li><Navlink href={"/career"}>Career</Navlink></li>
            <li><Navlink href={"/contact"}>Contact</Navlink></li>
        </ul>
        </div>
      <div className='flex gap-3 '>
        <Image src={userIcon} alt='User Icon'/>
        <Link href={"/signin"}><button className='btn bg-black text-white text-[18px] py-3 px-6 rounded-sm'>Signin</button></Link>
      </div>
    </div>
  )
}
