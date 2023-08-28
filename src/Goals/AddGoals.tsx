"use client"

import React, { FormEventHandler, useState } from 'react'
import Modal from '../Modal'
import { GrAddCircle } from 'react-icons/gr';
import { useTopCardStore } from '@/store/TopCardStore';

const AddGoals = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [newActivity, setNewActivity, newCategory, setNewCategory, newFrequency, setNewFrequency, newDay, setNewDay, newProgress, setNewProgress, addGoalsApp ] = useTopCardStore((state) => [state.newActivity, state.setNewActivity, state.newCategory, state.setNewCategory, state.newFrequency, state.setNewFrequency, state.newDay, state.setNewDay, state.newProgress, state.setNewProgress, state.addGoalsApp]);

  const handleSubmitGoal: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    addGoalsApp(newActivity, newCategory, newFrequency, newDay, newProgress)
    setOpenModal(false)
  }


  return (
    <div className="flex justify-between w-full h-[3vh] m-4 mt-6">
      <h3 className="font-bold ml-2">My Goals</h3>
      <button onClick={() => setOpenModal(true)}><GrAddCircle size={20} className="relative right-9 " cursor="pointer" /></button>
      <Modal height={50} setModalOpen={setOpenModal} modalOpen={openModal}>
                <form onSubmit={handleSubmitGoal}>
                    <div className='space-y-5'>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                            <select onChange={(e) => setNewCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option disabled selected>Choose a Categegory</option>
                                <option value="Reading">Reading</option>
                                <option value="Learning">Learning</option>
                                <option value="Physical">Physical Activity</option>
                                <option value="Self">Self Help</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Activity</label>
                            <input value={newActivity} onChange={e => setNewActivity(e.target.value)} type="text" className="block w-full h-[42px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-org focus:border-org " placeholder="Type Here..." required />
                        </div>

                        <div >
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Time Frame</label>
                           <div className='flex flex-row space-x-3'> 
                            <input value={newFrequency} onChange={e => setNewFrequency(e.target.value)} type="text" className="block w-[25%] h-[40px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-org focus:border-org " placeholder="Type Here" required />
                            <h3 className='mt-2.5 text-sm font-medium text-gray-900'>Times a </h3>
                            <select onChange={(e) => setNewDay(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[25%] p-2.5" required>
                                <option disabled selected>Choose a Category</option>
                                <option value="Hour">Hour</option>
                                <option value="Day">Day</option>
                                <option value="Week">Week</option>
                                <option value="Month">Month</option>
                                <option value="Year">Year</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Progress</label>
                            <input type="number" min="10" max="100" onChange={e => setNewProgress(parseInt(e.target.value))} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5'/>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button
                            type="submit"
                            className="text-white bg-sidebar hover:bg-sidebar/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </Modal>
    </div>
  )
}

export default AddGoals