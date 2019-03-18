import { constants } from './'


const defaultState = {
	imgFiles:[],
	selectCompayIsShow:false,
	companyName:'',
	isShow:true,
	bzVal:'',
	wechatVal:'',
	telVal:'',
	nameVal:'',
	data:[]
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.HANDLE_NAME_CHANGE:
			return Object.assign({},state,{
				nameVal:action.payload
			})
		case constants.HANDLE_TEL_CHANGE:
			return Object.assign({},state,{
				telVal:action.payload
			})
		case constants.HANDLE_WECHAT_CHANGE:
			return Object.assign({},state,{
				wechatVal:action.payload
			})
		case constants.HANDLE_BZ_CHANGE:
			return Object.assign({},state,{
				bzVal:action.payload
			})
		case constants.HANDLE_CLICK_COMPANY:
			return Object.assign({},state,{
				selectCompayIsShow:true
			})
		case constants.CLOSE_SELECT_COMPANY:
			return Object.assign({},state,{
				selectCompayIsShow:false
			})
		case constants.CLICK_SELECT_COMPANY:
			return Object.assign({},state,{
				companyName:action.payload,
				selectCompayIsShow:false
			})
		case constants.HANDLE_IMG_CHANGE:
			return Object.assign({},state,{
				imgFiles:action.payload,
				isShow:true
			})
		case constants.CLOSE_IMG_UPLOAD:
			return Object.assign({},state,{
				imgFiles:action.payload,
				isShow:false
			})
		case constants.GET_INIT_LIST_DATA:
			return Object.assign({},state,{
				data:action.payload
			})
		default:
			return state
	}
}