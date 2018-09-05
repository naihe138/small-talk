import React, { Component } from 'react'
import '../css/App.css'

import Header from '../components/header'

const closeImg = require('../images/close.png')
const minImg = require('../images/min.png')
const zoomImg = require('../images/zoom.png')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="container">
          <div className="connet">

          </div>
          <div className="content">

          </div>
        </section>
      </div>
    );
  }
}

export default App;
