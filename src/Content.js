import React from 'react'
import Part from './Part'

const Content = (props) => {
    const kurssit = props.course.parts
    const ekaNimi = kurssit[0].name
    const ekaE = kurssit[0].exercises
    const tokaNimi = kurssit[1].name
    const tokaE = kurssit[1].exercises
    const kolmasNimi = kurssit[2].name
    const kolmasE = kurssit[2].exercises
    return (
        <>
        <Part part={ekaNimi} exercises={ekaE}/>
        <Part part={tokaNimi} exercises={tokaE}/>
        <Part part={kolmasNimi} exercises={kolmasE}/>
        </>
    )    
}

export default Content