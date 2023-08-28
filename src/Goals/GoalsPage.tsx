"use client"
import React, { useEffect} from 'react'
import { AiOutlineSmile } from "react-icons/ai"
import AddGoals from './AddGoals'
import QuoteDiv from './QuoteDiv';
import CountdownTimer from '../Timer/CountdownTimer';
import { useTopCardStore } from '@/store/TopCardStore';
import SpecificGoal from './SpecificGoal';


interface GoalsPageProps {
 
  quotes: Quotes[];

}

const GoalsPage: React.FC<GoalsPageProps> = ({ quotes }) => {
  const [goal, getGoals] = useTopCardStore((state) =>[state.goal, state.getGoals,])

  useEffect(()=> {
    getGoals()  
  }, [getGoals])

  return (
    <div className="bg-bg-green rounded-3xl ml-5 mt-5 h-[300%] w-[98%] lg:h-[90%] gap-4 grid grid-cols-1 lg:grid-cols-3  p-4 grid-flow-row-dense">
      <div className="bg-white-1 col-span-2 rounded-3xl block shadow-lg ">
        <AddGoals />
        <div className="  h-[78vh] grid grid-cols-1 lg:grid-cols-2 p-3 gap-3 grid-flow-row-dense overflow-scroll overflow-x-hidden  scrollbar-track-bg-white-1 scrollbar-thumb-sidebar/10 scrollbar-thin" >
        {goal.map((goal, index) => ( 
              <SpecificGoal  goal = {goal} index={index}/>
            ))}
        </div>
      </div>

      <div className="space-y-4 block">
        <div className=" h-[30%] rounded-3xl space-y-2 ">
          <QuoteDiv quotes={quotes} />
        </div>
        <div className="bg-white-1 h-[35%] rounded-3xl  shadow-lg">
          <CountdownTimer />
        </div>
        <div className="bg-white-1 h-[31%] rounded-3xl  shadow-lg">
          <div className="flex align-middle justify-center">
            <AiOutlineSmile size={150} className="mt-12 text-org"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoalsPage 