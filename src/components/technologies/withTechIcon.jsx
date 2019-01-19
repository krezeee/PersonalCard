import React from 'react'
import posed from 'react-pose';

const withTechIcon = (Component) => {
    const Wrapped = posed.div({
        hoverable: true,
        init: {
            scale: 1,
            margin: '0.5em'
        },
        hover: {
            scale: 1.2
        }
    });

    return (
        <Wrapped>
            <Component />
        </Wrapped>
    )
}

export default withTechIcon
