import React from 'react';
import {Link} from 'react-router';

class MainPage extends React.Component {
	render() {
		return (
			<div className="main">
				<header className="main-header">
					<h1 className="main-header__heading">
						<Link to="/">Reduxtagram</Link>
					</h1>
				</header>
				<section>
					{this.props.cildren}
					{React.cloneElement(this.props.children, this.props)}
				</section>
			</div>
		)
	}
}

export default MainPage;