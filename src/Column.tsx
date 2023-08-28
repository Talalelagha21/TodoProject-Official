import { PlusCircleIcon } from 'lucide-react'
import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import SpecificProject from './Projects/SpecificProject'
import { useModalStore } from '@/store/ModalStore'
import { useBoardStore } from '@/store/BoardStore'


type Props = {
    id: TypedColumn,
    projects: Project[],
    index: number
}

const idToColumnText: {
    [key in TypedColumn]: string;
} = {
    todo: "To Do",
    inprogress: "In Progress",
    done: "Done"
}

function Column({ id, projects, index }: Props) {
    const [setNewProjectType] = useBoardStore((state)=> [state.setNewProjectType])
    const openModal = useModalStore((state) => state.openModal)

    const handleAddProject = () => {
        setNewProjectType(id)
        openModal();
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Droppable droppableId={index.toString()} type='card'>
                        {(provided, snapshot) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} className={`p-2 rounded-2xl shadow-xl ${snapshot.isDraggingOver ? "bg-green-200" : "bg-bg-green"}`}>

                                <h2 className='flex justify-between font-bold text-lg'> {idToColumnText[id]}
                                    <span className='text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm'>{projects.length}</span>
                                </h2>

                                <div className="space-y-2">
                                    {projects.map((project, index) => (
                                        <Draggable key={project.$id} draggableId={project.$id} index={index}>
                                            {(provided) => (
                                                <SpecificProject
                                                    project={project}
                                                    index={index}
                                                    id={id}
                                                    innerRef={provided.innerRef}
                                                    draggableProps={provided.draggableProps}
                                                    dragHandleProps={provided.dragHandleProps}
                                                />
                                            )}

                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                    
                                    <div className='flex items-end justify-end p-2'>
                                        <button onClick={handleAddProject} className='text-green-500 hover:text-green-600'>
                                            <PlusCircleIcon className='h-10 w-10'/>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )}
                    </Droppable>
                </div>
            )}

        </Draggable>
    )
}

export default Column