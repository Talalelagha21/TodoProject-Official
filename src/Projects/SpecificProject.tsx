
import { useBoardStore } from '@/store/BoardStore';
import { XCircleIcon } from 'lucide-react';
import React from 'react'
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';
import { BiUserCircle } from 'react-icons/bi';

type Props = {
    project: Project;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function SpecificProject({ project, index, id, innerRef, dragHandleProps, draggableProps }: Props) {

    const deleteProject = useBoardStore((state) => state.deleteProject)

    return (
        <div className='bg-white rounded-md space-y-2 drop-shadow-md mt-2' {...draggableProps} {...dragHandleProps} ref={innerRef}>
            <div className='flex justify-between items-center p-5'>
                <h2 className=' text-xl font-bold'>{project.title}</h2>
                <button onClick={() => { deleteProject(index, project, id) }} className='text-red-500 hover:text-red-600 '>
                    <XCircleIcon className='ml-5 h-6 w-6' />
                </button>
            </div>
            <div className='flex items-center p-5'>
                <p>{project.text}</p>
            </div>
            <div className='flex flex-row space-x-3 items-center p-5'>

                {project.members === 1 ? <BiUserCircle size={20} />
                    : project.members === 2 ? <> <BiUserCircle size={20} /> <BiUserCircle size={20} /> </>
                        : project.members === 3 ? <> <BiUserCircle size={20} /> <BiUserCircle size={20} /> <BiUserCircle size={20} /> </>
                            : project.members === 4 ? <> <BiUserCircle size={20} /> <BiUserCircle size={20} /> <BiUserCircle size={20} /> <BiUserCircle size={20} /> </>
                                : project.members === 5 ? <> <BiUserCircle size={20} /> <BiUserCircle size={20} /> <BiUserCircle size={20} /> <BiUserCircle size={20} /> <BiUserCircle size={20} /></>
                                    : <> <BiUserCircle size={20} /> <BiUserCircle size={20} /> <BiUserCircle size={20} /> <BiUserCircle size={20} /> <BiUserCircle size={20} /> <h1>+</h1></>}




            </div>


        </div>
    )
}

export default SpecificProject