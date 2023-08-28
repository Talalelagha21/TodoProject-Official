import { databases } from "@/appwrite";


export const getAllGoals = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_GOALS_COLLECTION_ID!
    );

    const goals = data.documents
    const goalsArray: any = []
    
    goals.map(goal => {
        goalsArray.push(goal)
    })

    return goalsArray
}