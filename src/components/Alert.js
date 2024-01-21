import React from 'react'

const Alert = (props) => {
    const Capitalize = (word) => {
        if (word==='danger')
        {
            word = "error";
        }
        if(word === 'info')
        {
            word = 'success'
        }
        let capital = word.toLowerCase();
        let f = capital[0].toUpperCase();
        return f + capital.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>}
        </div>
    )
}

export default Alert
