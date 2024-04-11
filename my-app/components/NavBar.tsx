import Link from 'next/link';
import React from 'react';


function NavBar({ className }: { className: string }) {
  return (
    <nav>
      <ul className={ `text-lg h-5 font-normal flex justify-between leading-5 nav-list ` + className }>
        <li className='w-fit'><Link href={''}>Home</Link></li>
        <li className='w-fit'><Link href={''}>Service</Link></li>
        <li className='w-fit'><Link href={''}>Portifolio</Link></li>
        <li className='w-fit'><Link href={''}>How we works</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;