import React from 'react';
import {Link} from 'react-router';



class Photo extends React.Component {
	getTheCode() {
		return this.props.post.code;
	}

	render() {
		const {post, i, comments} = this.props;
		return (
			<div className="photo-item">
				<div className="photo-item-wrap">
					<Link className="photo-item-link" to={'/view/' + this.getTheCode()}>
						<img src={post.display_src} alt={post.caption} />
					</Link>
					<span>
						<Link to={'/view/' + this.getTheCode()}>
							{this.props.post.caption}
						</Link>
					</span>
				</div>
				<div className="photo-likes">
					<div className="photo-likes-button">
						<button className="photo-likes-button__button" onClick={this.props.increment.bind(null, i)}>
							&hearts; {post.likes}
						</button>
					</div>
					<div className="photo-likes-link">
						<Link to={'/view/' + this.getTheCode()}>
							{comments[post.code] ? comments[post.code].length : 0}
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Photo;