import React, { Component } from 'react';
import classnames from 'classnames';
import './Layer.css';
import {duration} from './const';

export default class Layer extends Component 
{
    render() {
        let c = classnames('Layer', this.props.className, this.props.transition);
        let styles = {
            backgroundImage: `url(${this.props.image})`,
            backgroundPosition: this.props.backgroundPosition,
            mixBlendMode: this.props.blend,
            backgroundBlendMode: this.props.blend,
            animationDuration: `${duration}s`
        };
        return <div className={c} 
                hidden={this.props.hide}
                style={styles}
                data-depth={this.props.depth}
                onAnimationIteration={this.props.handleAnimationIteration}
                onAnimationStart={this.props.handleAnimationStart}>
            {this.props.children}
        </div>
    }
}

Layer.defaultProps = {
    className: '',
    depth: '0.00',
    image: '//0',
    hide: false,
    transition: '',
    blend: 'normal',
    backgroundPosition: 'center center',
    handleAnimationIteration: function(){},
    handleAnimationStart: function() {}
}