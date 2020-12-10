import React from 'react';

import { Button } from 'react-bootstrap';

import { Card, CardBody } from '@paljs/ui/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class ClickPosition extends React.Component {
  state = { x: '200', y: '200', visibilityCircle: false, visibilityRect: false };

  onMouseMove = (e) => {
    var a = e.nativeEvent.offsetX;
    var b = e.nativeEvent.offsetY;
    console.log(a, b);

    this.setState({
      x: a,
      y: b,
    });
  };

  handleClick = () => {
    var a = this.state.x;
    var b = this.state.y;
    console.log(a, b);
    this.setState({
      visibilityCircle: true,
    });
  };
  handleClickRect = () => {
    var a = this.state.x;
    var b = this.state.y;
    console.log(a, b);
    this.setState({
      visibilityRect: true,
    });
  };

  handleClickSquar = () => {
    var a = this.state.x;
    var b = this.state.y;
    console.log(a, b);
    this.setState({
      visibilitySquar: true,
    });
  };

  render() {
    return (
      <div>
        <div id="tui-image-editor"></div>

        <div ref="elem" className="container">
          <img
            onClick={this.onMouseMove}
            src="https://static8.depositphotos.com/1062035/818/i/600/depositphotos_8184062-stock-photo-business-sedan.jpg"
            width="400"
            height="400"
          />
          {this.state.visibilityCircle && (
            <svg style={{ position: 'absolute', top: this.state.y, left: this.state.x }} className="circle">
              <circle cx="50" cy="20" r="20" stroke="red" strokeWidth="5" fill="none" />
            </svg>
          )}
          {this.state.visibilityRect && (
            <svg style={{ position: 'absolute', top: this.state.y, left: this.state.x }}>
              <rect width="100" height="50" fill="none" strokeWidth="5" stroke="blue" />
            </svg>
          )}

          {this.state.visibilityRect && (
            <svg style={{ position: 'absolute', top: this.state.y, left: this.state.x }}>
              <rect width="50" height="50" fill="none" strokeWidth="5" stroke="blue" />
            </svg>
          )}
        </div>
        <button onClick={this.handleClick}>{'Circle'}</button>

        <button onClick={this.handleClickRect}>{'Rect'}</button>
        <button onClick={this.handleClickSquar}>{'Rect'}</button>
      </div>
    );
  }
}
export default ClickPosition;
