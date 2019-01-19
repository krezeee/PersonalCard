import React from 'react'
import { Grow } from '@material-ui/core';

function AboutContent(props) {
    return (
        <Grow in={props.animate}
            style={{ transformOrigin: '0 0 0' }}
            {...(props.animate
                ? { timeout: 1200 }
                : {})
            }
        >
            <div style={{
                margin: '0.5em',
                marginTop: '3em',
                marginLeft: '3em',
                width: '36em',
                minHeight: '22em'
            }}>
                <p style={{
                    fontSize: '1.6em',
                    marginBottom: '2em'
                }}>
                    My name is Paweł Krężel and I'm a Software Engineer.
                     </p>
                <p style={{
                    fontSize: '1.2em',
                    textAlign: 'justify',
                    marginBottom: '2em'
                }}>
                    A passionate for innovation and new technology person, with strong background in Civil Engineering.
                    I'm interrested in Building Information Modeling, with most of my career spent around Autodesk Revit.
                    Also I'm thriving with web development and I'm a huge fan of the cloud.
                </p>
                <p style={{
                    fontSize: '1.4em',
                    marginBottom: '2em'
                }}>
                    Any idea for a project?
                </p>
                <p style={{
                    fontSize: '1.4em'
                }}>
                    Reach me out!
                </p>
            </div >
        </Grow>
    )
}

export default AboutContent
