import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Signin from './components/Signin/Signin';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
              params={particlesOptions}
        />
        <Signin />
      </div>
    );
  }
}

export default App;