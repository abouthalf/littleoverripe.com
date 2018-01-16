import React from 'react';
import image from './backgrounds/avocados.png';
import Layer from './Layer';
import './Avocados.css';

const Avocados = ({hide, depth}) => {
    return <Layer className="Avocados" image={image} depth={depth} transition="breath" />
}

export default Avocados;