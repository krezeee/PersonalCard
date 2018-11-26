import React from 'react'
import MyPhoto from '../../content/MyPhoto.jpg';

function Image() {
    return (
        <img style={{
            marginBottom: '20px',
            borderRadius: '50%',
            width: '250px',
            height: '250px',
            boxShadow: '0 8px 12px 0 rgba(0, 0, 0, 0.4)'
        }}
            src={MyPhoto} alt='' />
    )
}

export default Image