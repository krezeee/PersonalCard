import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default class Landing extends Component {
    render() {
        return (
            <div className='component' style={{ width: '600px' }}>
                <h1>Hello! I'm Paweł!</h1>
                <h3>Want to know about me?</h3>
                <Button onClick={this.props.action}
                    variant="fab"
                    color="outline"
                    aria-label="Add">
                    <AddIcon />
                </Button>
            </div>
        )
    }
}
