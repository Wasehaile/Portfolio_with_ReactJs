import React from 'react'
import Cards from '../custom/CardsList'
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {useEffect} from "react"
import Details from '../custom/Details'
import DetailsList from '../custom/DetailsList'

const variant={
  visible: {opacity:1,scale:1,y:0},
  hidden: {opacity:0,scale:0,y:300}
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
    <div className='bg-bgsecondary pb-24'>
        <div className=' flex justify-center items-center md:flex-row flex-col mb-72'>
           <motion.div ref={ref} initial="hidden" variants={variant} animate={control} transition={{delay:0.2,duration:1}} > {Cards[0]}</motion.div>
           <motion.div ref={ref} initial="hidden" variants={variant} animate={control} transition={{delay:0.5,duration:1}} > {Cards[1]}</motion.div>
           <motion.div ref={ref} initial="hidden" variants={variant} animate={control} transition={{delay:0.8,duration:1}} > {Cards[2]}</motion.div>
        </div>
       {DetailsList[0]}
       {DetailsList[1]}
       {DetailsList[2]}
    </div>
  )
}

export default Skills