'use client'

import { FormEvent, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useModalStore } from '@/store/ModalStore'
import { useBoardStore } from '@/store/BoardStore'
import ProjectTypeRadioGroup from '../ProjectTypeRadioGroup'
import MembersInput from '../MembersInput'

function ProjectModal() {

    const [isOpen, closeModal] = useModalStore((state) => [state.isOpen, state.closeModal])
    const [ addProject, setNewText, newProjectTitle, setNewProjectTitle, newProjectType, newText, numberOfMembers] = useBoardStore((state) => 
    [
        state.addProject,
        state.setNewText, 
        state.newProjectTitle,
        state.setNewProjectTitle, 
        state.newProjectType,
        state.newText,
        state.numberOfMembers,
        
    ])

    const handleSubmit =(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!newProjectTitle) return;
        addProject(newProjectTitle, newProjectType, newText, numberOfMembers )
        closeModal()
        
        
    }

    
    return (
        // Use the `Transition` component at the root level
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                onSubmit={handleSubmit}
                as="form"
                className="relative"
                onClose={closeModal}>
                {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 pb-2">
                                    Add a Project
                                </Dialog.Title>
                               
                                <div>
                                    <input 
                                    type="text" 
                                    value={newProjectTitle} 
                                    onChange={(e) => setNewProjectTitle(e.target.value)} 
                                    placeholder='Enter project name...' 
                                    className='w-full border border-gray-300 rounded-md outline-none p-5' />
                                
                                </div>

                                <div className='mt-4'>
                                    <h3 className='pb-2 font-medium text-base'>Project discription</h3>
                                    <input 
                                    type="text" 
                                    value={newText} 
                                    onChange={(e) => setNewText(e.target.value)} 
                                    placeholder='Enter project description...' 
                                    className='w-full h-40 border border-gray-300 rounded-md outline-none p-5 ' />
                                
                                </div>
                                
                                <ProjectTypeRadioGroup />

                                <MembersInput />
                                <div className='mt-4'>
                                    <button type="submit" disabled={!newProjectTitle} className='inline-flex justify-center rounded-md border border-transparent bg-org px-4 py-2
                                                    text-sm font-medium text-white hover:bg-org/50 focus:outline-none focus-visible:ring-2
                                                    focus-visible:ring-org/80 focus:ring-offset-2 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed'>
                                        Add Project
                                    </button>
                                </div>


                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default ProjectModal