import React, { Component } from 'react';

export default class circle extends Component {
  render() {
    return (
      <div>
        <img src="https://geology.com/world/united-states-map-with-state-names.gif" />
        <svg className="circle" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="none" />
        </svg>

        <style jsx>
          {' '}
          {`
            .circle {
              position: absolute;
              top: 95px;
              left: 400px;
            }
          `}{' '}
        </style>
      </div>
    );
  }
}
