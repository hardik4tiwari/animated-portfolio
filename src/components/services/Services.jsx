import React, { useRef } from 'react'
import "./services.scss"
import { motion, useInView } from 'framer-motion'

const variants={
    initial:{
        x:-500,
        opacity:0,
        y:100,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
};
const Services = () => {

    const ref=useRef();
    const isInView=useInView(ref,{margin:"-100px"})

return (
    <motion.div className='services' variants={variants} initial='initial' ref={ref} animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow<br />
                and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <motion.div className="title" >
                <img src='/people.webp' alt='' width='200px' />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </motion.div>
            <motion.div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Buisness.
                </h1>
                <button>WHAT WE DO?</button>
            </motion.div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box">
                <h2>Branding</h2>
                <p>
                    Hi my name is hardik tiwari.I am currently pusrsuing
                    B. Tech from IITK.My Intrests lie in Webdevlopment
                    and Data Science.
                </p>
                <button>Go</button>
            </motion.div>
        <motion.div className="box">
            <h2>Branding</h2>
            <p>
                Hi my name is hardik tiwari.I am currently pusrsuing
                B. Tech from IITK.My Intrests lie in Webdevlopment
                and Data Science.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box">
            <h2>Branding</h2>
            <p>
                Hi my name is hardik tiwari.I am currently pusrsuing
                B. Tech from IITK.My Intrests lie in Webdevlopment
                and Data Science.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box">
            <h2>Branding</h2>
            <p>
                Hi my name is hardik tiwari.I am currently pusrsuing
                B. Tech from IITK.My Intrests lie in Webdevlopment
                and Data Science.
            </p>
            <button>Go</button>
        </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services