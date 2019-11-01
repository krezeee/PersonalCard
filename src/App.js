import React, { Component } from 'react'
import './App.scss'
import { Input, Grid, Tooltip } from '@material-ui/core';
import History from './components/history/History';
import Landing from './components/Landing';
import About from './components/about/About';
import Technologies from './components/technologies/Technologies'
import Projects from './components/projects/Projects';
import { Viewer } from './components/viewer/Viewer';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentInput: '',
            currentComponentName: 'viewer',
            first: '',
            second: '',
            third: ''
        }

        this.handleInputEnter = this.handleInputEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleInputEnter(e) {
        if (e.key === 'Enter') {
            this.setState({
                first: this.state.currentInput,
                second: this.state.first,
                third: this.state.second,
                currentComponentName: this.state.currentInput,
                currentInput: ''
            })
        }
    }

    handleChange(event) {
        this.setState({
            currentInput: event.target.value,
        });
    }

    render() {
        return (
            <Grid container
                justify='flex-start'
                alignItems='center'
                direction='column'
                style={{ marginBottom: '4em' }}>
                <History first={this.state.first}
                    second={this.state.second}
                    third={this.state.third}
                />
                <Tooltip
                    title="Available commands: hello, about, skills, projects"
                    placement="bottom"
                    style={{ marginBottom: '6em' }}>
                    <Input value={this.state.currentInput}
                        onKeyPress={(e) => this.handleInputEnter(e)}
                        onChange={this.handleChange} />
                </Tooltip>
                {this.state.currentComponentName === 'hello' && <Landing animate={true}/>}
                {this.state.currentComponentName === 'about' && <About animate={true}/>}
                {this.state.currentComponentName === 'skills' && <Technologies animate={true}/>}
                {this.state.currentComponentName === 'projects' && <Projects />}
                {this.state.currentComponentName === 'viewer' && <Viewer />}
            </Grid >
        )
    }
}
