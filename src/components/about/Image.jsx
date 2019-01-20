import React from 'react'
import MyPhoto from '../../content/MyPhoto.jpg';
import { Grow } from '@material-ui/core';

function Image(props) {
    return (
        <Grow in={props.animate}
            style={{ transformOrigin: '0 0 0' }}
            {...(props.animate
                ? { timeout: 1000 }
                : {})
            }
        >
            <img style={{
                marginTop: '1.5em',
                marginRight: '1em',
                borderRadius: '50%',
                width: '6em',
                height: '6em',
                boxShadow: '0 8px 12px 0 rgba(0, 0, 0, 0.4)'
            }}
                src={MyPhoto} alt='' />
        </Grow>
    )
}

export default Image
