import React from 'react'
import Header from '@/src/Header'
import SideBar from '@/src/SideBar'
import TaskPage from '@/src/Tasks/TaskPage'



const Task = async () => {
  
  return (
    <main className="h-screen ml-20 bg-light-g  overflow-x-hidden">
      <Header />
      <SideBar />
      <TaskPage />
    </main>
  )
}

export default Task