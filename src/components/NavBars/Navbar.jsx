import React from 'react'
import DesktopNavbar from './DesktopNav';
import MobileNavbar from './MobileNav';

function Navbar() {
  return (
    <section className='shadow-md flex h-24 justify-center w-full bg-bgprimary '>
        <DesktopNavbar/><MobileNavbar/> 
    </section>
  )
}

export default Navbar