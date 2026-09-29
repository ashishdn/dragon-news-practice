"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navlink({href, children}) {
    const pathName = usePathname();
    const isActive = pathName === href;
  return (
    <div>
       <Link href={href} className={isActive ? "border-b-2 border-b-purple-500 font-semibold" : ""}>
        {children}
      </Link>
    </div>
  )
}
