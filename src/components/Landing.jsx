import React from 'react'
import { Grow, Grid } from '@material-ui/core';

function Landing(props) {
    return (
        <Grid container
            justify='center'
            direction='column'
            alignItems='center'
            style={{ padding: '1em' }}>
            <Grow in={props.animate}
                style={{ transformOrigin: '0 0 0' }}
                {...(props.animate
                    ? { timeout: 1000 }
                    : {})
                }
            >
                <p style={{ fontSize: '1.5em', whiteSpace: 'nowrap' }}>Hello!</p>
            </Grow>
            <Grow in={props.animate}
                style={{ transformOrigin: '0 0 0' }}
                {...(props.animate
                    ? { timeout: 1300 }
                    : {})
                }
            >
                <p style={{ fontSize: '0.8em', whiteSpace: 'nowrap' }}>I'm Paweł and I'm a Software Engineer.</p>
            </Grow>
        </Grid>
    )
}

export default Landing
