import React from 'react'
import withTechIcon from './withTechIcon';
import DotNetIcon from './DotNetIcon'
import CSSIcon from './CSSIcon';
import ReactIcon from './ReactIcon';
import HTMLIcon from './HTMLIcon';
import ReduxIcon from './ReduxIcon';
import JavascriptIcon from './JavascriptIcon';
import CSharpIcon from './CSharpIcon';
import { Grid, Grow } from '@material-ui/core';

function Technologies(props) {
    return (
        <Grow in={props.animate}
            style={{
                transformOrigin: '0 0 0'
            }}
            {...(props.animate
                ? { timeout: 1000 }
                : {})
            }
        >
            <div className='centered' >
                <p
                    style={{
                        fontSize: '0.4em',
                        color: 'grey',
                        marginBottom: '4em',
                        textAlign: 'center'
                    }}>
                    - SKILLS -
                </p>
                <Grid container
                    direction='row'
                    spacing={40}
                >
                    {withTechIcon(DotNetIcon)}
                    {withTechIcon(CSharpIcon)}
                    {withTechIcon(JavascriptIcon)}
                    {withTechIcon(HTMLIcon)}
                    {withTechIcon(CSSIcon)}
                    {withTechIcon(ReactIcon)}
                    {withTechIcon(ReduxIcon)}
                </Grid>
            </div>
        </Grow>

    )
}

export default Technologies
