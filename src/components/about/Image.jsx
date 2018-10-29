import React from 'react'
import MyPhoto from '../../content/MyPhoto.jpg';

function Image() {
    return (
        <img style={{
            margin: '20px',
            borderRadius: '50%',
            width: '250px',
            height: '250px'
        }}
            src={MyPhoto} alt=''/>
    )
}

export default Image
