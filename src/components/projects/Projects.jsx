import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import ProjectTemplate from './ProjectTemplate';
import * as contents from './ProjectContents';
import PrescientImage from '../../content/prescient.jpg';
import Where2DevImage from '../../content/where2dev.png';

export default class Projects extends Component {
    render() {
        let where2dev = <ProjectTemplate
            title={contents.Where2devProject.title}
            description={contents.Where2devProject.description}
            image={Where2DevImage} />

        let prescient = <ProjectTemplate
            title={contents.PrescientProject.title}
            description={contents.PrescientProject.description}
            image={PrescientImage} />

        return (
            <Grid
                container
                direction="row"
                spacing={24}
                justify="center"
                alignItems="stretch"
            >
                <Grid item
                    style={{
                        display: 'flex',
                    }}>
                    {prescient}
                </Grid>
                <Grid item
                    style={{
                        display: 'flex',
                    }}>
                    {where2dev}
                </Grid>
            </Grid>
        )
    }
}




