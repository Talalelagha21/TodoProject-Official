import { databases } from "@/appwrite";




export const getAllProjects = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID!
       );
    
       
       const projects = data.documents
       const projectArray: any = []
       projects.map(proj => {

        projectArray.push(proj)
       })

      return projectArray
}

