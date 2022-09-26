import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { motion } from "framer-motion"

function MobileNavbar() {
    const [nav,setnav]=useState(false)
    const handlenav=()=>{setnav(!nav)}
  return (
    <>
    <motion.div initial={{rotate:0}} animate={{rotate: nav?90:0}}  onClick={handlenav} className='fixed bg-bgsecondary rounded-full p-3 z-50 m-5 justify-center flex md:hidden'>
            {!nav?<FaArrowDown/>:''}
    </motion.div>
        <motion.div initial={{y:100}} animate={{y: !nav?-20:0}} className={nav?'fixed flex text-center justify-center items-center z-50 w-full bg-bgsecondary ':'absolute -top-full'}>
            <ul className='m-5'>
            <li onClick={()=>setnav(false)} className='hover:border-b-4 hover:border-secondary transition-all'>
                    Home</li>
                <li onClick={()=>setnav(false)} className=' hover:border-b-4 hover:border-secondary transition-all'>
                    Skills</li>
                <li onClick={()=>setnav(false)} className=' hover:border-b-4 hover:border-secondary transition-all'>
                    Portfolio</li>
                <li onClick={()=>setnav(false)} className=' hover:border-b-4 hover:border-secondary transition-all'>
                    About</li>
                <li>  <motion.div initial={{rotate:0}} animate={{rotate: nav?0:90}} onClick={handlenav} className='m-5 justify-center flex md:hidden'>
            {nav?<FaArrowUp/>:''}
        </motion.div ></li>
            </ul>
          
        </motion.div>
    </>    

  )
}

export default MobileNavbar