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
          <div className="connetBox">
            <ul>
              <li className="listItem">
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1934952861,3453579486&fm=27&gp=0.jpg" />
                <div className="nameBox">
                  <h3>名字阿萨德</h3>
                  <p>asdasdasdasd</p>
                </div>
              </li>
              <li className="listItem active">
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1934952861,3453579486&fm=27&gp=0.jpg" />
                <div className="nameBox">
                  <h3>名字阿萨德</h3>
                  <p>asdasdasdasd</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="contentBox">
            右边聊天内容
          </div>
        </section>
      </div>
    );
  }
}

export default App;
