import React from 'react'
import posed from 'react-pose';

const withScaleOnHover = (Component) => {
    const Wrapped = posed.div({
        hoverable: true,
        init: {
            scale: 1
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

export default withScaleOnHover
