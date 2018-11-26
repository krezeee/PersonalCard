import React, { Component } from 'react'
import withPress from '../../animations/withPress';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import TwitterIcon from './icons/TwitterIcon';

export default class SocialPanel extends Component {
    render() {
        return (
            <div style={{ display: 'flex' }}>
                {withPress(LinkedInIcon)}
                {withPress(GitHubIcon)}
                {withPress(TwitterIcon)}
            </div>
        )
    }
}
