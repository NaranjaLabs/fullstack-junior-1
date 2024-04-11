import React from 'react';


function NavBar() {
  return (
    <nav>
      <ul className={ `text-lg h-5 font-normal flex justify-evenly leading-5` }>
        <li className='w-fit'>Home</li>
        <li className='w-fit'>Service</li>
        <li className='w-fit'>Portifolio</li>
        <li className='w-fit'>How we works</li>
      </ul>
    </nav>
  )
}

export default NavBar;