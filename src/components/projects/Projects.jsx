import React, { Component } from 'react'
import withOpacityAppearance from '../animations/withOpacityAppearance';
import PrescientProject from './prescientProject/PrescientProject';

export default class Projects extends Component {
    render() {
        return (
            <div className='full-size'
                style={{ marginTop: '100px', width:'400px'}}>
                <div>
                    {withOpacityAppearance(PrescientProject, 900)}
                </div>
            </div>

        )
    }
}




