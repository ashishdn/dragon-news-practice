import Image from 'next/image'
import logo from "../../assets/logo.png"
import { format, } from "date-fns";

export default function Header() {
  return (
    <div className='flex flex-col items-center justify-center text-center my-5'>
      <Image src={logo} alt='This is my logo'/>
      <div>
        <p className='text-[20px] mt-5'>Journalism Without Fear or Favour</p>
        <p className='text-[20px]'>{format(new Date, "EEEE, MMMM dd, yyyy")}</p>
      </div>
    </div>
  )
}
