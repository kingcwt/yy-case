import { constants } from './'


const defaultState = {
	hdztVal:'',
	hddzVal:'',
	lxrVal:'',
	lxdhVal:'',
	hdrsVal:'',
	xxnrVal:'',
	companyName:'顺丰公司'
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.HANDLE_HDZT_CHANGE:
			return Object.assign({},state,{
				hdztVal:action.payload
			})
		case constants.HANDLE_HDDZ_CHANGE:
			return Object.assign({},state,{
				hddzVal:action.payload
			})
		case constants.HANDLE_LXDH_CHANGE:
			return Object.assign({},state,{
				lxdhVal:action.payload
			})
		case constants.HANDLE_HDRS_CHANGE:
			return Object.assign({},state,{
				hdrsVal:action.payload
			})
		case constants.HANDLE_XXNR_CHANGE:
			return Object.assign({},state,{
				xxnrVal:action.payload
			})
		case constants.HANDLE_LXR_CHANGE:
			return Object.assign({},state,{
				lxrVal:action.payload
			})
		default:
			return state
	}
}