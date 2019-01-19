import React from 'react'
import withPress from '../../animations/withPress';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import TwitterIcon from './icons/TwitterIcon';
import { Grow } from '@material-ui/core';

function SocialPanel(props) {
    return (
        <Grow in={props.animate}
            style={{ transformOrigin: '0 0 0' }}
            {...(props.animate
                ? { timeout: 1200 }
                : {})
            }
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {withPress(LinkedInIcon)}
                {withPress(GitHubIcon)}
                {withPress(TwitterIcon)}
            </div>
        </Grow>
    )
}

export default SocialPanel