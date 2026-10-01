"use client";

import Image from "next/image";
import Link from "next/link";
import userIcon from "../../assets/user.png";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const userdata = session?.user;

  return (
    <div className="flex justify-between items-center mb-12 ">
      <div></div>
      <div>
        <ul className="flex gap-5 text-[18px]  text-gray-600">
          <li>
            <Navlink href={"/"}>Home</Navlink>
          </li>
          <li>
            <Navlink href={"/about"}>About</Navlink>
          </li>
          <li>
            <Navlink href={"/career"}>Career</Navlink>
          </li>
          <li>
            <Navlink href={"/contact"}>Contact</Navlink>
          </li>
        </ul>
      </div>
      <div>
        {
          isPending ? <h2>Loading</h2> : userdata ? <>
          <div className="flex gap-3 justify-center items-center">
          <h2>Hello : {userdata?.name}</h2>
          <Image src={userIcon} alt="User Icon" />
          <button onClick={async() => await authClient.signOut()} className="btn bg-black text-white text-[18px] py-3 px-6 rounded-sm">
              Sign Out
            </button>
          
        </div>
          </> : <>
          <Link href={"/signin"}>
            <button className="btn bg-black text-white text-[18px] py-3 px-6 rounded-sm">
              Signin
            </button>
          </Link>
          </>
        }
      </div>
    </div>
  );
}
