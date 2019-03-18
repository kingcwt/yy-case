import { constants } from './'

export const getInitListData = () => {
	let data = [
		{
			title:'产品宣传会',
			company:'旺泰金控-鼎城典当',
			lxr:'刘立冬',
			time:'2018-12-13 9:00',
			state:'已结束',
			tel:'18910880509',
			peopleNumber:20,
			address:'朝阳区小营北路11号和泰大厦a座4层'
		},
		{
			title:'应聘找人',
			company:'华悦金服',
			lxr:'张旭',
			time:'2018-12-13 12:18',
			state:'已结束',
			tel:'17706541256',
			peopleNumber:50,
			address:'朝阳区住邦2000-3号楼1008'
		},{
			title:'签对公，有返费，车贷，0.83起，房抵0.6',
			company:'华信金融',
			lxr:'张燕',
			time:'2018-12-13 14:00',
			state:'已结束',
			tel:'18910880509',
			peopleNumber:20,
			address:'朝阳区东三环7号财富中心a座43层'
		}
	]
	return{
		type:constants.GET_INIT_LIST_DATA,
		payload:data
	}
}




