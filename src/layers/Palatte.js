import React from 'react';
import Layer from './Layer';
import image from './backgrounds/palette.png';

const Palette = ({hide, depth}) => {
    return <Layer className="Pit1" image={image} depth={depth} backgroundPosition="left center" />
}

export default Palette;