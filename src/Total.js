import React from "react"

const Total = (props) => {
    const kurssit = props.course.parts
    const total = kurssit[0].exercises + kurssit[1].exercises + kurssit[2].exercises
    return (
        <>
        <p className="total">Number of exercises {total}</p>
        </>
    )    
}

export default Total