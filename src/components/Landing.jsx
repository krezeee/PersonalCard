import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import Face from '@material-ui/icons/Face';

export default class Landing extends Component {
    render() {
        return (
            <div className='component' style={{ width: '600px' }}>
                <h1>Hello! I'm Paweł!</h1>
                <h3>Want to know something more about me?</h3>
                <Button onClick={this.props.action}
                    variant="fab"
                    color="outline"
                    aria-label="Add">
                    <Face />
                </Button>
            </div>
        )
    }
}
