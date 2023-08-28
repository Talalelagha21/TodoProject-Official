"use client"


import { useBoardStore } from '@/store/BoardStore';
import React, { useEffect } from 'react'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import Column from '../Column';

const ProjectBoard = () => {
  const [board, getBoard, setBoardState, updateProjectDB] = useBoardStore((state) => [state.board, state.getBoard, state.setBoardState, state.updateProjectDB] )
  
  useEffect(() => {
    getBoard()
  }, [getBoard] )

 
  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type} = result

    //check ig the user dragged the card outside the board
    if (!destination) return;

    //Handle column drag
    if(type==="column") {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);
      setBoardState({
        ...board, columns: rearrangedColumns,
      });

    }

    const columns = Array.from(board.columns);
    const startColIndex = columns[Number(source.droppableId)];
    const finishColIndex = columns[Number(destination.droppableId)];
    console.log(startColIndex)

    const startCol: Column = {
      id: startColIndex[0],
      projects: startColIndex[1].projects
    };

    const finishCol: Column = {
      id: finishColIndex[0],
      projects: finishColIndex[1].projects
    }

    console.log(startCol, finishCol)

    

    if(!startCol || !finishCol) return;

    if(source.index === destination.index && startCol === finishCol) return;

    const newProject = startCol.projects;
    const [projectMoved] = newProject.splice(source.index, 1);

    if (startCol.id === finishCol.id) {
      newProject.splice(destination.index, 0, projectMoved);
      const newCol = {
        id: startCol.id,
        projects: newProject,
      };
      const newColumns = new Map(board.columns);
      newColumns.set(startCol.id, newCol);

      setBoardState({ ...board, columns:newColumns})
    }else{
      const finishProject = Array.from(finishCol.projects);
      finishProject.splice(destination.index, 0, projectMoved);
      const newColumns = new Map(board.columns);
      const newCol = {
        id: startCol.id,
        projects: newProject,
      };

      newColumns.set(startCol.id, newCol)
      newColumns.set(finishCol.id, {
        id: finishCol.id,
        projects: finishProject
      });

      //update DB
      updateProjectDB(projectMoved, finishCol.id)


      setBoardState({ ...board, columns: newColumns})
    }
   
  }
  return (
    
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
          className='grid grid-cols-1 md:grid-cols-3 gap-7 max-w-7xl mx-auto'
          {...provided.droppableProps}
          ref={provided.innerRef}>
            
            {
            //converting the board columns which are currently a map into an array so we can map through it 
            Array.from(board.columns.entries()).map(([id, column], index) =>(
              <Column key={id} id={id} projects={column.projects} index={index}/>
            ))
            }</div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ProjectBoard

/*const columns = Array.from(board.columns);
    const startColIndex = columns[Number(source.droppableId)];
    const finishColIndex = columns[Number(destination.droppableId)];
    
    const startCol: Column = {
      id: startColIndex[0],
      projects: startColIndex[1].projects
    };

    const finishCol: Column = {
      id: finishColIndex[0],
      projects: finishColIndex[1].projects
    };*/