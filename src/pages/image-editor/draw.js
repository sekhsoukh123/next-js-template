import React from 'react';

import { Button } from 'react-bootstrap';

import { Card, CardBody } from '@paljs/ui/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class Draw extends React.Component {
  state = {
    raduis: '',

    width: '',
    height: '',
  };

  handleClick = (e) => {
    this.setState((prevState) => ({
      raduis: 'raduis',
      width: 300,
    }));
  };
  handleClickSmall = () => {
    this.setState((prevState) => ({
      width: 100,
      height: 100,
    }));
  };
  handleClickMeduim = () => {
    this.setState((prevState) => ({
      width: 300,
      height: 300,
    }));
  };
  handleClickLarge = () => {
    this.setState((prevState) => ({
      width: 600,
      height: 600,
    }));
  };

  handleClickSquare = () => {
    this.setState((prevState) => ({
      width: 300,
      height: 300,
      raduis: 'normal',
    }));
  };
  handleClickRectangle = () => {
    this.setState((prevState) => ({
      width: 400,
      height: 200,
      raduis: 'normal',
    }));
  };
  handleClickCircle = () => {
    this.setState((prevState) => ({
      width: 300,
      height: 300,
      raduis: 'raduis',
    }));
  };

  handleClickOriginal = () => {
    this.setState((prevState) => ({
      width: '',
      height: '',
      raduis: 'normal',
    }));
  };
  //  onChangeWidth = (event) => {
  //    console.log(event.target.value)
  //   this.setState({

  //     width:event.target.value,

  //     raduis : "normal"

  //   })

  //  };
  //  onChangeHeight = (event) => {
  //    console.log(event.target.value)
  //   this.setState(prevState => ({

  //     height:event.target.value ,

  //     raduis : "normal"

  //   }))

  //  };

  render() {
    return (
      <div>
        <br />
        <br />
        <Button variant="primary" type="button" onClick={this.handleClickSmall}>
          Small{' '}
        </Button>
        <Button variant="primary" type="button" onClick={this.handleClickMeduim}>
          Meduim{' '}
        </Button>
        <Button variant="primary" type="button" onClick={this.handleClickLarge}>
          Large{' '}
        </Button>
        <br />
        <br />
        <Button variant="primary" type="button" onClick={this.handleClickSquare}>
          Square{' '}
        </Button>
        <Button variant="primary" type="button" onClick={this.handleClickRectangle}>
          Rectangle{' '}
        </Button>
        <Button variant="primary" type="button" onClick={this.handleClickCircle}>
          Circle{' '}
        </Button>
        <Button variant="primary" type="button" onClick={this.handleClickOriginal}>
          Original{' '}
        </Button>
        <br /> <br />
        <img
          src="http://lorempixel.com/400/400/sports/2"
          alt="Picture of the author"
          width={this.state.width}
          height={this.state.height}
          className={this.state.raduis}
        />
        <style jsx>
          {' '}
          {`
            .raduis {
              border-radius: 50%;
            }
            .normal {
              border-radius: 0;
            }
            .image {
              position: relative;
              width: 100%; /* for IE 6 */
            }

            h2 {
              position: absolute;
              top: 300px;
              left: 0;
              width: 100%;
            }

            h2 span {
              color: white;
              font: bold 24px/45px Helvetica, Sans-Serif;
              letter-spacing: -1px;
              background: rgb(0, 0, 0); /* fallback color */
              background: rgba(0, 0, 0, 0.4);
              padding: 10px;
            }
          `}{' '}
        </style>
        <div />
      </div>
    );
  }
}
export default Draw;
