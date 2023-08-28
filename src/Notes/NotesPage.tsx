"use client"

import React, { useEffect } from 'react'
import AddNotes from './AddNotes'
import { useTopCardStore } from '@/store/TopCardStore'
import SpecificNote from './SpecificNote'

const NotesPage = () => {
    const [note, getNotes] = useTopCardStore((state) => [state.note, state.getNotes])

    useEffect(() => {
        getNotes()
    }, [getNotes])
    return (
        <div className='bg-bg-green rounded-3xl ml-5 mt-5 w-[98%] h-[90%] flex flex-col gap-4'>
            <AddNotes />
            <div className='h-[100%] p-5 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-2 gap-y-2 grid-flow-dense overflow-scroll overflow-x-hidden  scrollbar-track-bg-green scrollbar-thumb-org scrollbar-thin'>
                {note.map((note, index) => (

                    <SpecificNote note={note} index={index} />
                ))}
            </div>
        </div>
    )
}

export default NotesPage