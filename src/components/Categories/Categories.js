import React, { Component, PropTypes } from 'react';
import Category from '../Category/Category';
import { projects } from '../../data/projects';
import Projects from '../Projects/Projects';

export default class Categories extends Component{
    state = {
        categoryId: null,
        categoryName: null,
        titleName: 'Our categories',
        isOpenCategory: true,
        isOpenProject: false,
        isOpenSingle: false
    };

    render() {
        return(
            <div>
                {/*<h2>{ this.state.isOpenCategory ? this.state.titleName : this.state.categoryName }</h2>*/}
                <h2>{ this.state.titleName }</h2>
                { this._getLinkBack() }
                { this._getCategory() }
                { this._getProjects() }
            </div>
        );
    }

    _getCategory() {
        const{ categories } = this.props;

        if(!this.state.isOpenCategory) return null;

        const categoryElements = categories.map((category) => {
            return(
                <li key={ category.age }>
                    <Category
                        category={ category }
                        onClick={ this._toggleOpenProject(category) }
                    />
                </li>
            );
        });

        return(
            <div>
                <ul className="project-categories">
                    { categoryElements }
                </ul>
            </div>
        );
    }

    _handleProjectNameClick = (param) => {
        // this.setState({
        //     titleName: param
        // });
        console.log( '---', param );
    };

    //transfer this.state.categoryId, for filtration projects
    _getProjects() {
        if(!this.state.isOpenProject) return null;

        return(
            <div>
                <Projects
                    projects={ projects }
                    onClick={ this._toggleOpenSingle }
                    categoryId={ this.state.categoryId }
                    isOpenProject={ this.state.isOpenProject }
                    isOpenSingle={ this.state.isOpenSingle }
                />
            </div>
        );
    }

    _getLinkBack() {
        if(this.state.isOpenCategory) return null;

        return (
            <button className="back-btn" onClick={ this._onClickBtn }>back</button>
        );
    }

    _onClickBtn = () => {
        this.setState({
            isOpenCategory: this.state.isOpenProject ? !this.state.isOpenCategory : this.state.isOpenCategory,
            isOpenProject: !this.state.isOpenProject,
            isOpenSingle: this.state.isOpenSingle ? !this.state.isOpenSingle : this.state.isOpenSingle,
            titleName: this.state.isOpenSingle ? this.state.categoryName : 'Our categories'
        });
    };

    _toggleOpenProject = (category) => (event) => {
        event.preventDefault();

        this.setState({
            categoryId: category.id,
            categoryName: category.name,
            isOpenProject: !this.state.isOpenProject,
            isOpenCategory: !this.state.isOpenCategory,
            titleName: category.name
        });
    };

    _toggleOpenSingle = (projectName) => (event) => {
        event.preventDefault();

        this.setState({
            isOpenSingle: !this.state.isOpenSingle,
            isOpenProject: !this.state.isOpenProject,
            titleName: projectName
        });
    };
}
