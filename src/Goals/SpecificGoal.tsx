"use client"
import React, { FormEventHandler, useState } from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi'
import { LuBrain } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";
import { MdSelfImprovement } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import Modal from '../Modal';
import { useTopCardStore } from '@/store/TopCardStore';
import { AiOutlineClose } from 'react-icons/ai';

interface SpecificGoalProps {
    goal: Goal;
    index: number

}


const SpecificGoal: React.FC<SpecificGoalProps> = ({ goal, index }) => {
    const deleteGoalApp = useTopCardStore((state) => state.deleteGoalApp)
    const [openModal, setOpenModal] = useState<boolean>(false);
 
  const [newActivity, setNewActivity, newCategory, setNewCategory, newFrequency, setNewFrequency, newDay, setNewDay, newProgress, setNewProgress, updateGoalsApp ] = useTopCardStore((state) => [state.newActivity, state.setNewActivity, state.newCategory, state.setNewCategory, state.newFrequency, state.setNewFrequency, state.newDay, state.setNewDay, state.newProgress, state.setNewProgress, state.updateGoalApp]);

  const handleEditGoal: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    updateGoalsApp(goal, newActivity, newCategory, newFrequency, newDay, newProgress, index)
    setOpenModal(false)
  }

  

    return (
        <div className=" bg-bg-green/50 shadow-lg rounded-lg h-[180px] block " >
            <div className=' w-full h-[85%] flex flex-row'>
                <div className=' w-[20%] h-full' >
                    {goal.category === "Reading" ? <HiOutlineBookOpen size={85} className='ml-5 mt-2' />
                        : goal.category === "Learning" ? <LuBrain size={85} className='ml-5 mt-2' />
                            : goal.category === "Physical" ? <FaRunning size={80} className='ml-5 mt-6' />
                                : goal.category === "Self" ? <MdSelfImprovement size={90} className='ml-5 mt-2' />
                                    : <BsThreeDots size={80} className='ml-5 mt-6' />}
                </div>
                <div className=' w-[60%] h-full block space-y-2 pt-3 overflow-scroll overflow-x-hidden  scrollbar-track-bg-white-1 scrollbar-thumb-sidebar/10 scrollbar-thin ' >
                    <h1 className='font-bold text-xl w-full  '>{goal.activity}</h1>
                    <h3 className='font-mono text-lg'>{goal.frequency} Time a {goal.days}</h3>
                    <h3 className='font-mono text-lg'>{goal.progress} Percent Completed</h3>
                </div>

                <div className='w-[20%] h-full flex flex-row mr-3 space-x-2'>
                    <button onClick={() => setOpenModal(true)} className="mt-[52px] ml-2 w-24 h-8 p-1 bg-light-g text-black rounded-2xl font-bold shadow-lg " >Edit</button>
                    <Modal height={50} setModalOpen={setOpenModal} modalOpen={openModal}>
                <form onSubmit={handleEditGoal}>
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
                    <button className='mb-4' >
                        <AiOutlineClose
                            size={15}
                            cursor="pointer"
                            onClick={() => deleteGoalApp(goal.$id, index)}
 
                        />
                    </button>
                </div>
            </div>
            <div className='pt-1'>
                <div className="w-full bg-gray-200  h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${goal.progress}%` }}></div>
                </div>
            </div>
        </div>
    )
}

export default SpecificGoal
