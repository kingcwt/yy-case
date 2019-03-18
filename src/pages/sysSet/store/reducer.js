import { constants } from './'
import loginPng from '../../../static/img/login.png'
import questionPng from '../../../static/img/question.png'
import fkPng from '../../../static/img/fk.png'
import aboutPng from '../../../static/img/about.png'

const defaultState = {
	localData:[
		[{
			imgUrl:loginPng,
			title:'重新登录',
			description:'如果遇到使用问题，可以尝试重新登陆'
		}],
		[{
			imgUrl:fkPng,
			title:'反馈',
			description:''
		},
		{
			imgUrl:questionPng,
			title:'常见问题',
			description:''
		}],
		[{
			imgUrl:aboutPng,
			title:'关于',
			description:'如果遇到使用问题，可以尝试重新登陆'
		}]

	]
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.HANDLE_SDBT_CHANGE:
			return Object.assign({},state,{
				sdbtVal:action.payload
			})
		
		default:
			return state
	}
}