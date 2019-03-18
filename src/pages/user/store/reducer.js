import { constants } from './'

/* img */
import userImg from '../../../static/img/user_header.jpg'
import jfIcon from '../../../static/img/jifen.png'
import userIcon from '../../../static/img/user.png'
import rightImg from '../../static/img/right.png'
import sd2Png from '../../../static/img/sd2.png'
import teamPng from '../../../static/img/team.png'
import releasePng from '../../../static/img/release.png'
import setPng from '../../../static/img/set.png'
import productPng from '../../../static/img/product.png'

const defaultState = {
	localData:[
				[
					{
						imgUrl:userImg,
						title:'pyy',
						description:'未注册为客户经理',
						link:'/pages/register/index',
						wh:'2rem'
					}
				],[{
					imgUrl:jfIcon,
					title:'我的积分',
					description:'积分：5， 原力：5， 蓝钻：0',
					link:'/pages/user/MyPoints/index'
				},{
					imgUrl:userIcon,
					title:'我的邀请记录',
					description:'',
					link:'/pages/user/yqjl/index'
				}],
				[{
					imgUrl:productPng,
					title:'发布新产品',
					description:'',
					link:'/pages/releaseProduct/index'
				}],
				[{
					imgUrl:sd2Png,
					title:'发布新甩单',
					link:'/pages/releaseSd/index'
				}],
				[{
					imgUrl:teamPng,
					title:'发布新活动',
					description:'',
					link:'/pages/releaseHd/index'
				}],
				[{
					imgUrl:releasePng,
					title:'发布新帖子（需要50积分）',
					description:'',
					link:'/pages/releaseTz/index'
				}],
				[{
					imgUrl:setPng,
					title:'设置',
					description:'',
					link:'/pages/sysSet/index'
				}]
			]
}

export default (state = defaultState, action) => {
	switch (action.type){
		default:
			return state
	}
}