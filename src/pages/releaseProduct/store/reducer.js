import { constants } from './'

const defaultState = {
	imgFiles: [],
	xq:1,	//1 简单 2精细
	isShow:true,
	cpjsVal:'',
	cpmcVal:'',
	yllVal:'',
	fwfyVal:'',
	dkedVal:'',
	dkqxVal:'',
	fkzqVal:'',
	hkfsVal:'', 
	ysVal:'', 
	cpysVal:'', 
	sqtjVal:'', 
	sxclVal:'',	
	bllcVal:'', 
	fytsVal:'', 
	qtxxVal:'',
	cplxConfig:{
		selector: ['房屋抵押', '车辆抵押', '无抵押', '垫资','信用卡','股票配资','高息','零用贷','其他'],
		selectorChecked: ''
	},
	xqlxConfig:{
		selector: ['简单版', '精细版'],
		selectorChecked: ''
	}
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.HANDLE_CPMC_CHANGE:
			return Object.assign({},state,{
				cpmcVal:action.payload
			})
		case constants.HANDLE_CPJS_CHANGE:
			return Object.assign({},state,{
				cpjsVal:action.payload
			})
		case constants.CLOSE_IMG_UPLOAD:
			return Object.assign({},state,{
				imgFiles:action.payload,
				isShow:false
			})
		case constants.HANDLE_IMG_CHANGE:
			return Object.assign({},state,{
				imgFiles:action.payload,
				isShow:true
			})
		case constants.HANDLE_CPLX_CHANGE:
			return Object.assign({},state,{
				cplxConfig:{
					selector: ['房屋抵押', '车辆抵押', '无抵押', '垫资','信用卡','股票配资','高息','零用贷','其他'],
					selectorChecked:['房屋抵押', '车辆抵押', '无抵押', '垫资','信用卡','股票配资','高息','零用贷','其他'][action.payload]
				}
			})
		case constants.HANDLE_XQLX_CHANGE:
			return Object.assign({},state,{
				xqlxConfig:{
					selector: ['简单版', '精细版'],
					selectorChecked:['简单版', '精细版'][action.payload]
				}
			})
		case constants.HANDLE_YLL_CHANGE:
			return Object.assign({},state,{
				yllVal:action.payload
			})
		case constants.HANDLE_FWFY_CHANGE:
			return Object.assign({},state,{
				fwfyVal:action.payload
			})
		case constants.HANDLE_DKED_CHANGE:
			return Object.assign({},state,{
				dkedVal:action.payload
			})
		case constants.HANDLE_DKQX_CHANGE:
			return Object.assign({},state,{
				dkqxVal:action.payload
			})
		case constants.HANDLE_FKZQ_CHANGE:
			return Object.assign({},state,{
				fkzqVal:action.payload
			})
		case constants.HANDLE_HKFS_CHANGE:
			return Object.assign({},state,{
				hkfsVal:action.payload
			})
		case constants.HANDLE_YS_CHANGE:
			return Object.assign({},state,{
				ysVal:action.payload
			})
		case constants.HANDLE_CPYS_CHANGE:
			return Object.assign({},state,{
				cpysVal:action.payload
			})
		case constants.HANDLE_SQTJ_CHANGE:
			return Object.assign({},state,{
				sqtjVal:action.payload
			})
		case constants.HANDLE_SXCL_CHANGE:
			return Object.assign({},state,{
				sxclVal:action.payload
			})
		case constants.HANDLE_BLLC_CHANGE:
			return Object.assign({},state,{
				bllcVal:action.payload
			})
		case constants.HANDLE_FYTS_CHANGE:
			return Object.assign({},state,{
				fytsVal:action.payload
			})
		case constants.HANDLE_QTXX_CHANGE:
			return Object.assign({},state,{
				qtxxVal:action.payload
			})
		default:
			return state
	}
}