"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { RiTaskFill } from "react-icons/ri";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi"
import { FaStickyNote } from 'react-icons/fa'
import { motion } from 'framer-motion';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col bg-sidebar rounded-r-2xl shadow-2xl">
    <motion.div initial={{
        y: -20,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{once: true}}
      >
      <Image src="/TO.svg" width={200} height={200} alt="logo" />
    </motion.div>

    <motion.div
      initial={{
        y: 10,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{once: true}}
      className="sideBarIcon"
    >
      <Link href="/"><AiFillHome className="specficIcon" size={38} /></Link>
      <Link href="/Task"><RiTaskFill className="specficIcon" size={38} /></Link>
      <Link href="/Project"><AiFillProject className="specficIcon" size={38} /></Link>
      <Link href='/Notes'><FaStickyNote className="specficIcon" size={38} /></Link>
      <Link href="/CalenderPage"><BsFillCalendarEventFill className="specficIcon" size={38} /></Link>
      <Link href="/Goals"><BiTargetLock className="specficIcon" size={38} /></Link>
      
      
      
      
    </motion.div>
  </div>
  )
}

export default SideBar