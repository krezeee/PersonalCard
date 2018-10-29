import React, { Component } from 'react'
import linkedInLogo from '../../content/logos/linkedinlogo.png';
import githubLogo from '../../content/logos/githublogo.png';
import twitterLogo from '../../content/logos/twitterlogo.png';

export default class SocialPanel extends Component {
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div className='socialItem'>
                    <a href="https://www.linkedin.com/in/pawe%C5%82-kr%C4%99%C5%BCel-2713a5b9/">
                        <img src={linkedInLogo} alt='' />
                    </a>
                </div>
                <div className='socialItem'>
                    <a href="https://github.com/krezeee">
                        <img src={githubLogo} alt='' />
                    </a>
                </div>
                <div className='socialItem'>
                    <a href="https://twitter.com/krezeel">
                        <img src={twitterLogo} alt='' />
                    </a>
                </div>
            </div>
        )
    }
}
