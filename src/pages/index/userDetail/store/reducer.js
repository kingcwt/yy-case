import { constants } from './'

const defaultState = {
	userInfo:{},
	data:[]
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.GET_INIT_LIST_DATA:
			return Object.assign({},state,{
				userInfo:action.payload.userInfo,
				data:action.payload.data
			})
		default:
			return state
	}	
}