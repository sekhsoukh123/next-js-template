import React, { Component } from 'react';

export class Canvas extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const img = this.refs.image;
    console.log(canvas);
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = '40px Courier';
      ctx.fillStyle = 'black';
      ctx.fillText(this.props.textToShow, 10, 180);
      // const dataURL = canvas.toDataURL();
    };
  }
  render() {
    const { imageToShow, width, height } = this.props;
    return (
      <div>
        <div>
          <h1>Image To Show</h1>
          <img ref="image" src="http://lorempixel.com/400/400/sports/2" />
        </div>
        <div>
          <h1>Canvas Image</h1>
          <canvas ref="canvas" width={width} height={height} />
        </div>
      </div>
    );
  }
}

export default Canvas;
