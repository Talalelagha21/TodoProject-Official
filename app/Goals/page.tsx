import React from 'react'
import Header from '@/src/Header'
import SideBar from '@/src/SideBar'
import GoalsPage from '@/src/Goals/GoalsPage'

import { getQuotes } from '@/lib/getQuotes'

const Goals = async () => {
  
  const quotes = await getQuotes();
  
  
  return (
    <main className="h-screen ml-20 bg-light-g  overflow-x-hidden">
      <Header />
      <SideBar />
      <GoalsPage quotes={quotes}/>
    </main>
  )
}

export default Goals