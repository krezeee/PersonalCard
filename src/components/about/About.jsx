import React from 'react';
import SocialPanel from './social/SocialPanel';
import AboutContent from './AboutContent';
import Image from './Image';
import { Grid } from '@material-ui/core';

function About(props) {
    return (
        <Grid container
            direction='row'
            justify='center'
            alignContent='center'
            alignItems='center'
            spacing='32'>
            <Grid direction='column'
                justify='center'
                alignItems='center'
                alignContent='center'>
                <Image animate={props.animate} />
                <SocialPanel animate={props.animate} />
            </Grid>
            <Grid >
                <AboutContent animate={props.animate} />
            </Grid>
        </Grid>

    )
}

export default About;
