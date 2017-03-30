import React, { Component, PropTypes } from 'react';

export default class Project extends Component{
    render() {
        const{ project, onClick } = this.props;

        return(
            <div className="inner-wrapper">
                <figure>
                    <img alt={ project.name } src={ project.imageUrl }/>
                </figure>
                <h3><a href="#!" onClick={ onClick }>{ project.name }</a></h3>
                <h4>Price: ${ project.price }</h4>
                <p>{ project.snippet }</p>
                <a href="#!" className="permalink" onClick={ onClick }>view project</a>
            </div>
        );
    }


}