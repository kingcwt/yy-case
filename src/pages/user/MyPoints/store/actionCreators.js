import { constants } from './'

export const jfgz = () => {
	return{
		type:constants.JFGZ_CHANGE
	}
}

export const getInitListData = () => {
	let data=[
		{
			descripton:'每日登陆奖励1',
			cTime:'2019-01-10',
			info:'积分+5,原力+5'
		},{
			descripton:'每日登陆奖励2',
			cTime:'2019-01-10',
			info:'积分+5,原力+5'
		},{
			descripton:'每日登陆奖励3',
			cTime:'2019-01-10',
			info:'积分+5,原力+5'
		},{
			descripton:'每日登陆奖励4',
			cTime:'2019-01-10',
			info:'积分+5,原力+5'
		},{
			descripton:'每日登陆奖励5',
			cTime:'2019-01-10',
			info:'积分+5,原力+5'
		}	
	]
	let userInfo = {
		kyjf:50,
		ylz:35,
		lz:'1.0026'
	}
	let jfgz = '这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写'
	return {
		type:constants.GET_INIT_LIST_DATA,
		payload:{
			data,
			userInfo,
			jfgz
		}
	}
} 