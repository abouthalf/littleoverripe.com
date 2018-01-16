import React from 'react';
import pit from './backgrounds/pits.png';
import pit2 from './backgrounds/pits2.png';
import pit3 from './backgrounds/pits3.png';
import Layer from './Layer';

export const Pit = ({hide, depth}) => {
    return <Layer className="Pit1" image={pit} depth={depth} blend="multiply" />
}

export const Pit2 = ({hide, depth}) => {
    return <Layer className="Pit2" image={pit2} depth={depth} blend="normal" />
}

export const Pit3 = ({hide, depth}) => {
    return <Layer className="Pit3" image={pit3} depth={depth} blend="screen" />
}

