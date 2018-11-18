import React, {Component} from 'react'
import Home from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';

export default class LandingIcon extends Component {
    render() {
        return (
            <IconButton
                onClick={this.props.callback}>
                <Home />
            </IconButton>
        )
    }
}

