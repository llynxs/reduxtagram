//reducer takes two things
//1 - action
//2 - copy of state

function postedComments(state = [], action) {
	switch(action.type) {
		case 'ADDING_COMMENT':
			return [
				...state,
				{
					user: action.author,
					text: action.comment,
				}
			];

		case 'REMOVING_COMMENT':
			console.log('removing');

			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			]

		default:
			return state;
	}
}

function comments(state = [], action) {
	if (typeof action.postId !== undefined) {
		return {
			//takes current state
			...state,

			//overwrite this post with a new one
			[action.postId]: postedComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;