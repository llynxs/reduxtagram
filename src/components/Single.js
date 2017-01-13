import React from 'react';
import Photo from './Photo';
import Comments from './Comments'

class Single extends React.Component {
	render() {
		const {postId} = this.props.params;
		const i = this.props.posts.findIndex((post) => post.code === postId);
		const post = this.props.posts[i];
		const postComment = this.props.comments[postId] || [];

		return (
			<div className="single-wrapper">
				<div className="single">
					<Photo i={i} post={post} {...this.props} />
					<Comments postComment={postComment} {...this.props} />
				</div>
			</div>
		)
	}
}

export default Single;