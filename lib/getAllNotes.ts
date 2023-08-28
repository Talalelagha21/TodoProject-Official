
import { databases } from "@/appwrite";


export const getAllNotes = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_NOTES_COLLECTION_ID!
    );

    const notes = data.documents
    const notesArray: any = []
    
    notes.map(note => {
        notesArray.push(note)
    })

    return notesArray
}