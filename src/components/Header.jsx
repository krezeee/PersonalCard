import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        let theme = this.props.isDarkTheme
            ? 'logo-light'
            : 'logo-dark'
            ;

        return (
            <div style={{
                width: '100%',
                height: '80px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div className={theme}>
                    #Krezel
                </div>

                <div>
                    <button onClick={this.props.toggleTheme} Toggle></button>
                </div>
            </div >
        )
    }
}
