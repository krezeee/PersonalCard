import React from 'react'
import { Grow, Grid } from '@material-ui/core';

function Landing(props) {
    return (
        <Grow in={props.animate}
            style={{ transformOrigin: '0 0 0' }}
            {...(props.animate
                ? { timeout: 1000 }
                : {})
            }
        >
            <Grid container
                justify='center'
                direction='column'
                alignItems='center'
                style={{ padding: '5em' }}>
                <p style={{ fontSize: '2em', whiteSpace: 'nowrap' }}>Hello!</p>
                <p style={{ fontSize: '1.6em', whiteSpace: 'nowrap' }}>I'm Paweł and I'm a Software Engineer.</p>
            </Grid>
        </Grow>
    )
}

export default Landing
