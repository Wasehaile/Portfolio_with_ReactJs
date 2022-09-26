import React, { useState, useEffect, useRef } from 'react'
import Cards from '../custom/CardsList'
import { motion } from "framer-motion"
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function CardSlider() {
    let count = 0
    // let interval
    const [index, setIndex] = useState(count)
    const sliderRef = useRef()

    const endAnimation = () => {
        sliderRef.current.classList.remove("fade-anim")
        sliderRef.current.classList.remove("fade-anime")
    }
    // const startslide=()=>{
    //     interval=setInterval(()=>{handleNextClick()},8000)
    // }
    // const pauseslide=()=>{clearInterval(interval)}


    useEffect(() => {
        sliderRef.current.addEventListener('animationend', endAnimation)
        // sliderRef.current.addEventListener('mouseenter', pauseslide)
        // sliderRef.current.addEventListener('mouseleave', startslide)
        // startslide();
        // return()=>{pauseslide()}
    },)

   

    const handleNextClick = () => {
        count = (index + 1) % Cards.length
        setIndex(count)
        sliderRef.current.classList.add("fade-anim")
        sliderRef.current.classList.add("fade-anime")
    }
    const handlePrevClick = () => {
        const cardlength = Cards.length
        count = (index + cardlength - 1) % cardlength
        setIndex(count)
        sliderRef.current.classList.add("fade-anim")
        sliderRef.current.classList.add("fade-anime")
    }
    return (
        <div ref={sliderRef}>
            <div className='flex w-full'>
                <div onClick={handlePrevClick} className='md:relative absolute w-52 h-72'>
                <span className='flex absolute md:ml-16 -ml-5 mt-52 text-secondary text-lg font-bold'>
                <IconContext.Provider value={{ style: { width: 40,height:40 } }}>
                    <FaArrowAltCircleLeft/>
                </IconContext.Provider>
                </span>
                    <div className='hidden md:block md:mycards-1 md:h-20 md:opacity-20'>
                    {Cards[(index + Cards.length - 1) % Cards.length]}
                    </div>
                </div>
                <motion.div whileHover={{scale:1.1}} initial={{x:200}} animate={{x:0}} className='flex h-[50%] items-center justify-center mycards'>{Cards[index]}</motion.div>
                <div onClick={handleNextClick}>
                <span className='md:ml-20 -ml-5  absolute mt-52 text-secondary'>
                <IconContext.Provider value={{ style: { width: 40,height:40 } }}>
                <FaArrowAltCircleRight/>
                </IconContext.Provider>
                </span>
                <div className='hidden md:block md:mycards-1 md:opacity-20 md:w-52 '>{Cards[(index + 1) %Cards.length]}</div></div>
            </div>
        </div>
    )
}

export default CardSlider