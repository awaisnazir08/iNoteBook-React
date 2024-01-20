import NoteContext from "./noteContext";
import { useState } from 'react';
const NoteState = (props) => {
    const s1 = {
        "name": "Awais",
        "class": "14"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Awais aka Little One",
                "class": "14 dot 5 dot 0"
            })
        }, 1000)
    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;