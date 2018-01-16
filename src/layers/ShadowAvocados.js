import React from 'react';
import image from './backgrounds/shadows.png';
import Layer from './Layer';
import './ShadowAvocados.css';

const ShadowAvocados = ({hide, depth}) => {
    return <Layer className="ShadowAvocados" image={image} depth={depth} />
}

export default ShadowAvocados;