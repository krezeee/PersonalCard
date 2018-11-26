import React, { Component } from 'react'
import withPress from '../animations/withPress';
import LandingIcon from './icons/LandingIcon'
import AboutIcon from './icons/AboutIcon.jsx';
import ProjectsIcon from './icons/ProjectsIcon';

export default class Sidenav extends Component {
    render() {

        return (
            <div style={{
                position: 'fixed',
                width: '100%',
                height: '50px',
                top: '0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '1'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '160px'
                }}>
                    {withPress(LandingIcon, this.props.showLanding)}
                    {withPress(AboutIcon, this.props.showAbout)}
                    {withPress(ProjectsIcon, this.props.showProjects)}
                </div>
            </div >
        )
    }
}
