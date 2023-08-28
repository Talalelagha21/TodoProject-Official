"use client"
import React, { FormEventHandler, useState } from 'react'
import Modal from "../Modal";
import { useTopCardStore } from '@/store/TopCardStore';

const AddTasks = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [newTasksText, setNewTaskText, newStartTime, setNewStartTime, newEndTime, setNewEndTime, addTaskApp] = useTopCardStore((state) => [state.newTasksText, state.setNewTaskText, state.newStartTime, state.setNewStartTime, state.newEndTime, state.setNewEndTime, state.addTaskApp])

  const handleSubmitTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    addTaskApp(newTasksText, newStartTime, newEndTime);
    setModalOpen(false)
  }

  return (
    <div >
              <button onClick={() => setModalOpen(true)} className='mt-5 ml-5 w-32 p-1 bg-light-g text-sidebar rounded-3xl font-bold shadow-lg'> Add Task </button>
              
              <Modal height={40} setModalOpen={setModalOpen} modalOpen={modalOpen}>
              <form onSubmit={handleSubmitTask}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 gap-y-20">
                        <div className='col-span-2'>
                            <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task</label>
                            <input value={newTasksText} onChange={e => setNewTaskText(e.target.value)} type="text" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-org focus:border-org " placeholder="Type Here..." required />
                        </div>
        
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Time</label>
                            <input value={newStartTime}  onChange={e => setNewStartTime(e.target.value)} type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-org focus:border-org block w-full p-2.5" placeholder="00:00" />
                        </div>  
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Time</label>
                            <input value={newEndTime} onChange={e => setNewEndTime(e.target.value)}  type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-org focus:border-org block w-full p-2.5" placeholder="00:00"  />
                        </div>  
       
                    </div>
                    <button type="submit" className="text-white bg-sidebar hover:bg-sidebar/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                </form>
              </Modal>
            </div>
    
  )
}

export default AddTasks