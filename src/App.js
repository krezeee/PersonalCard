import React, { Component } from 'react';
import './App.css';
import About from './components/about/About';
import Projects from './components/Projects';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Landing from './components/Landing';
import withAnimation from './components/withAnimation';
import Theme from './components/Theme';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutDetails: false,
      isDarkTheme: false
    }

    this.expandAbout = this.expandAbout.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme
    })
  }

  expandAbout() {
    this.setState({
      aboutDetails: true
    })
  }

  render() {

    return (
      <div>
        <Theme isDarkTheme={this.state.isDarkTheme} />
        <Header toggleTheme={this.toggleTheme}
          isDarkTheme={this.state.isDarkTheme} />
        <div className="App">
          {this.state.aboutDetails
            ? <div className='centered'>
              <About />
              {/* {withAnimation(Projects, 900)} */}
              {withAnimation(Technologies, 1100)}
            </div>
            : <Landing action={this.expandAbout} />
          }
        </div >
      </div>
    );
  }
}

export default App;
