import React, { Component, PropTypes } from 'react';

export default class Carousel extends Component{
    render() {
        const{ carousel } = this.props; //[]

        const images = carousel.map((image, i) => {
            return(
                <li key={ image[i] }><img alt="" src={ image }/></li>
            );
        });

        return(
            <div className="slides">
                <ul className="carousel">
                    { images }
                </ul>

                <div className="navigations">
                <span className="prev" />
                <span className="next" />
                </div>
            </div>
        );
    }
}