import React from 'react'

export default function page({params}) {
    console.log(params.student);
    return (
        <div>
            <h1>Dynamic Route</h1>
            <h1>Student Route Inside Teacher : {params.student}</h1>
        </div>
    )
}
