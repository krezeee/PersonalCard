import React, { Component } from 'react';
import SocialPanel from './social/SocialPanel';
import AboutContent from './AboutContent';
import Image from './Image';
import withOpacityAppearance from '../animations/withOpacityAppearance'
import Technologies from './technologies/Technologies';

export default class About extends Component {
    render() {
        return (
            <div className='component'>
                {withOpacityAppearance(Image, 900)}
                {withOpacityAppearance(SocialPanel, 1100)}
                {withOpacityAppearance(AboutContent, 1300)}
                {withOpacityAppearance(Technologies, 1500)}
            </div>
        )
    }
}
