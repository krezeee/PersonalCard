import React from 'react'
import posed, { PoseGroup } from 'react-pose';
import { linear } from '@popmotion/easing';

const withAnimation = (Component, delay) => {
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
        <Wrapped initialPose='initial' pose='visible'
            key='wrapped'>
            <div>
                <Component />
            </div>
        </Wrapped>
    )
}

export default withAnimation
