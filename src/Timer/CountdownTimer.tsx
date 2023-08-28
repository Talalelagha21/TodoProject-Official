import React, {useState, useEffect} from 'react'
import Timer from './Timer'
import { BsFillPlayFill, BsPauseFill, BsStopFill } from 'react-icons/bs'



const CountdownTimer = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(()=> {
        let interval:any;
        if(isRunning) {
            interval = setInterval(()=> {
                if (milliseconds > 0 ){
                    setMilliseconds((milliseconds) =>milliseconds - 1)
                } else if(seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                    setMilliseconds(99);
                } else if(minutes > 0) {
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                    setMilliseconds(99);
                } else if(hours > 0 ){
                    setHours((hours)=> hours-1);
                    setMinutes(59);
                    setSeconds(59);
                    setMilliseconds(99)
                }
            }, 10);
        }
        if(hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 1) {
            resetTimer()
        }
        return () => clearInterval(interval)
    }, [milliseconds, seconds, minutes, hours, isRunning])

    //Dealing with Timer
    function startTimer(){
        if(hours !==0 || minutes!== 0 || seconds !== 0 || milliseconds !== 0) {
            setIsRunning(true)
        }
    }

    function pauseTimer() {
        setIsRunning(false)
    }

    function resetTimer() {
        setIsRunning(false);
        setMilliseconds(0)
        setSeconds(0)
        setMinutes(0)
        setHours(0)
    }
    //Handlers
    const changeSeconds =(e:any) => {
        setSeconds(e.target.value)
    }
    const changeMinutes =(e:any) => {
        setMinutes(e.target.value)
    }
    const changeHours =(e:any) => {
        setHours(e.target.value)
    }

  return (
    <div>
        <Timer milliseconds={milliseconds} seconds={seconds} minutes={minutes} hours={hours} changeHours={changeHours} changeSeconds={changeSeconds} changeMinutes={changeMinutes} />
        <div className=' space-x-5 flex flex-row align-middle justify-center '>
        {!isRunning && 
            <button className='btn btn-accept btn-md bg-org' onClick={startTimer}>
                <BsFillPlayFill />
            </button>}
            {isRunning && 
            <button className='btn btn-warning btn-md ' onClick={pauseTimer}>
                <BsPauseFill />
            </button>}
            <button className='btn btn-danger btn-md bg-org' onClick={resetTimer}>
                <BsStopFill />
            </button>
        </div>
    </div>
  )
}

export default CountdownTimer