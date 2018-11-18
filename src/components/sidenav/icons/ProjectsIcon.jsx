import React, { Component } from 'react'
import { IconButton } from '@material-ui/core';
import Work from '@material-ui/icons/Work';

export default class ProjectsIcon extends Component {
    render() {
        return (
            <IconButton
                onClick={this.props.callback}>
                <Work />
            </IconButton>
        )
    }
}
