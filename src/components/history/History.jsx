import React from 'react'

function History(props) {
    return (
        <div>
            <p style={{ color: 'lightgrey' }}>{props.third}</p>
            <p style={{ color: 'grey' }}>{props.second}</p>
            <p>{props.first}</p>
        </div>
    )
}

export default History
