

interface Board {
    columns: Map<TypedColumn, Column>;
}




type TypedColumn = "todo" | "inprogress" | "done";
type Category = "Reading" | "Learning" | "Physical" | "Self" | "" ;
type Days = "Day" | "Week" | "Month" | "Year" | "" ;

interface Column {
    id: TypedColumn;
    projects: Project[]
}

interface Project { 
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColumn;
    text: string;
    members: number;
}

interface Notes {
    $id: string;
    $createdAt: string;
    title: string;
    text: string;
}

interface Task{
    $id: string; 
    $createdAt: string;
    text: string;
    startTime: string;
    endTime: string;
}

interface Goal{
    $id: string; 
    $createdAt: string;
    activity: string;
    category: string;
    frequency: string;
    days: string;
    progress: number;
    
}

interface Quotes {
    q: string,
    a: string,
    i: string,
    c: string,
    j: string
}


 