"use client"

import React, { useEffect } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import Link from "next/link";
import { useTopCardStore } from "@/store/TopCardStore";
import SpecificTaskHome from "./Tasks/SpecificTaskHome";
import SpecificProjectHome from "./Projects/SpecificProjectHome";
import SpecificGoalHome from "./Goals/SpecificGoalHome";
import SpecificNoteHome from "./Notes/SpecificNoteHome";
import HomeCalender from "./Calender/HomeCalender";
import DateTime from "./DateTime";
import SketchPad from "./SketchPad";


const TopCards = () => {
  const [project, getProjects, note, getNotes, goal, getGoals, task, getTasks] = useTopCardStore((state) => [state.project, state.getProjects, state.note, state.getNotes, state.goal, state.getGoals, state.task, state.getTasks]);

  useEffect(() => {
    getProjects()
    getNotes()
    getGoals()
    getTasks()
  }, [getProjects, getNotes, getGoals, getTasks])

  return (
    <div className="grid lg:grid-cols-6  gap-4 p-4 grid-flow-row-dense  ">
      <div className=" col-span-2  min-h-[90vh]   grid grid-cols-1 gap-4">

        <div className="bg-white-1 block rounded-3xl h-[420px] max-h-[420px] shadow-lg">
          <div className="flex justify-between w-full h-[3vh] m-4 mt-6">
            <div className="font-bold ml-2">Task</div>
            <Link href="/Task" className="font-bold mr-10 text-sidebar flex ">
              All <RiArrowDropRightLine size={25} className="" />{" "}
            </Link>
          </div>
          <div className=" h-[340px] space-y-2 overflow-scroll overflow-x-hidden  scrollbar-track-bg-white-1 scrollbar-thumb-sidebar/10 scrollbar-thin pl-2 pr-2">
            {task.map(task => (
              <SpecificTaskHome task={task} />
            ))}
          </div>
        </div>

        <div className="bg-white-1 block rounded-3xl h-[420px] max-h-[420px] shadow-lg">
          <div className="flex justify-between w-full h-[3vh] m-4 mt-6">
            <div className="font-bold ml-2">Projects</div>
            <Link href="/Projectt" className="font-bold mr-10 text-sidebar flex ">
              All <RiArrowDropRightLine size={25} className="" />{" "}
            </Link>
          </div>
          <div className=" h-[340px] space-y-2 overflow-scroll overflow-x-hidden  scrollbar-track-bg-white-1 scrollbar-thumb-sidebar/10 scrollbar-thin pl-2 pr-2">
            {project.map(proj => (
              <SpecificProjectHome project={proj} />
            ))}
          </div>
        </div>

      </div>

      <div className="col-span-2  min-h-[90vh]   grid grid-cols-1 gap-4">

        <div className="bg-white-1  row-span-1 block rounded-3xl h-[280px] max-h-[280px] shadow-lg">
          <div className="flex justify-between w-full h-[3vh] m-4 mt-6">
            <div className="font-bold ml-2">Goals</div>
            <Link href="/Goals" className="font-bold mr-10 text-sidebar flex ">
              All <RiArrowDropRightLine size={25} className="" />{" "}
            </Link>
          </div>
          <div className="  h-[200px] space-y-2 overflow-scroll overflow-x-hidden  scrollbar-track-bg-white-1 scrollbar-thumb-sidebar/10 scrollbar-thin pl-2 pr-2">
            {goal.map(goal => (
              <SpecificGoalHome goal={goal} />
            ))}

          </div>
        </div>

        <div className="bg-white-1 row-span-2 block rounded-3xl h-[560px] max-h-[560px] shadow-lg">
          <div className="flex justify-between w-full h-[3vh] m-4 mt-6">
            <div className="font-bold ml-2">Notes</div>
            <Link href="/Notes" className="font-bold mr-10 text-sidebar flex ">
              All <RiArrowDropRightLine size={25} className="" />{" "}
            </Link>
          </div>
          <div className="  h-[475px] space-y-2 overflow-scroll overflow-x-hidden  scrollbar-track-bg-white-1 scrollbar-thumb-sidebar/10 scrollbar-thin pl-2 pr-2">
            {note.map(note => (
              <SpecificNoteHome note={note} />
            ))}
          </div>
        </div>

      </div>

      <div className="col-span-2  min-h-[90vh]   grid grid-cols-1 gap-4 ">

        <div className="rounded-3xl row-span-1 flex-row">
          <div className="ml-40 mt-20">
            <div className="p-6 h-[3vh] w-72">
              <div className="mb-8">
                <DateTime />
              </div>
            </div>
            <div className=" w-72 h-[307px]">
              <HomeCalender />
            </div>
          </div>
        </div>

        <div className="bg-white-1 row-span-2 block rounded-3xl shadow-lg">
          <div className="flex justify-between w-full h-[3vh] m-4">
            <div className="font-bold ml-2">Sketch Pad </div> 
          </div>
          <div>
            <SketchPad />
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default TopCards