"use client"

import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaRunning } from 'react-icons/fa'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { LuBrain } from 'react-icons/lu'
import { MdSelfImprovement } from 'react-icons/md'

interface SpecificGoalHomeProps {
    goal: Goal
}

const SpecificGoalHome: React.FC<SpecificGoalHomeProps> = ({ goal }) => {
  return (
    <>
            <div className="h-24 bg-bg-green rounded-lg shadow-md">
                <div className=' flex flex-row space-y-3 overflow-x-hidden overflow-y-hidden w-[550px] '>
                    <div className=' w-[20%] h-full' >
                        {goal.category === "Reading" ? <HiOutlineBookOpen size={85} className='ml-5 mt-2' />
                            : goal.category === "Learning" ? <LuBrain size={75} className='ml-5 mt-3' />
                                : goal.category === "Physical" ? <FaRunning size={70} className='ml-5 mt-4' />
                                    : goal.category === "Self" ? <MdSelfImprovement size={90} className='ml-5 mt-1' />
                                        : <BsThreeDots size={80} className='ml-5 mt-2' />}
                    </div>
                    <div className='w-[80%] h-full ml-2 pt-2'>
                        <div className='block'>
                            <h1 className='font-bold text-xl w-full  '>{goal.activity}</h1>
                            <h3 className='font-mono text-lg'>{goal.frequency} Times a {goal.days}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default SpecificGoalHome