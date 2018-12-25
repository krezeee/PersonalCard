import React from 'react'
import posed from 'react-pose';

const withOpacityAppearance = (Component, delay) => {
    const Wrapped = posed.div({
        initial: {
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            delay: delay,
            transition: {
                y: { type: 'spring', stiffness: 1000, damping: 15 },
                default: { duration: 500 }
            }
        }
    });

    return (
        <Wrapped
            initialPose='initial'
            pose='visible'
            key={Component.key}>
            <Component />
        </Wrapped>
    )
}

export default withOpacityAppearance
