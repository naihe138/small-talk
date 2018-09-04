import React, { Component } from 'react';
import '../css/App.css';

const closeImg = require('../images/close.png')
const minImg = require('../images/min.png')
const zoomImg = require('../images/zoom.png')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headerDrag" style={{'-webkit-app-region': 'drag'}}>
          <div className="search" style={{'-webkit-app-region': 'drag'}}>
            <div className="sysTool">
              <span><img src={closeImg}></img></span>
              <span><img src={minImg}></img></span>
              <span><img src={zoomImg}></img></span>
            </div>
            <div className="searinput">
              <input placeholder="搜索好友...enter" />
            </div>
          </div>
          <div className="tab" style={{'-webkit-app-region': 'drag'}}>
            <div>asd</div>
            <div>头像</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
