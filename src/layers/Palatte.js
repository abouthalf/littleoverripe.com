import React from 'react';
import Layer from './Layer';
import image from './backgrounds/palette.png';
import './Palette.css';

const Palette = ({hide, depth}) => {
    return <Layer className="Palette" image={image} depth={depth} backgroundPosition="left center" />
}

export default Palette;