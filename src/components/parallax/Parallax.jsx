import React, { useRef } from 'react';
import "./parallax.scss";
import { useScroll, motion, useTransform } from 'framer-motion';


const Parallax = ({type}) => {

    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target: ref,
        offset: ["start start","end start"]
    });

    const yText=useTransform(scrollYProgress,[0,1],["0","100%"]);
    const yBg=useTransform(scrollYProgress,[0,1],["-60%","400%"]);

  return (
    <div className='parallax' style={{
        background:type==="services"
        ?"linear-gradient(180deg,#111132,#0c0c1d)"
        :"linear-gradient(180deg,#111132,#5050064)"
        }}>
        <motion.h1 style={{y: yText}}>
            {type==="services"?"What We Do?":"What We Did?"}
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{ y: yBg }} className="planets"></motion.div>
        <motion.div style={{ x : yBg }} className="stars"></motion.div>
    </div>
  )
}

export default Parallax