import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {
	render() {
		return (
			<div>
				<header className="header">
					<h1 className="header-heading">
						Photo grid
					</h1>
				</header>
				<div className="photo-list">
					{this.props.posts.map(
						(post, i) => <Photo {...this.props} key={i} i={i} post={post} />
						)
					}
				</div>
			</div>
		)
	}
}

export default PhotoGrid;