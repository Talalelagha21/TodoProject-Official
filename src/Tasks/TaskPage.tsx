"use client"

import React, { useEffect } from 'react'
import AddTasks from './AddTasks'
import { useTopCardStore } from '@/store/TopCardStore'
import SpecificTask from './SpecificTask'

const TaskPage = () => {
  const [task, getTasks] = useTopCardStore((state) =>[state.task, state.getTasks])

  useEffect(()=> {
    getTasks()  
  }, [getTasks])

  return (
    <div className='bg-bg-green rounded-3xl ml-5 mt-5 w-[98%] h-[90%] flex flex-col gap-4'>
        <AddTasks />
        <div className='h-[100%] p-5 mt-5 block space-y-4 overflow-scroll overflow-x-hidden  scrollbar-track-bg-green scrollbar-thumb-org scrollbar-thin'>
            {task.map((task, index) => ( 
              <SpecificTask task = {task} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default TaskPage