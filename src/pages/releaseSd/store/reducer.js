import { constants } from './'


const defaultState = {
	sdbtVal:'',
	xxnrVal:'',
	imgFiles: [],
	isShow:true,
	isNmConfig:{
		selector: ['不匿名', '匿名'],
		selectorChecked: '不匿名'
	},
	cplxConfig:{
		selector: ['房屋抵押', '车辆抵押','无抵押','垫资','信用卡','股票配资','高息','零用贷','其他'],
		selectorChecked: '点击选择'
	}
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.HANDLE_SDBT_CHANGE:
			return Object.assign({},state,{
				sdbtVal:action.payload
			})
		case constants.HANDLE_ISNM:
			return Object.assign({},state,{
				isNmConfig:{
					selector: ['不匿名', '匿名'],
					selectorChecked:['不匿名', '匿名'][action.payload]
				}
			})
		case constants.HANDLE_CPLX_CHANGE:
			return Object.assign({},state,{
				cplxConfig:{
					selector: ['房屋抵押', '车辆抵押','无抵押','垫资','信用卡','股票配资','高息','零用贷','其他'],
					selectorChecked:['房屋抵押', '车辆抵押','无抵押','垫资','信用卡','股票配资','高息','零用贷','其他'][action.payload]
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
				imgFiles:action.payload,
				isShow:false
			})
		default:
			return state
	}
}