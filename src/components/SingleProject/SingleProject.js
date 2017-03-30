import React, { Component, PropTypes } from 'react';
import Carousel from '../Carousel/Carousel';

export default class SingleProject extends Component{
    render() {
        const{ singleproject } = this.props;

        return(
            <div className="single-project">
                <Carousel carousel={ singleproject.images }/>

                <h3>{ singleproject.name }</h3>
                <h4>Price: ${ singleproject.price }</h4>
                <p>{ singleproject.snippet }</p>
            </div>
        );
    }
}