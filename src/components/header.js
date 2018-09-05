import React, { Component } from 'react'
const closeImg = require('../images/close.png')
const minImg = require('../images/min.png')
const zoomImg = require('../images/zoom.png')

class Header extends Component {
  render() {
    return (
      <div className="headerDrag">
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
          <div className="tab-button">
            <span className="active">
              <i className="iconfont icon-duihua"/>
            </span>
            <span>
              <i className="iconfont icon-fl-renyuan"/>
            </span>
            <span>
              <i className="iconfont icon-gongnengguanli"/>
            </span>
          </div>
          <div className="avarter">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1934952861,3453579486&fm=27&gp=0.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header
