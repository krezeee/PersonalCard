import React from 'react'
import posed, { PoseGroup } from 'react-pose';

const withMoveAppearance = (component, isVisible) => {
    const Wrapped = posed.div({
        exit: {
            y: 100,
            opacity: 0,
            transition: { duration: 700 }
        },
        enter: {
            y: 0,
            opacity: 1,
            delay: 700,
            transition: { duration: 700 }
        },
    });

    return (
        <PoseGroup>
            {isVisible &&
                [
                    <Wrapped key={component.key}>
                        {component}
                    </Wrapped>
                ]
            }
        </PoseGroup>
    )
}

export default withMoveAppearance
