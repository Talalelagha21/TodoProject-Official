
import TheCalendar from '@/src/Calender/TheCalendar'
import Header from '@/src/Header'
import SideBar from '@/src/SideBar'
import React from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css"


const CalenderPage = async () => {

  return (
    <main className="h-screen ml-20 bg-light-g  overflow-x-hidden">
      <Header />
      <SideBar />
     <TheCalendar />
    </main>
  )
}

export default CalenderPage