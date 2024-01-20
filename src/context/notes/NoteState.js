import NoteContext from "./noteContext";
import { useState } from 'react';
const NoteState = (props) => {
    const host = "http://localhost:5002"
    const [notes, setNotes] = useState([]);


    //Get all Note
    const getNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYWI5OTI4ZDc4MTI5YmQ1ZDBlOThkIn0sImlhdCI6MTcwNTY5MTc0OX0.9eoACpgxt8kpzmBkhQp6NgXSClH3BiCbSDaLa4zCi0Q"
            },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    //Add a Note
    const addNote = async (title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYWI5OTI4ZDc4MTI5YmQ1ZDBlOThkIn0sImlhdCI6MTcwNTY5MTc0OX0.9eoACpgxt8kpzmBkhQp6NgXSClH3BiCbSDaLa4zCi0Q"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();

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
    const deleteNote = async (id) => {
        //API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYWI5OTI4ZDc4MTI5YmQ1ZDBlOThkIn0sImlhdCI6MTcwNTY5MTc0OX0.9eoACpgxt8kpzmBkhQp6NgXSClH3BiCbSDaLa4zCi0Q"
            }
        });
        const json = response.json();
        console.log(json);

        console.log("Deleting note with id" + id);
        const newNotes = notes.filter((note) => {
            return note._id !== id
        });
        setNotes(newNotes);
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYWI5OTI4ZDc4MTI5YmQ1ZDBlOThkIn0sImlhdCI6MTcwNTY5MTc0OX0.9eoACpgxt8kpzmBkhQp6NgXSClH3BiCbSDaLa4zCi0Q"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();

        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;