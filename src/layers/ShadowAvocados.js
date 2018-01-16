import React from 'react';
import image from './backgrounds/shadows.png';
import Layer from './Layer';

const ShadowAvocados = ({hide, depth}) => {
    return <Layer className="ShadowAvocados" image={image} depth={depth} />
}

export default ShadowAvocados;