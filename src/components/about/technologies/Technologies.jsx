import React, { Component } from 'react'
import withScaleOnHover from '../../animations/withScaleOnHover';
import DotNetIcon from './DotNetIcon'
import CSSIcon from './CSSIcon';
import ReactIcon from './ReactIcon';
import HTMLIcon from './HTMLIcon';
import ReduxIcon from './ReduxIcon';
import JavascriptIcon from './JavascriptIcon';
import CSharpIcon from './CSharpIcon';

export default class Technologies extends Component {

    render() {
        return (
            <div id='techStack'>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {withScaleOnHover(DotNetIcon)}
                    {withScaleOnHover(CSharpIcon)}
                    {withScaleOnHover(JavascriptIcon)}
                    {withScaleOnHover(HTMLIcon)}
                    {withScaleOnHover(CSSIcon)}
                    {withScaleOnHover(ReactIcon)}
                    {withScaleOnHover(ReduxIcon)}
                </div>
            </div >
        )
    }
}
