"use client"

import React, { FormEventHandler, useState } from 'react';
import { HiPencil } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import { useTopCardStore } from '@/store/TopCardStore';
import Modal from '../Modal';


interface SpecificNoteProps {
    note: Notes;
    index: number;
}

const SpecificNote: React.FC<SpecificNoteProps> = ({ note, index }) => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const deleteNoteApp = useTopCardStore((state) => state.deleteNoteApp)
    const [newNotesTitle, setNewNoteTitle, newNotesText, setNewNoteText, updateNoteApp] = useTopCardStore((state) => [state.newNotesTitle, state.setNewNoteTitle, state.newNotesText, state.setNewNoteText, state.updateNoteApp])
 
    const handleSubmitNote: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      updateNoteApp(note, newNotesTitle, newNotesText, index)
      setOpenModal(false)
  }
    

    return (
        <div className="block min-h-[300px]  max-h-[300px] ma p-6 bg-white-1 border border-bg-green rounded-lg shadow-lg overflow-scroll overflow-x-hidden 
        scrollbar-track-white-1 scrollbar-thumb-org scrollbar-thin ">
            <div className="flex justify-between">
                <h5 className="mb-2  text-lg font-bold tracking-tight ">
                    {note.title}
                </h5>
                <div className=" space-x-3 ">
                    <button>
                        <HiPencil size={20} cursor="pointer" className="text-sidebar" onClick={() => setOpenModal(true)}/>
                    </button>
                    <Modal height={40} setModalOpen={setOpenModal} modalOpen={openModal}>
                        <form onSubmit={handleSubmitNote}>
                            <div className="grid gap-6 mb-6 md:grid-cols-2 gap-y-5">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Note Title
                                    </label>
                                    <input
                                        value={newNotesTitle}
                                        
                                        onChange={(e) => setNewNoteTitle(e.target.value)}
                                        type="text"
                                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-org focus:border-org block w-full p-2.5"
                                        placeholder="Type Here..."
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Note
                                    </label>

                                    
                                    <textarea
                                        value={newNotesText}
                                        rows={4}
                                        onChange={(e) => setNewNoteText(e.target.value)}
                                        className="block w-full p-4 resize-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-org focus:border-org  "
                                        placeholder="Type Here..."
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-sidebar hover:bg-sidebar/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                            >
                                Submit
                            </button>
                        </form>
                    </Modal>
                    <button>
                        <FiTrash2
                            size={20}
                            cursor="pointer"
                            className="text-sidebar"
                            onClick={() => deleteNoteApp(note.$id, index)}

                        />
                    </button>
                </div>
            </div>
            <p className="font-normal text-gray-700 ">{note.text}</p>
        </div>
    )
}

export default SpecificNote