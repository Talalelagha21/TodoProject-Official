"use client"

import React, { useEffect, useState } from 'react'
import Header from '@/src/Header'
import SideBar from '@/src/SideBar'
import ProjectPage from '@/src/Projects/ProjectPage'




const Project = () => {
  
  
  return (
    <main className="h-screen ml-20 bg-light-g  overflow-x-hidden">
      <Header />
      <SideBar />
      <ProjectPage />
    </main>
  )
}

export default Project