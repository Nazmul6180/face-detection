import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkF/imageLinkForm';
import Rank from './components/rank/Rank';

class App extends Component {
  constructor() {
    super();
    this.state={
      input : "",
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onBtnSubmit = () => {
    console.log('click');
  }

  render() {
      return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit}/>
        {/* 
        <faceRecognitaion /> */}
      </div>
    );
  }
 
}

export default App;
