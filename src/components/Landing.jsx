import React, { Component } from 'react'

export default class Landing extends Component {
    render() {
        return (
            <div className='component' style={{ width: '600px' }}>
                <h1>Hello! I'm Paweł!</h1>
                <h3>Want to know about me?</h3>
                <button onClick={this.props.action}
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50px'
                    }}>
                    <p style={{ fontWeight: 'bold' }}>
                        Click here
                    </p>
                </button>
            </div>
        )
    }
}
