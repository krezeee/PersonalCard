import React, { Component } from 'react';
import SocialPanel from './SocialPanel';
import AboutContent from './AboutContent';
import Image from './Image';
import withAnimation from '../withAnimation'

export default class About extends Component {
    render() {
        return (
            <div style={{
                marginTop: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div className='component'>
                    {withAnimation(Image, 300)}
                    {withAnimation(SocialPanel, 500)}
                    {withAnimation(AboutContent, 700)}
                </div>
            </div>
        )
    }
}
