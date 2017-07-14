const test = (state = {}, action) => {
	console.log(action)
	switch(action.type) {
		case 'TEST':
		return {message: action.payload}
	} 
	
	return state
} 

export {test}