import {create } from 'zustand'
import { getAllGoals } from '@/lib/getAllGoals';
import { getAllNotes } from '@/lib/getAllNotes';
import { getAllProjects } from '@/lib/getAllProjects';
import { getAllTasks } from '@/lib/getAllTasks';
import { ID, databases } from '@/appwrite';




interface TopCardStore {
    //PROJECTS
    project: [];
    getProjects: () => void;
     
    // NOTES
    note: [];
     getNotes: () => void;
     addNoteApp: (title: string, text: string ) => void;
     updateNoteApp: (note: Notes, title: string, text: string, index: number) => void
     deleteNoteApp: (noteId: string, index: number ) => void;
     
     newNotesTitle: string,
     setNewNoteTitle: (input: string) => void;
 
     newNotesText: string,
     setNewNoteText: (input: string) => void;
    
    
    //TASKS
    task: [];
    getTasks: () => void;
    addTaskApp: (text: string, startTime: string, endTime: string ) => void;
    updateTaskApp: (task: Task, text: string, startTime: string, endTime: string, index: number) => void;

    deleteTaskApp: (taskId: string, index: number) => void;

    newTasksText: string,
    setNewTaskText: (input: string) => void;

    newStartTime: string, 
    setNewStartTime: (input: string) => void;

    newEndTime: string,
    setNewEndTime: (input: string) => void; 

    
    
    //GOALS 
     goal: [];
     getGoals: () => void;
     addGoalsApp:  (activity: string, category: string, frequency: string, days: string, progress: number ) => void;
     updateGoalApp: (goal:Goal, activity: string, category: string, frequency: string, days: string, progress: number, index: number) => void
     deleteGoalApp: (goalId: string, index: number) => void;

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

 export const useTopCardStore = create<TopCardStore>((set, get) => ({
    //PROJECTS
    project: [],
    getProjects: async() => {  
        const project = await getAllProjects();  
        set({ project })
    },

    //NOTES
    note: [],
    getNotes: async() => {
        const note = await getAllNotes();

        set({note})
    },

    newNotesTitle: "",
    setNewNoteTitle: (input: string) => set({newNotesTitle: input}),

    newNotesText: "",
    setNewNoteText: (input: string) => set({newNotesText: input}),

    deleteNoteApp: async (noteId: string, index: number) => {
        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_NOTES_COLLECTION_ID!,
            noteId
        )
        const newNote = get().note
        newNote.splice(index, 1)
        set({note: newNote})
    },
    addNoteApp: async (title, text) => {

       
        const {$id} = await databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_NOTES_COLLECTION_ID!,
            ID.unique(),
            {
                title: title,
                text: text,    
            }
        );
        set({newNotesTitle: ""});
        set({newNotesText: ""});

       

        const newArray: any = get().note
        
        const newNote: Notes = {
            $id, 
            $createdAt: new Date().toISOString(),
            title: title, 
            text: text,
        };
        
        newArray.push(newNote)
        set({note: newArray})
    },
    updateNoteApp: async (note, title, text, index) => {
        const {$id} = await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_NOTES_COLLECTION_ID!,
            note.$id, {
                title: title,
                text: text
            });
            set({newNotesTitle: ""});
            set({newNotesText: ""});

            const newNote: Notes = {
                $id, 
                $createdAt: new Date().toISOString(),
                title: title, 
                text: text,
            };

            const newArray: any = get().note
            newArray.splice(index, 1);
            newArray.splice(index, 0, newNote)

            set({note: newArray})

    },
    
    //TASKS
    task: [],
    getTasks: async() => {
        const task = await getAllTasks();

        set({task})
    },
    newTasksText: "",
    setNewTaskText: (input: string) => set({newTasksText: input}),

    newStartTime: "", 
    setNewStartTime: (input: string) => set({newStartTime: input}),

    newEndTime: "",
    setNewEndTime: (input: string) => set({newEndTime: input}),

    deleteTaskApp: async (taskId: string, index: number) => {
        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!,
            taskId
        )
        const newTask = get().task
        newTask.splice(index, 1)
        set({task: newTask})
    },

    addTaskApp: async(text, startTime, endTime) => {
        const {$id} = await databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!,
            ID.unique(),
            {
                text: text,
                startTime: startTime,
                endTime: endTime
            }
        );
        set({newTasksText: ""})
        set({newStartTime: ""})
        set({newEndTime:""})


        const newArray: any = get().task

        const newTask: Task ={
            $id,
            $createdAt: new Date().toISOString(),
            text: text,
            startTime: startTime,
            endTime: endTime
        };

        newArray.push(newTask)
        set({task: newArray})
    },

    updateTaskApp: async(task, text, startTime, endTime, index) => {
        const {$id} = await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!,
            task.$id,
            {
                text: text,
                startTime: startTime,
                endTime: endTime
            }
        );
        set({newTasksText: ""})
        set({newStartTime: ""})
        set({newEndTime:""})

        const newTask: Task ={
            $id,
            $createdAt: new Date().toISOString(),
            text: text,
            startTime: startTime,
            endTime: endTime
        };

        const newArray: any = get().task
        newArray.splice(index, 1)
        
        newArray.splice(index, 0, newTask)

        set({task: newArray})
        

    },


    //GOALS
    goal: [],
    getGoals: async () => {
        const goal = await getAllGoals();

        set({goal})
    },

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

    deleteGoalApp: async ( goalId: string, index: number) => {
        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_GOALS_COLLECTION_ID!,
            goalId
        )
        const newGoal = get().goal
        newGoal.splice(index, 1)
        set({goal: newGoal})
    },

    addGoalsApp: async (activity, category, frequency, days, progress) => {
         
        const {$id} = await databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_GOALS_COLLECTION_ID!,
            ID.unique(),
            {
                activity: activity,
                category: category,
                frequency: frequency,
                days: days,
                progress: progress
            }
            );

            set({newActivity: ""});
            set({newCategory: ""});
            set({newFrequency: ""});
            set({newDay: ""});
            set({newProgress: 0});

            const newArray: any = get().goal

            const newGoal: Goal = {
                $id,
                $createdAt: new Date().toISOString(),
                activity: activity,
                category: category,
                frequency: frequency,
                days: days,
                progress: progress
            };

            newArray.push(newGoal)
            set({goal: newArray})
    },

    updateGoalApp: async (goal, activity, category, frequency, days, progress, index) =>  {
        const {$id} = await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_GOALS_COLLECTION_ID!,
            goal.$id,
            {
                activity: activity,
                category: category,
                frequency: frequency,
                days: days,
                progress: progress
            });
            set({newActivity: ""});
            set({newCategory: ""});
            set({newFrequency: ""});
            set({newDay: ""});
            set({newProgress: 0});

            const newGoal: Goal = {
                $id,
                $createdAt: new Date().toISOString(),
                activity: activity,
                category: category,
                frequency: frequency,
                days: days,
                progress: progress
            };


            const newArray: any = get().goal;
            newArray.splice(index, 1);

            newArray.splice(index, 0, newGoal);

            set({goal: newArray})
    },


 }))