import React from 'react'
import Cards from '../components/custom/CardsList'
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {useEffect} from "react"
// import Details from '../components/custom/Details'
// import DetailsList from '../components/custom/DetailsList'

const variant={
  visible: {opacity:1,x:0},
  hidden: {opacity:0,x:-400}
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
    <div ref={ref} className='bg-hero-pattern bg-cover bg-no-repeat bg-fixed bg-opacity-5 p-5'>
      <h1 className='md:text-4xl md:text-start text-center text-primary text-xl'>Skills</h1>
      <div className='my-5 bg-secondary w-24 h-1'/>
        <div className=' flex justify-center items-center md:flex-row flex-col'>
           <motion.div ref={ref} initial="hidden" variants={variant} animate={control} transition={{delay:0.2,duration:1}} > {Cards[0]}</motion.div>
           <motion.div ref={ref} initial="hidden" variants={variant} animate={control} transition={{delay:0.5,duration:1}} > {Cards[1]}</motion.div>
           <motion.div ref={ref} initial="hidden" variants={variant} animate={control} transition={{delay:0.8,duration:1}} > {Cards[2]}</motion.div>
        </div>
       {/* {DetailsList[0]}
       {DetailsList[1]}
       {DetailsList[2]} */}
    </div>
  )
}

export default Skills