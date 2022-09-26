import React from 'react'
import { AnimatePresence,motion } from "framer-motion"
import { FaArrowLeft } from 'react-icons/fa';
function ContactForm(
    {
        isVisible,
        onCancel,
        ref
    }
) {
  return isVisible? (
    
    <motion.div  ref={ref} className=' fixed flex items-center justify-center top-0 left-0 w-full h-screen bg-bgtransparent'>
        <AnimatePresence>
        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.3}} exit={{opacity:0,scale:0}} className='rounded-xl bg-white p-5 w-1/2 h-1/2'>
            <motion.button onClick={()=>onCancel(false)}><FaArrowLeft/></motion.button>
        </motion.div>
        </AnimatePresence>
    </motion.div>
  
  ):''
}

export default ContactForm