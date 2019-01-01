import React, { Component } from 'react';
import './CSSReset.css'
import './App.css';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Landing from './components/Landing';
import Sidenav from './components/sidenav/Sidenav';
import withMoveAppearance from './components/animations/withMoveAppearence';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLanding: false,
      showAbout: false,
      showProjects: false
    }

    this.showLanding = this.showLanding.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.showProjects = this.showProjects.bind(this);
  }

  componentDidMount() {
    this.setState({
      showLanding: true
    })
  }

  showLanding() {
    this.setState(
      {
        showLanding: true,
        showAbout: false,
        showProjects: false
      })
  }

  showAbout() {
    this.setState(
      {
        showLanding: false,
        showAbout: true,
        showProjects: false
      })
  }

  showProjects() {
    this.setState(
      {
        showLanding: false,
        showAbout: false,
        showProjects: true
      })
  }

  render() {
    return (
      <div className='centered'>
        <Sidenav
          showAbout={() => this.showAbout()}
          showLanding={() => this.showLanding()}
          showProjects={() => this.showProjects()}
        />
        <div className='content'>
          {withMoveAppearance(<Landing showAbout={this.showAbout} />, this.state.showLanding)}
          {withMoveAppearance(<About />, this.state.showAbout)}
          {withMoveAppearance(<Projects />, this.state.showProjects)}
        </div >
      </div >
    );
  }
}

export default App;
