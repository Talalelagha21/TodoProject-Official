
import React from 'react'

interface SpecificNoteHomeProps {
    project: Project
  }

const SpecificProjectHome: React.FC<SpecificNoteHomeProps> = ({ project }) => {
  return (
    <>
    <div className="h-24 bg-bg-green rounded-lg shadow-md">
      <div className=' relative left-3 top-3 space-y-3 overflow-x-hidden overflow-y-hidden w-[550px] '>
        <div className='flex flex-row'>
          <h3 className=' overflow-y-hidden h-8 font-bold text-lg'>{project.title}</h3>
          
        </div>
       
        <h3 className=' font-normal text-sm overflow-y-hidden h-5'>{project.text}</h3>
        
      </div>
    </div>
  </>
  )
}

export default SpecificProjectHome