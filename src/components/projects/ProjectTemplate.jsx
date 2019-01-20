import React from 'react'
import { Grow } from '@material-ui/core';

function ProjectTemplate(props) {
    return (
        <Grow in={props.animate}
            style={{ transformOrigin: '0 0 0' }}
            {...(props.animate
                ? { timeout: props.timeout }
                : {})
            }
        >
            <div style={{
                width: '28em',
                display: 'grid',
                gridTemplateColumns: '1fr 2fr'
            }}>
                <p
                    style={{
                        fontSize: '0.8em',
                        gridColumn: '1'
                    }}>
                    {props.title}
                </p>
                <p style={{
                    textAlign: 'justify',
                    fontSize: '0.45em',
                    gridColumn: '2'
                }}>
                    {props.description}
                </p>
            </div >
        </Grow>
    )
}

export default ProjectTemplate
