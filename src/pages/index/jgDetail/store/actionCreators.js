import { constants } from './'

export const getInitListData = () => {
	let jgInfo = {
		note:'朝阳区住邦2000-3号楼1008',
		title:'华悦金服',
		thumb:'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
	}
	let jgData = [
		{
			note:'诚交各路英豪',
			title:'周子栋 经理',
			extraText:'2产品',
			thumb:'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
		},{
			note:'专业房贷业务，资料齐全当天下款',
			title:'李江龙 经理',
			extraText:'0产品',
			thumb:'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
		},{
			note:'',
			title:'英子 经理',
			extraText:'0产品',
			thumb:'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
		},{
			note:'诚交各路英豪',
			title:'周子栋 经理',
			extraText:'2产品',
			thumb:'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
		},{
			note:'专业房贷业务，资料齐全当天下款',
			title:'李江龙 经理',
			extraText:'0产品',
			thumb:'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
		},{
			note:'',
			title:'英子 经理',
			extraText:'0产品',
			thumb:'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
		},{
			note:'诚交各路英豪',
			title:'周子栋 经理',
			extraText:'2产品',
			thumb:'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
		},{
			note:'诚交各路英豪',
			title:'周子栋 经理',
			extraText:'2产品',
			thumb:'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
		}
	]
	return{
		type:constants.GET_INIT_LIST_DATA,
		payload:{
			jgInfo,
			jgData
		}
	}
}