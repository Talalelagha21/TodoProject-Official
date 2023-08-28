"use client"

import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { useBoardStore } from '@/store/BoardStore'

const number = [
  {  number: 1, unavailable: false },
  {  number: 2, unavailable: false },
  {  number: 3, unavailable: false },
  {  number: 4, unavailable: false },
  {  number: 5, unavailable: false },
  {  number: "6+", unavailable: false}
]

function MembersInput() {

  const [numberOfMembers, setNumberOfMemebers] = useBoardStore((state) => [state.numberOfMembers, state.setNumberOfMemebers])

   
  
  return (
    <Listbox value={numberOfMembers} onChange={setNumberOfMemebers}>
      <Listbox.Label className='block'>Number of Members</Listbox.Label>
      <Listbox.Button className="w-[50%] border border-gray-300 rounded-md outline-none p-2 mt-2 text-left">{numberOfMembers}</Listbox.Button>
      <Listbox.Options className="w-[50%] border  rounded-md outline-none p-2 mt-2">
        {number.map((person) => (
          <Listbox.Option
            key={person.number}
            value={person.number}
            disabled={person.unavailable}
            className="hover:bg-sidebar/25 pl-2 rounded-md"
          >
            {person.number}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default MembersInput;