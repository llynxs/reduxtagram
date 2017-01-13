//likes
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

//add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADDING_COMMENT',
		postId,
		author,
		comment
	}
}

//remowe comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVING_COMMENT',
		i,
		postId
	}
}