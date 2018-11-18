import React from 'react'
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Prescient from '../../../content/prescient.jpg';

function PrescientProject() {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    width="200"
                    image={Prescient}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Prescient Co
                    </Typography>
                    <Typography component="p">
                        Went from being a Junior Software Tester to Lead Software Devloper. My role mainly focused on implementing new modules of a modern building design platform with .NET technology stack for desktop applications, but also maintenance and improvements of existing code. All worked out in Scrum methodology. Strongly oriented toward BIM technology and desing process improvements.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PrescientProject
