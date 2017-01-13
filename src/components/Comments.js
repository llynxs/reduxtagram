import React from 'react';

class Comments extends React.Component {
	renderComment(comment, i) {
		return (
			<li className="comment-item" key={i}>
				<p>
					<strong className="comment-item__author">{comment.user}:&nbsp; </strong>
					<span className="comment-item__comment">{comment.text}&nbsp;</span>
					<button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>
						&times;
					</button>
				</p>
			</li>
		)
	};

	handleSubmit(e) {
		e.preventDefault();

		const {postId} = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;

		if ((comment === '' && author === '') || ((author !== '' && comment === '') || (author === '' && comment !== ''))) {
			return false;
		} else {
			this.props.addComment(postId, author, comment);
			this.refs.commentForm.reset();
		}
	}

	render() {
		return (
			<div className="comments">
				<ul className="comments-list">
					{this.props.postComment.map(this.renderComment.bind(this))}
				</ul>
				<form className="comments-form" ref="commentForm" onSubmit={this.handleSubmit.bind(this)}>
						<input className="comments-form__input" type="text" ref="author" placeholder="author" />
						<input className="comments-form__input" type="text" ref="comment" placeholder="comment" />
						<input type="submit" hidden="hidden" />
					</form>
			</div>
		)
	}
}

export default Comments;
