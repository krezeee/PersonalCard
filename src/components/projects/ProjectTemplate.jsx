import React, { Component } from 'react';
import { Card, CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default class ProjectTemplate extends Component {
    render() {
        return (
            <Card style={{
                maxWidth: '20vw',
                minWidth: '160px',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
            }}>
                <p
                    style={{
                        fontSize: '1em',
                        fontFamily: 'Merriweather, Georgia, serif',
                        textAlign: 'center'
                    }}>
                    {this.props.title}
                </p>
                <CardMedia
                    component="img"
                    image={this.props.image}
                    alt={this.props.title}
                />
                <CardContent>
                    <p style={{
                        fontSize: '0.5em',
                        fontFamily: 'Merriweather, Georgia, serif',
                        textAlign: 'justify'
                    }}>
                        {this.props.description}
                    </p>
                </CardContent>
            </Card>
        )
    }
}
