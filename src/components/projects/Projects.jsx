import React, { Component } from 'react'
import withOpacityAppearance from '../animations/withOpacityAppearance';
import PrescientProject from './prescientProject/PrescientProject';

export default class Projects extends Component {
    render() {
        return (
            <div className='full-size'
                style={{ width: '400px' }}>
                {withOpacityAppearance(PrescientProject, 900)}
            </div>
        )
    }
}




