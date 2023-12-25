import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
};

const sliderVariants={
    initial:{
        x:-500,
    },
    animate:{
        x:'-250%',
        transition:{
            repeatType:'mirror',
            duration:20,
            repeat:Infinity,
        },
    },
}
const hero = () => {
  return (
    <div className='hero'>
        <div className='wrapper'>
            <motion.div className='textContainer' variants={textVariants} initial='initial'
            animate='animate'>
                <motion.h2 variants={textVariants}>
                    HARDIK TIWARI
                </motion.h2>
                <motion.h1 variants={textVariants}>
                    Web developer and Programmer
                </motion.h1>
                <motion.div className='buttons' variants={textVariants}>
                    <button variants={textVariants}>See the Latest Works</button>
                    <button variants={textVariants}>Contact Me</button>
                </motion.div>
                <motion.img variants={textVariants} animate='scrollButton' src='/scroll.png' alt=''/>
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
            Student at IITK
        </motion.div>
        <div className='imageContainer'>
            <img src='/hardik2.webp' alt=''/>
        </div>
    </div>
  )
}

export default hero