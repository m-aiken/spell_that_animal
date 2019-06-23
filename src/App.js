import React, { Component } from 'react';
import TextForm from './components/TextForm';
import AnimalImage from './components/AnimalImage';
import Keyboard from './components/Keyboard';
import { imageData } from './utilities/imageData';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      image: '',
      imageText: '',
      correct: null
    };
  }

  componentDidMount() {
    const randomIdx = Math.floor(Math.random() * 18);
    const randomImage = imageData[randomIdx];
    this.setState({ image: randomImage.file, imageText: randomImage.title });
  }

  updateText = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ correct: null });
    this.setState(prevState => {
      return {
        text: prevState.text + value
      };
    });
  };

  clearText = e => {
    e.preventDefault();
    this.setState({ text: '', correct: null });
  };

  resetImage = e => {
    e.preventDefault();
    const randomIdx = Math.floor(Math.random() * 18);
    const randomImage = imageData[randomIdx];
    this.setState({
      image: randomImage.file,
      imageText: randomImage.title,
      correct: null
    });
  };

  submit = e => {
    e.preventDefault();
    this.state.text === this.state.imageText
      ? this.setState({ correct: true, text: '' })
      : this.setState({ correct: false, text: '' });
  };

  render() {
    return (
      <div className="container">
        <div className="top-half">
          <div className="image-container">
            <AnimalImage image={this.state.image} />
          </div>
          <div className="text-box-container">
            <TextForm
              success={this.state.correct}
              text={this.state.text}
              clearText={this.clearText}
              resetImage={this.resetImage}
              submit={this.submit}
            />
          </div>
        </div>
        <div className="bottom-half">
          <div className="keyboard-container">
            <Keyboard updateText={this.updateText} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
