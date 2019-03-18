import { constants } from './'


const defaultState = {
	imgFiles: [],
	isShow:true,
	tzbtVal:'',
	xxnrVal:'',
	isNmConfig:{
		selector: ['不匿名', '匿名'],
		selectorChecked: '不匿名'
	}
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.HANDLE_TZBT_CHANGE:
			return Object.assign({},state,{
				tzbtVal:action.payload
			})
		case constants.HANDLE_ISNM:
			return Object.assign({},state,{
				isNmConfig:{
					selector: ['不匿名', '匿名'],
					selectorChecked:['不匿名', '匿名'][action.payload]
				}
			})
		case constants.HANDLE_XXNR_CHANGE:
			return Object.assign({},state,{
				xxnrVal:action.payload
			})
		case constants.HANDLE_IMG_UPLOAD:
			return Object.assign({},state,{
				imgFiles:action.payload,
				isShow:true
			})
		case constants.CLOSE_IMG_UPLOAD:
			return Object.assign({},state,{
				isShow:false
			})
		default:
			return state
	}
}