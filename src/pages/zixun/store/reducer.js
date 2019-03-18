import { constants } from './'

const defaultState = {
	data:[],
	swiperData:[]
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.GET_INIT_LIST_DATA:
			return Object.assign({},state,{
				data:action.payload.data,
				swiperData:action.payload.swiperData
			})
		default:
			return state
	}	
}