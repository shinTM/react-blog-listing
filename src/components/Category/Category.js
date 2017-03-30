import React, { Component, PropTypes } from 'react';

export default class Category extends Component{
    render() {
        const{ category, onClick } = this.props;

        return(
            <figure>
                <figcaption>
                    <h3 onClick={ onClick }><a href="#!">{ category.name }</a></h3>
                </figcaption>
                <img alt={ category.name } src={ category.imageUrl }/>
            </figure>

        );
    }
}