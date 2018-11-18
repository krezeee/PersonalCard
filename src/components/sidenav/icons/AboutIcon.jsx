
import React, { Component } from 'react'
import { IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default class AboutIcon extends Component {
    render() {
        return (
            <IconButton
                onClick={this.props.callback}>
                <AccountCircle />
            </IconButton>
        )
    }
}

