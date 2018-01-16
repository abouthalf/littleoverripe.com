import React from 'react';
import image from './backgrounds/avocados.png';
import Layer from './Layer';
import './Avocados.css';

const Avocados = ({hide, depth}) => {
    return <Layer className="Avocados" depth={depth}>
        <Layer className="AvocadosImage" image={image} transition="breath" />
    </Layer>
}

export default Avocados;