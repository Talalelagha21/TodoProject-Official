"use client"

import React, {FormEventHandler, useState} from 'react';
import { HiPencil } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import { useTopCardStore } from '@/store/TopCardStore';
import Modal from '../Modal';

interface TodoListProps {
    task: Task;
    index: number;
  }

const SpecificTask: React.FC<TodoListProps> = ( { task, index }) => {
  const deleteTaskApp = useTopCardStore((state) => state.deleteTaskApp)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [newTasksText, setNewTaskText, newStartTime, setNewStartTime, newEndTime, setNewEndTime, updateTaskApp] = useTopCardStore((state) => [state.newTasksText, state.setNewTaskText, state.newStartTime, state.setNewStartTime, state.newEndTime, state.setNewEndTime, state.updateTaskApp])

  const handleEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    updateTaskApp(task,newTasksText, newStartTime, newEndTime, index )
    setModalOpen(false)
  }
  return (
    <div className="h-36 grid grid-cols-12 gap-2">
        <div className=" bg-white-1 col-span-10 rounded-2xl shadow-lg">
        <div className="relative left-5 top-5">
          <div className="font-bold text-2xl"> {task.text} </div>
          <div className=" font-mono text-lg text-sidebar/60">
            {task.startTime} - {task.endTime}
          </div>
        </div>
      </div>

      <div className=" bg-white-1 rounded-2xl shadow-lg ">
        <button className="relative left-11 top-12">
          <HiPencil cursor='pointer' size={50} className="text-sidebar" onClick={() => setModalOpen(true)}/>
        </button>
        <Modal height={40} setModalOpen={setModalOpen} modalOpen={modalOpen}>
              <form onSubmit={handleEditTask}>
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
      <div className=" bg-white-1 rounded-2xl shadow-lg">
        <button className="relative left-11 top-12">
          <FiTrash2 onClick={() => deleteTaskApp(task.$id, index)} cursor='pointer' size={50} className="text-org"  /> 
        </button>
      </div>

    </div>
  )
}

export default SpecificTask