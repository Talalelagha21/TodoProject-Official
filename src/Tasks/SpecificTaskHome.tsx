import React from 'react'

interface SpecificTaskHomeProps {
    task: Task
  }

const SpecificTaskHome: React.FC<SpecificTaskHomeProps> = ( { task }) => {
  return (
    <>
      <div className="h-24 bg-bg-green rounded-lg shadow-md">
        <div className=' relative left-3 top-3 space-y-3 overflow-x-hidden overflow-y-hidden w-[550px] '>
          <h3 className=' overflow-y-hidden h-8 font-bold text-lg'>{task.text}</h3>
          <h3 className='font-mono text-sm'>{task.startTime} - {task.endTime}</h3>
        </div>
      </div>
    </>
  )
}
 
export default SpecificTaskHome