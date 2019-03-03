import React from 'react'
import PlayerAPI from './api'

const Schedule = () => {
    let parni = PlayerAPI.all().filter( p => (p.number)%2 === 0 )
    let neParni = PlayerAPI.all().filter( p => (p.number)%2 !== 0 )



    return (
        <div>
            <p>Schedule</p>
            <table>
                <tbody>
                <tr>
                    <td>Парні id</td>
                    {
                        neParni.map(p => (
                            <td key={p.number}>{p.name}</td>
                        ))
                    }
                </tr>
                <tr>
                <td>Непарні id</td>
                    {
                        parni.map(p => (
                            <td key={p.number}>{p.name}</td>
                        ))
                    }
                </tr>
                </tbody>
            </table>
        </div>
    )
}



export default Schedule;