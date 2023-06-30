import React from "react";

export default function List(props){

    const lightstyles = {
        borderBottom: '1px solid #333',
        backgroundColor: 'rgb(236, 232, 232)',
        color: 'black'
    }

    const darkstyles = {
        borderBottom: '1px solid #fff',
        backgroundColor : 'rgb(83, 81, 81)',
        color: 'white'
    }

    return (
        <div className="list" style={props.darkMode ? lightstyles : darkstyles}>
            <label htmlFor="input">
                <input type="checkbox" className="check" id="input"
                />
                {props.todo.title}
            </label>
            <button type="button" className={`btn btn-outline-${props.darkMode ? "danger" : "light"}`}
            onClick={props.handleDelete}
            >Delete</button>
        </div>
    )
}