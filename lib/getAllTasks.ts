import { databases } from "@/appwrite";




export const getAllTasks = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!
       );
    
       
       const tasks = data.documents
       const taskArray: any = []
       tasks.map(task => {

        taskArray.push(task)
       })

      return taskArray
}
