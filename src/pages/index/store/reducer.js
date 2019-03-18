import { constants } from './'
import home from '../../../static/img/home.png'
import che from '../../../static/img/che.png'
import xinyong from '../../../static/img/xinyong.png'

const defaultState={
	data:[],
	current: 0,
	showContent:1,// 默认显示 1房贷  2车贷 3信用
	footerData:[
	    { title: '机构', iconType: 'bullet-list'},
	    { title: '甩单', iconType: 'lightning-bolt'},
	    { title: '活动', iconType: 'folder'},
	    { title: '广场', iconType: 'streaming'},
	    { title: '我的', iconType: 'user'}
	],
	topLKData:[
		{
			imgUrl:home,
			text:'房贷'
		},
		{
			imgUrl:che,
			text:'车贷'
		},
		{
			imgUrl:xinyong,
			text:'信用'
		}
	]
}

export default (state = defaultState, action) => {
	
	switch (action.type)
	{
		case constants.GET_INIT_LIST_DATA:
			
			return Object.assign({}, state, {
				data: action.data
			})
		case constants.SWITCH_FOOTER_MENU:
			return Object.assign({}, state, {
				current: action.data
			})
		case constants.SWITCH_TOP_MENU_DATA:
			return Object.assign({}, state, {
				data: action.data
			})
		default:
			return state;
	}
	return state
}