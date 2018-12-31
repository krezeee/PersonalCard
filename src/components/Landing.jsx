import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import Face from '@material-ui/icons/Face';

export default class Landing extends Component {
    render() {
        return (
            <div className='centered'>
                <p style={{ fontSize: '1.6em', whiteSpace: 'nowrap' }}>Hello,</p>
                <p style={{ fontSize: '1.4em', whiteSpace: 'nowrap' }}>I'm Paweł</p>
                <p style={{ fontSize: '1em', whiteSpace: 'nowrap' }}>and I code!</p>
                <Button style={{ marginTop: '20px' }}
                    variant="fab"
                    color="default"
                    aria-label="Add"
                    onClick={this.props.showAbout}>
                    <Face />
                </Button>
            </div>
        )
    }
}
