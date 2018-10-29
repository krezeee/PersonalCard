import React, { Component } from 'react'
import posed from 'react-pose';

export default class Theme extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        let result = nextProps.isDarkTheme !== this.props.isDarkTheme;
        return result;
    }

    render() {
        let Wrapped = posed.div({
            enter: {
                opacity: 1
            },
            exit: {
                opacity: 0
            }
        })

        let theme = this.props.isDarkTheme
            ? 'dark-theme'
            : 'light-theme'
            ;

        return (
            <Wrapped>
                <div className={theme} />
            </Wrapped>
        )
    }
}
