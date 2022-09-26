import React from 'react'
import { motion } from "framer-motion"

function DesktopNavbar() {
  return (
    <>
        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0}} className='hidden md:flex'>
            <ul className='flex m-8 text-primary text-sm '>
                <li className='mr-8 hover:border-b-4 hover:border-secondary transition-all'>
                    Home</li>
                <li className='mr-8 hover:border-b-4 hover:border-secondary transition-all'>
                    Skills</li>
                <li className='mr-8 hover:border-b-4 hover:border-secondary transition-all'>
                    Portfolio</li>
                <li className='mr-8 hover:border-b-4 hover:border-secondary transition-all'>
                    About</li>
            </ul>  
        </motion.div>
    </>
  )
}

export default DesktopNavbar