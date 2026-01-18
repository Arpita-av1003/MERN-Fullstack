import React from 'react'

const Button = (props) => {
    return (
        <div>
            {/* Render the children (the <h1>{count}</h1> from App) */}
            {props.children}
            
            {/* FIX: Use lowercase <button> for the HTML element */}
            <button onClick={props.handleClick}>
                {props.text}
            </button>
        </div>
    )
}

export default Button