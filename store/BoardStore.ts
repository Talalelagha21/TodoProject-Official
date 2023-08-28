import { ID, databases } from '@/appwrite';
import { getTodosGroupedByColumn } from '@/lib/getTodosGroupedByColumn';
import { create } from 'zustand'


interface BoardState {
    board: Board;
    
    getBoard: () => void;
    setBoardState: (board: Board) => void;
    updateProjectDB: (project: Project, columnId: TypedColumn) => void;

    updateNotesDB: (note: Notes) => void;

    
    //PROJECT
    addProject: (project:string, columnId: TypedColumn, text: string, members: number) => void;
    deleteProject: (projectIndex: number, projectId: Project, id: TypedColumn) => void;
    
    newProjectType: TypedColumn;
    setNewProjectType: (columnId: TypedColumn) => void;

    newText: string,
    setNewText: (input: string) => void;

    newProjectTitle: string,
    setNewProjectTitle: (input: string) => void;

    numberOfMembers: number;
    setNumberOfMemebers: (input: number) => void;

   
    

    //TASKS

    newTasksText: string,
    setNewTaskText: (input: string) => void;

    newStartTime: string, 
    setNewStartTime: (input: string) => void;

    newEndTime: string,
    setNewEndTime: (input: string) => void; 

    //GOALS
    newActivity: string,
    setNewActivity: (input: string) => void;

    newCategory: string,
    setNewCategory: (input: string) => void; 

    newFrequency: string,
    setNewFrequency: (input: string) => void;

    newDay: string;
    setNewDay: (input: string) => void;

    newProgress: number,
    setNewProgress: (input: number) => void;



}

export const useBoardStore = create<BoardState>((set, get) => ({
    board: {
        columns: new Map<TypedColumn, Column>()
    },

   
    //project
    newProjectType: "todo",
    setNewProjectType: (columnId: TypedColumn) => set({newProjectType: columnId}),

    newText: "",
    setNewText: (input: string) => set({ newText: input}),

    newProjectTitle: "",
    setNewProjectTitle: (input: string) => set({ newProjectTitle: input}),

    numberOfMembers: 0,
    setNumberOfMemebers: (input: number) => set({numberOfMembers: input}),

    
    //tasks
    newTasksText: "",
    setNewTaskText: (input: string) => set({newTasksText: input}),

    newStartTime: "",
    setNewStartTime: (input: string) => set({newStartTime: input}),

    newEndTime: "",
    setNewEndTime: (input: string) => set({newEndTime: input}),

    //goals

    newActivity: "",
    setNewActivity: (input: string) => set({newActivity: input}),

    newCategory: "",
    setNewCategory: (input: string) => set({newCategory: input}),

    newFrequency: "",
    setNewFrequency: (input: string) => set({newFrequency: input}),

    newDay: "",
    setNewDay: (input: string) => set({newDay: input}),

    newProgress: 0,
    setNewProgress: (input: number) => set({newProgress: input}),
    


   
    getBoard: async () => {
        const board = await getTodosGroupedByColumn();
        set( { board })
    },

    setBoardState: (board)=> set({ board }),

    updateProjectDB: async(project, columnId)=>{
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID!,
            project.$id,
            {
                title: project.title,
                text: project.text,
                status: columnId
            }
        )
    },

    updateNotesDB: async (note) => {
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_NOTES_COLLECTION_ID!,
            note.$id,
            {
                title: note.title,
                text: note.text
            })
    },

   
    deleteProject: async (projectIndex: number, project: Project, id: TypedColumn) => {
        const newColumns = new Map(get().board.columns);

        //delete todoId from newColumns
        newColumns.get(id)?.projects.splice(projectIndex, 1);

        set({ board: {columns: newColumns}});

        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID!,
            project.$id
        )
    },

    addProject: async (project:string, columnId: TypedColumn, text: string, members: number) => {
        const {$id} = await databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID!,
            ID.unique(),
            {
                title: project,
                status: columnId,
                text: text,    
            }
        );

        set({newProjectTitle: ""});
        set({newText: ""})

        set((state) => {
            const newColumns = new Map(state.board.columns);

            const newProject: Project = {
                $id, 
                $createdAt: new Date().toISOString(),
                title: project, 
                status: columnId,
                text: text,
                members: members
            };

            const column = newColumns.get(columnId);

            if (!column){
                newColumns.set(columnId, {
                    id: columnId, 
                    projects: [newProject],
                }); 
            }else { 
                newColumns.get(columnId)?.projects.push(newProject)
            }

            return {
                board: {
                    columns: newColumns
                }
            }
        })
    }
}))