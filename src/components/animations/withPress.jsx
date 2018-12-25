import React from 'react'
import posed from 'react-pose';

const withPress = (Component, callback) => {
    const Wrapped = posed.div({
        hoverable: true,
        pressable: true,
        init: {
            scale: 1,
            boxShadow: '0px 0px 0px rgba(0,0,0,0)'
        },
        hover: {
            scale: 1.2,
            boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
        },
        press: {
            scale: 1.1,
            boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
        }
    });

    return (
        <Wrapped style={{
            borderRadius: '10px',
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '15px'
        }}>
            <Component callback={callback} />
        </Wrapped>
    )
}

export default withPress