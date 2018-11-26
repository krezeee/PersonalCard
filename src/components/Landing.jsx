import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import Face from '@material-ui/icons/Face';

export default class Landing extends Component {
    render() {
        return (
            <div className='full-size'
                id='1'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Cormorant Garamond, serif'
                }}>
                <div className='centered'>
                    <p style={{ fontSize: '60px', margin: '1px' }}>Hello,</p>
                    <p style={{ fontSize: '48px', margin: '1px' }}>I'm Paweł</p>
                    <p style={{ fontSize: '32px', margin: '1px' }}>and I code!</p>
                    <Button style={{ marginTop: '20px' }}
                        variant="fab"
                        color="default"
                        aria-label="Add"
                        onClick={this.props.showAbout}>
                        <Face />
                    </Button>
                </div>
            </div>
        )
    }
}