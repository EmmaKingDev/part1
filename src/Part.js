import React from 'react'

const Part= (props) => {
    return (
        <>
        <p className="part">
        {props.part} {props.exercises}
        </p>
        </>
    )    
}

export default Part