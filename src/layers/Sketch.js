import React from 'react';
import Layer from './Layer';
import image from './backgrounds/sketch.png';

const Sketch = ({hide, depth}) => {
    return <Layer className="Pit1" image={image} depth={depth} blend="color-burn" backgroundPosition="right center" />
}

export default Sketch;