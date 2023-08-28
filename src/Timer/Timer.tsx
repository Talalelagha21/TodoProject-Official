import React from 'react'
import { BsStopwatch } from 'react-icons/bs'


interface TimerProps {
  milliseconds: number,
  seconds: number,
  minutes: number,
  hours: number,
  changeSeconds: any,
  changeHours: any,
  changeMinutes: any

}



const Timer: React.FC<TimerProps> = ({ milliseconds, seconds, minutes, hours, changeSeconds, changeHours, changeMinutes }) => {
  return (
    <div className='p-8'>
      <div className='w-full ml-auto mr-auto bg-bg-green border-4 rounded-xl flex items-center justify-center p-4 space-x-4 shadow-xl'>
        <div>
          <BsStopwatch size={80} className='text-org'/>
        </div>
        <div className='flex flex-col '>
          <label className=' font-light'>Hours</label>
          <input className='timerInput' value={hours} onChange={changeHours} />
        </div>
        <div className='flex flex-col '>
          <label className=' font-light'>Minutes</label>
          <input className='timerInput' value={minutes} onChange={changeMinutes} />
        </div>
        <div className='flex flex-col '>
          <label className=' font-light'>Seconds</label>
          <input className='timerInput' value={seconds} onChange={changeSeconds} />
        </div>
        <div className='flex flex-col '>
          <label className=' font-light'>Milliseconds</label>
          <input className='timerInput' value={milliseconds} />
        </div>

      </div>
    </div>


  )
}

export default Timer