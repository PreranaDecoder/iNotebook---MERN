import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "665dad7a40524c0647e12aae",
          "user": "665c797901f2e7fd29892d59",
          "title": "My Title",
          "description": "Please wake up early at 6am",
          "tag": "personal",
          "date": "2024-06-03T11:48:10.278Z",
          "__v": 0
        },
        {
          "_id": "665e05651eefe4c71e41f1e7",
          "user": "665c797901f2e7fd29892d59",
          "title": "My Title 1",
          "description": "Please wake up",
          "tag": "personal",
          "date": "2024-06-03T18:03:17.269Z",
          "__v": 0
        },
        {
          "_id": "665e05711eefe4c71e41f1e9",
          "user": "665c797901f2e7fd29892d59",
          "title": "My Title 2",
          "description": "Please brush up",
          "tag": "personal",
          "date": "2024-06-03T18:03:29.734Z",
          "__v": 0
        },
        {
          "_id": "665e05801eefe4c71e41f1ed",
          "user": "665c797901f2e7fd29892d59",
          "title": "My Title 4",
          "description": "Please move up",
          "tag": "personal",
          "date": "2024-06-03T18:03:44.413Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial)
     // Add a Note
     const addNote = (title, description, tag)=>{
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
          "_id": "665dad7a40524c0647e12aae",
          "user": "665c797901f2e7fd29892d59",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-18-06T14:20:09.668Z",
          "__v": 0
        };
        setNotes(notes.concat(note)) 
      }

      // Delete a Note
      const deleteNote = (id)=>{
        // TODO: API Call
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)

      }
      
      // Edit a Note
      const editNote = (id, title, description, tag)=>{

      }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;