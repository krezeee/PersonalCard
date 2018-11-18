import React, { Component } from 'react';
import { Switch } from '@material-ui/core';

export default class Header extends Component {
    render() {

        return (
            <div style={{
                position: "fixed",
                width: '100%',
                height: '80px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <div>
                    {/* <Switch color="default"
                        checked={this.props.isDarkTheme}
                        onChange={this.props.toggleTheme} /> */}
                </div>
            </div >
        )
    }
}
