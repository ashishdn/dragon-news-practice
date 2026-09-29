import React from 'react'
import Link from 'next/link'
export default async function LeftSidebar({categories, activeId}) {
    
    
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">This is my left sidebar</h2>
      <div>
        <ul className='grid grid-cols gap-3'>
            {
            categories.map(category =>( <li
            key={category.category_id}
            className={`${activeId === category.category_id && "bg-[#E7E7E7]"}  px-4 py-2 text-[18px] rounded
                   `}
          ><Link href={`/category/${category.category_id}`} className="block">{category.category_name}</Link></li>))
        }
        </ul>
      </div>
    </div>
  )
}
