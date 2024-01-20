import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note } = props;
    const handleClick = ()=>{
        deleteNote(note._id);
    }
    return (
        <>
            <div className='col-md-3 mx-1'>
                <div className="card my-3" style={{ width: "18rem" }}>
                    {/* <img src="..." className="card-img-top" alt="..."/> */}
                    <div className="card-body">
                            <h5 className="card-title">{note.title}</h5>
                        <div className="f-flex align-items-center">
                            <i className="fa-solid fa-trash mx-2" onClick = {handleClick}></i>
                            <i className="fa-solid fa-pen-to-square mx-2"></i>
                        </div>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem;
