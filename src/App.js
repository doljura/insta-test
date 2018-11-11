import React, { Component } from 'react';
import './App.css';
import {DEFAULT_STATE, SMALL_WIDTH} from './constants';
import {Header} from './components/header';
import {AccountInfo} from './components/accountInfo';
import {PhotoArea} from './components/photoArea';
import {Tabs} from './components/tabs';
import {Stories} from './components/stories';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  setInitialState() {
    this.setState({...DEFAULT_STATE, dimensions: {
        width: window.innerWidth,
        height: window.innerHeight
    }})
  }

    updateDimensions() {
      this.setState((state) => ({
          ...state,
          dimensions: {
              width: window.innerWidth,
              height: window.innerHeight
          }
      }))
  }

  componentWillMount() {
      this.setInitialState();
      window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const {dimensions, info, stories, photoes} = this.state;
    const isSmallScreen = dimensions.width <= SMALL_WIDTH;

    return (
      <div className="App">
          <div className="main-wrapper">
              <Header {...this.state} isSmallScreen={isSmallScreen}></Header>
              {
                  isSmallScreen && (
                      <AccountInfo title={info.title} isSmallScreen={isSmallScreen}></AccountInfo>
                  )
              }
              <Stories stories={stories} />
              <Tabs></Tabs>
              <PhotoArea data={photoes}></PhotoArea>
          </div>
      </div>
    );
  }
}

export default App;
