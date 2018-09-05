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
            左边联系人
          </div>
          <div className="content">
            右边聊天内容
          </div>
        </section>
      </div>
    );
  }
}

export default App;
