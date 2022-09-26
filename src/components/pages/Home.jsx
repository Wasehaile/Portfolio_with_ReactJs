import { useRef } from 'react';
import { useState } from 'react';
import Me from '../../assets/Me.png'
import ContactForm from '../custom/ContactForm';
import { motion,AnimatePresence } from "framer-motion"
import { FaArrowDown } from 'react-icons/fa';
import DownloadPDF from '../CustomHook/DownloadCV';


const Home = () => {
  const [Visible,setVisible]=useState(false);
  const popref=useRef()
  
  const handlevisible=()=>{
   setVisible(true)
   popref.current.classList.add("pop-anim")
  }
    return ( 
        <div ref={popref} className='relative h-full pb-52 bg-bgprimary'>
        <div className='flex  flex-wrap '>
           <div className='md:mt-10 flex-1 flex items-center justify-center '>
            <motion.span initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3}} className='md:w-96 md:h-96 md:rounded-[150px] absolute border-secondary border-8 rounded-[100px] w-60 h-60 animate-spin-slow'/>
             <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0}} className='md:w-80 md:h-80 w-48 h-48 relative bg-primary rounded-full flex items-center justify-center'/>
               <motion.img whileHover={{scale:1.1}} initial={{scale:0}} animate={{scale:1}} transition={{delay:0.2}} className='md:w-96 absolute rounded-b-full w-52 -mt-8' src={Me} alt="" />
           </div>
           <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.4}} className='md:items-start md:text-start md:text-md md:mt-20 flex flex-col items-center text-center flex-1 mt-10'>
            <h1 className='md:text-4xl text-primary text-xl'>Hi!<br/><p className='text-secondary'>My name is Wasyhun H/melekot</p>Welcome to my personal Webpage</h1>
            <div className='my-5 bg-secondary w-24 h-1'/>
            <p className='md:text-xl md:w-2/3 text-sm w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure dicta ducimus in maiores soluta recusandae, laborum ut! Error omnis modi ullam ab consectetur vel earum culpa libero veritatis. Illo?</p>
           <div className='md:flex-row flex flex-col'>
           <button onClick={handlevisible} className='md:mx-0 mt-8 px-9 py-2 mx-8 text-white bg-secondary rounded-full hover:bg-bgsecondary hover:text-primary transition-all'>Contact Me</button>
           <button onClick={()=>{DownloadPDF()}} className='md:ml-7 md:mx-0 flex items-center mx-8 mt-8 px-9 py-2 text-primary border-2 border-primary rounded-full hover:bg-button_secondary hover:text-primary transition-all'><p className='mr-3'>Download My Resume</p><FaArrowDown className='animate-bounce'/></button>
           </div>
        <AnimatePresence><ContactForm isVisible={Visible} onCancel={setVisible}/></AnimatePresence>
           </motion.div>
        </div>
        </div>
     );
}
 
export default Home;