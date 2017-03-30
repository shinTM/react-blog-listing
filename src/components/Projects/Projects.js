import React, { Component, PropTypes } from 'react';
import Project from '../Project/Project';
import SingleProject from '../SingleProject/SingleProject';

export default class Projects extends Component{
    state = {
        isOpenSingle: false,
        projectId: ''
    };

    render() {
        return(
            <div>
                { this._getProjects() }
                { this._getSingleProject() }
            </div>
        );
    }

    _getProjects() {
        const{ projects, onClick, categoryId, handleClick } = this.props;

        if(this.state.isOpenSingle) return null;

        const projectsElements = projects.map((project) => {

            if(project.category !== categoryId) return null;

            return(
                <li key={ project.age }>
                    <Project
                        project={ project }
                         //onClick={ this._toggleOpen(project) } //по клику получу object
                        onClick={ onClick(project.name) }  //по клику измениться state в родителе
                        //onClick={ this._handleClick(project) }
                    />
                </li>
            );
        });

        return(
            <ul className="projects">
                { projectsElements }
            </ul>
        );
    }

    _toggleOpen = (project) => (event) => {
        event.preventDefault();

        this.setState({
            projectId: project.id,
        });
    };

    _getSingleProject() {
        const{ projects, isOpenSingle } = this.props;

        if(isOpenSingle) return null;

        const singleProjectElem = projects.map((project) => {
            if(project.id !== this.state.projectId) return null;

            return(
                <div key={ project.age }>
                    <SingleProject singleproject={ project }/>
                </div>
            );
        });

        // const elem =  projects.filter((project) => {
        //     return project.id === this.state.projectId;
        // })[0];
        //
        // console.log( '---', { singleProjectElem } );

        return(
            <div>
                { singleProjectElem }
            </div>
        );
    }
}