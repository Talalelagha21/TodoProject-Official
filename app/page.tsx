import Header from '@/src/Header'
import SideBar from '@/src/SideBar'
import TopCards from '@/src/TopCards'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="h-screen ml-20 bg-light-g  overflow-x-hidden overflow-y-hidden">
      <Header />
      <SideBar />
      <TopCards />
    </main>
  )
}
