import React from 'react';
import Layer from './Layer';
import image from './backgrounds/sketch.png';
import './Sketch.css';

const Sketch = ({hide, depth}) => {
    return <Layer className="Sketch" image={image} depth={depth} blend="color-burn" backgroundPosition="right center" />
}

export default Sketch;