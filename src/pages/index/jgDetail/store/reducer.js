import { constants } from './'

const defaultState = {
	jgInfo:{},
	jgData:[]
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.GET_INIT_LIST_DATA:
			return Object.assign({},state,{
				jgInfo:action.payload.jgInfo,
				jgData:action.payload.jgData
			})
		default:
			return state
	}	
}