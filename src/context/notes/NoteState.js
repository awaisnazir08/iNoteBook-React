import NoteContext from "./noteContext";
import { useState } from 'react';
const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "65ab761b819520535a539089",
            "user": "65aab9928d78129bd5d0e98d",
            "title": "My title for first note",
            "description": "My first note's description is just lame fsd",
            "tag": "Personal",
            "date": "2024-01-20T07:28:27.590Z",
            "__v": 0
        },
        {
            "_id": "65ab783b5a49d49d6618bae1f",
            "user": "65aab9928d78129bd5d0e98d",
            "title": "My title for first note",
            "description": "My first note's description is just lame fsd",
            "tag": "Personal",
            "date": "2024-01-20T07:39:33.268Z",
            "__v": 0
        },
        {
            "_id": "65ab815f5a774bb5780064f8a",
            "user": "65aab9928d78129bd5d0e98d",
            "title": "My updated title for second note",
            "description": "My updated second note's description is also lame..!!",
            "tag": "Personal",
            "date": "2024-01-20T08:16:31.124Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitial);

    //Add a Note
    const addNote = (title, description, tag)=>{
        console.log("Adding a new note");
        const note = {
            "_id": "65ab92da3a206fe26122fc6d5",
            "user": "65aab9928d78129bd5d0e98d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-01-20T09:31:06.348Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }

    //Delete a Note
    const deleteNote = ()=>{

    }

    // Edit a Note
    const editNote = ()=>{

    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;