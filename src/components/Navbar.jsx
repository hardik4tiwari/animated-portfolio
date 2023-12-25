import React from 'react'
import "./navbar.scss"
import { motion } from 'framer-motion'
import Sidebar from "./sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0.5,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}>
                Hardik Tiwari
                </motion.span>
            <div className='social'>
                <a href='https://github.com/hardik4tiwari'><img src='/GitHub-Mark-ea2971cee799.png' alt=''/></a>
                <a href='https://www.instagram.com/hardixk_/'><img src='/instagram.png' alt=''/></a>
                <a href='https://www.linkedin.com/in/hardik4tiwari/'><img src='/download.png' alt=''/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar