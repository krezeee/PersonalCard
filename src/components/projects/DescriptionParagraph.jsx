import React from 'react'

function DescriptionParagraph(props) {
    return (
        <p style={{
            textAlign: 'justify',
            fontSize: '0.45em',
            gridColumn: '2'
        }}>
            {props.description}
        </p>
    )
}

export default DescriptionParagraph