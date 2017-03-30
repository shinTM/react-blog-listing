import React, { Component, PropTypes } from 'react';

export default class Blog extends Component{
	state = {
		titleName: 'Our categories',
	};

	render() {
		return(
			<div>
				{/*<h2>{ this.state.isOpenCategory ? this.state.titleName : this.state.categoryName }</h2>*/}
				<h2>{ this.state.titleName }</h2>
				{ this._getTerms() }
			</div>
		);
	}

	_getTerms() {
		//const{ categories } = this.props;
		console.log(this.props);

		/*if(!this.state.isOpenCategory) return null;

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
		);*/
	}

}
