import { databases } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_PROJECTS_COLLECTION_ID!
    );

    const projects = data.documents

    const columns = projects.reduce((acc, project) =>{
        if (!acc.get(project.status)){
            acc.set(project.status, {
                id: project.status, 
                projects: []
            })
        }

        acc.get(project.status)!.projects.push({
            $id: project.$id,
            $createdAt: project.$createdAt,
            title: project.title,
            status: project.status,
            text: project.text,
            members: project.members



        });
        return acc

   }, new Map<TypedColumn, Column>)

   // If the columns dont have an inprogress, todo and done, add them with empty todos
   const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"];
   for (const columnType of columnTypes){
    if(!columns.get(columnType)) {
        columns.set(columnType, {
            id: columnType,
            projects: []
        });
    }
   }

   // sort the columns by the columnTypes
   const sortedColumns = new Map(
    Array.from(columns.entries()).sort((a,b) => (
        columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    ))
   ) ;

   const board: Board = {
    columns: sortedColumns
   }
   return board

}

