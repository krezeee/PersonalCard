import React, { Component } from 'react'
import { Input, Grid, Tooltip } from '@material-ui/core';
import History from './components/history/History';
import Landing from './components/Landing';
import About from './components/about/About';
import Technologies from './components/technologies/Technologies'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentInput: '',
            showLanding: false,
            showAbout: false,
            showProjects: false,
            showSkills: false,
            first: '',
            second: '',
            third: ''
        }

        this.handleInputEnter = this.handleInputEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showLanding = this.showLanding.bind(this);
        this.showAbout = this.showAbout.bind(this);
        this.showProjects = this.showProjects.bind(this);
        this.showSkills = this.showSkills.bind(this);
    }

    componentDidMount() {
        this.setState({ showLanding: true })
    }

    showLanding() {
        this.setState(
            {
                showLanding: true,
                showAbout: false,
                showProjects: false,
                showSkills: false
            })
    }

    showAbout() {
        this.setState(
            {
                showLanding: false,
                showAbout: true,
                showProjects: false,
                showSkills: false
            })
    }

    showProjects() {
        this.setState(
            {
                showLanding: false,
                showAbout: false,
                showProjects: true,
                showSkills: false
            })
    }

    showSkills() {
        this.setState(
            {
                showLanding: false,
                showAbout: false,
                showProjects: false,
                showSkills: true
            })
    }

    handleInputEnter(e) {
        if (e.key === 'Enter') {
            this.setCurrentComponent(this.state.currentInput)
            this.setState({
                first: this.state.currentInput,
                second: this.state.first,
                third: this.state.second,
                currentInput: ''
            })
        }
    }

    setCurrentComponent(value) {
        if (value === 'hello') {
            this.showLanding()
        }
        else if (value === 'about') {
            this.showAbout()
        }
        else if (value == 'skills') {
            this.showSkills()
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
                style={{ marginTop: '2em', marginBottom: '4em' }}>
                <History first={this.state.first}
                    second={this.state.second}
                    third={this.state.third}
                />
                <Tooltip
                    title="Available commands: hello, about, skills"
                    placement="right"
                    style={{ marginBottom: '6em' }}>
                    <Input value={this.state.currentInput}
                        onKeyPress={(e) => this.handleInputEnter(e)}
                        onChange={this.handleChange} />
                </Tooltip>
                {this.state.showLanding && <Landing animate={this.state.showLanding} />}
                {this.state.showAbout && <About animate={this.state.showAbout} />}
                {this.state.showSkills && <Technologies animate={this.state.showSkills} />}
            </Grid >
        )
    }
}
