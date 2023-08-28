import React from 'react'
import Header from '@/src/Header'
import SideBar from '@/src/SideBar'
import NotesPage from '@/src/Notes/NotesPage'





const Notes= async () => {
  
  return (
    <main className="h-screen ml-20 bg-light-g  overflow-x-hidden">
      <Header />
      <SideBar />
      <NotesPage />
    </main>
  )
}

export default Notes

