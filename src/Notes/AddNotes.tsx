"use client";

import React, { FormEventHandler, useState } from "react";
import Modal from "../Modal";

import { useTopCardStore } from "@/store/TopCardStore";

const AddNotes = () => {
  

  //const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [newNotesTitle, setNewNoteTitle, newNotesText, setNewNoteText, addNoteApp] = useTopCardStore((state) => [state.newNotesTitle, state.setNewNoteTitle, state.newNotesText, state.setNewNoteText, state.addNoteApp])
 
  const handleSubmitNote: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    addNoteApp(newNotesTitle, newNotesText)
    setOpenModal(false)
}
  

 

  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="mt-5 ml-5 w-32 p-1 bg-light-g text-sidebar rounded-3xl font-bold shadow-lg">
        {" "}
        Add Note{" "}
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
      

      
    </div>
  );
};

export default AddNotes;