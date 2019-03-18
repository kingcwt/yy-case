import home from '../../../static/img/home.png'
import news from '../../../static/img/news.png'
import { constants } from './'

const defaultState = {
	data:[],
	showContent:0,// 默认显示 0论坛  1咨询页面
	topLKData:[
		{
			imgUrl:home,
			text:'论坛'
		},
		{
			imgUrl:news,
			text:'咨询'
		}
	]
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.GET_INIT_LIST_DATA:
			return Object.assign({},state,{
				data:action.data
			})
		case constants.SWITCH_TOP_MENU_DATA:
			return Object.assign({},state,{
				showContent:action.data
			})
		default:
			return state
	}	
}