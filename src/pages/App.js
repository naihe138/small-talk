import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headerDrag" style={{'-webkit-app-region': 'drag'}}>
          我是拖拽区域
        </div>
        <h1>Hello World!</h1>
        We are using Node.js <script>document.write(process.versions.node)</script>,
        Chromium <script>document.write(process.versions.chrome)</script>,
        and Electron <script>document.write(process.versions.electron)</script>.
      </div>
    );
  }
}

export default App;
