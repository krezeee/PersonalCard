import React, { Component } from 'react';
import { Card, CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default class ProjectTemplate extends Component {
    render() {
        return (
            <Card style={{
                maxWidth: '400px',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
            }}>
                <CardHeader title={this.props.title} />
                <CardMedia
                    component="img"
                    image={this.props.image}
                    alt={this.props.title}
                    width="200px"
                />
                <CardContent>
                    <p style={{
                        fontSize: '16px',
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
