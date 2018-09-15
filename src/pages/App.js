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
            <div className="showContent">
              <div className="chatItem">
                <img className="chatAvater" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1934952861,3453579486&fm=27&gp=0.jpg" />
                <div className="chatContent">
                  <h3 className="chatName">hewenli</h3>
                  <div className="sentContet">
                    <p className="chatText">12341234123412341234123412341234123奥术大师多阿萨德爱上412341234123412341234123412341234123奥术大师多阿萨德爱上412341234123412341234123412341234123奥术大师多阿萨德爱上412341234123412341234123412341234123奥术大师多阿萨德爱上4</p>
                  </div>
                </div>
              </div>
              <div className="chatItem">
                <img className="chatAvater" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1934952861,3453579486&fm=27&gp=0.jpg" />
                <div className="chatContent">
                  <h3 className="chatName">hewenli</h3>
                  <div className="sentContet">
                    <p className="chatText">12341234123412341234123412341234123奥术大师多阿萨德爱上412341234123412341234123412341234123奥术大师多阿萨德爱上412341234123412341234123412341234123奥术大师多阿萨德爱上412341234123412341234123412341234123奥术大师多阿萨德爱上4</p>
                  </div>
                </div>
              </div>
              <div className="chatItem chatself">
                <div className="chatContent">
                  <h3 className="chatName">hewenli</h3>
                  <div className="sentContet sentSelfContet">
                    <p className="chatText">12341234123412341234123412341234123奥术大师多阿萨德爱上412341234123412341234123412341234123奥术大师多阿萨德爱上412341234123412341234123412341234123奥术大师多阿萨德爱上412341234123412341234123412341234123奥术大师多阿萨德爱上4</p>
                  </div>
                </div>
                <img className="chatAvater" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1934952861,3453579486&fm=27&gp=0.jpg" />
              </div>
              <div className="chatItem chatself">
                <div className="chatContent">
                  <h3 className="chatName">hewenli</h3>
                  <div className="sentContet sentSelfContet">
                    <p className="chatText">12341234123</p>
                  </div>
                </div>
                <img className="chatAvater" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1934952861,3453579486&fm=27&gp=0.jpg" />
              </div>
            </div>
            <div className="inputBox">
              <div className="tool">
                <span className="iconfont icon-biaoqing"></span>
                <span className="iconfont icon-tupian"></span>
              </div>
              <div className="inputText">
                <textarea placeholder="123" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
