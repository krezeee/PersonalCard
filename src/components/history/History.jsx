import React from 'react'

function History(props) {
    return (
        <div className='history'>
            <p style={{ color: 'lightgrey', margin: '2px' }}>{props.third}</p>
            <p style={{ color: 'grey', margin: '2px' }}>{props.second}</p>
            <p style={{ margin: '2px' }}>{props.first}</p>
        </div>
    )
}

export default History
