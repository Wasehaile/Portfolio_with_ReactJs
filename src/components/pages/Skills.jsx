import React from 'react'
import CardSlider from '../custom/CardSlider'
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {useEffect} from "react"

const variant={
  visible: {opacity:1,scale:1,y:0},
  hidden: {opacity:0,scale:0,y:200}
}

function Skills() {
  const control=useAnimation()
  const [ref,InView]=useInView()
  useEffect(() => {
    if(InView)
    {
      control.start("visible")
    }
  }, [control,InView])
  return (
    <div className='h-full bg-bg_darkprimary pt-8 pb-24'>
        <div className='flex justify-center items-center flex-col'>
            <motion.h1 ref={ref} initial="hidden" animate={control} variants={variant} transition={{delay:0}} className=' text-3xl text-center text-darksecondary'>Skills</motion.h1>
            <motion.div ref={ref} initial="hidden" animate={control} variants={variant} transition={{delay:0.2}} className='my-5 bg-secondary w-16 h-1'/>
            <motion.p ref={ref} initial="hidden" animate={control} variants={variant} transition={{delay:0.3}} className='md:w-1/2 md:text-xl md:mx-0 mx-5 text-sm text-center text-darksecondary '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas omnis voluptates et, placeat facilis dolorem doloremque reprehenderit earum, qui impedit possimus molestiae perferendis debitis explicabo quia molestias? Voluptates, repellat?</motion.p>
            <motion.div ref={ref} initial="hidden" animate={control} variants={variant} transition={{delay:0.4}} className='flex items-center justify-center w-full'>
            <CardSlider/>
            </motion.div>
        </div>
       
    </div>
  )
}

export default Skills