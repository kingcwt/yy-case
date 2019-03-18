import { constants } from './'

const defaultState = {
	isOpened:false,
	userInfo:{},
	data:[],
	jfgz:''
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.JFGZ_CHANGE:
			return Object.assign({},state,{
				isOpened:true
			})
		case constants.GET_INIT_LIST_DATA:
			return Object.assign({},state,{
				userInfo:action.payload.userInfo,
				data:action.payload.data,
				jfgz:action.payload.jfgz
			})
		default:
			return state
	}	
}