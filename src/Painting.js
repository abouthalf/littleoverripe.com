import React, { Component } from 'react';
import Parallax from 'parallax-js' 
import './Painting.css';

// Layers
import Avocados from './layers/Avocados';
import ShadowAvocados from './layers/ShadowAvocados';
import {Pit, Pit2, Pit3} from './layers/Pits';
import Sketch from './layers/Sketch';
import Palette from './layers/Palatte';

class Painting extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene)
  }

  componentWillUnmount() {
    this.parallax.disable()
  }

  render() {
    return (
      <div ref={el => this.scene = el} 
          className="Painting"
          data-relative-input="true" 
          data-clip-relative-input="false"
          data-hover-only="true"
          data-selector=".Layer">
          <Pit depth="0.1" />
          <Pit2 depth="0.15" />
          <Pit3 depth="0.20"/>
          <ShadowAvocados depth="0.35" />
          <Avocados depth="0.45" />
          <Sketch depth="0.35" />
          <Palette depth="0.35" />
      </div>
    );
  }
}

export default Painting;
