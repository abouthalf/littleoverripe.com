import React from 'react';
import history from './backgrounds/slightly-overripe.gif';
import Layer from './Layer';
import './History.css';

export default History = ({hide, depth}) => {
    return <Layer className="History" 
        image={history} 
        depth={depth} 
        blend="difference"
        backgroundPosition="center top" />
}