import React from 'react'

interface SpecificNoteHomeProps {
    note: Notes
  }

const SpecificNoteHome: React.FC<SpecificNoteHomeProps> = ({ note }) => {
  return (
    <>
      <div className="h-24 bg-bg-green rounded-lg shadow-md">
        <div className=' relative left-3 top-3 space-y-3 overflow-x-hidden overflow-y-hidden w-[550px] '>
          <h3 className=' overflow-y-hidden h-8 font-bold text-lg'>{note.title}</h3>
          <h3 className=' font-normal text-sm overflow-y-hidden h-5'>{note.text}</h3>
        </div>
      </div>
    </>
  )
}

export default SpecificNoteHome