import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion';
import "./portfolio.scss";

const items=[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"",
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"",
    },
    {
        id:3,
        title:"Vanilla JS app",
        img:"https://images.pexels.com/photos/1595437/pexels-photo-1595437.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"",
    },
    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"",
    },
];

const Single=({item})=>{
    return <section>{item.title}</section>;
};

const Portfolio = () => {

    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });


  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>
                Featured Works
            </h1>
            <motion.div style={{ scaleX:scaleX }} className="progressBar">
            </motion.div>

        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio