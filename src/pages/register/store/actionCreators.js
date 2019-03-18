import { constants } from './'

export const handleNameChange = (arg) => {
	return {
		type:constants.HANDLE_NAME_CHANGE,
		payload:arg
	}
}

export const handleTelChange = (arg) => {
	return {
		type:constants.HANDLE_TEL_CHANGE,
		payload:arg
	}
}

export const handleWeChatChange = (arg) => {
	return {
		type:constants.HANDLE_WECHAT_CHANGE,
		payload:arg
	}
}

export const handleBzChange = (arg) => {
	return {
		type:constants.HANDLE_BZ_CHANGE,
		payload:arg
	}
}

export const handleClickCompany = () => {
	return {
		type:constants.HANDLE_CLICK_COMPANY
	}
}

export const closeSelectCompany = () => {
	return {
		type:constants.CLOSE_SELECT_COMPANY
	}
}

export const clickSelectCompany = (e) => {
	return {
		type:constants.CLICK_SELECT_COMPANY,
		payload:e
	}
}

export const handleImgChange = (e) => {
	console.log(e.length,1111111111);
	if(e.length>=3){
		return {
			type:constants.CLOSE_IMG_UPLOAD,
			payload:e
		}
	}else{
		return {
			type:constants.HANDLE_IMG_CHANGE,
			payload:e
		}
	}
}

export const getInitListData = () => {
	let data = [
		{
			headerImg:'../../static/img/user01.jpg',
			title:'微信客服:13056',
			description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
			url:''
		},
		{
			headerImg:'../../static/img/user01.jpg',
			title:'圆满资本',
			description:'昭阳区三元桥元岗中心b座1605',
			url:''
		},
		{
			headerImg:'',
			title:'中泰荣盛',
			description:'昭阳区建国门外东方瑞景2号楼1510',
			url:''
		},
		{
			headerImg:'',
			title:'首金担保',
			description:'昭阳区惠中北里310号楼2803室，1902室',
			url:''
		},
		{
			headerImg:'../../static/img/user01.jpg',
			title:'垫资-个人银装中泰荣盛',
			description:'',
			url:''
		},
		{
			headerImg:'../../static/img/user01.jpg',
			title:'微信客服:13056',
			description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
			url:''
		},
		{
			headerImg:'../../static/img/user01.jpg',
			title:'圆满资本',
			description:'昭阳区三元桥元岗中心b座1605',
			url:''
		},
		{
			headerImg:'',
			title:'中泰荣盛',
			description:'昭阳区建国门外东方瑞景2号楼1510',
			url:''
		},
		{
			headerImg:'',
			title:'首金担保',
			description:'昭阳区惠中北里310号楼2803室，1902室',
			url:''
		},
		{
			headerImg:'../../static/img/user01.jpg',
			title:'垫资-个人银装中泰荣盛',
			description:'',
			url:''
		},
		{
			headerImg:'../../static/img/user01.jpg',
			title:'微信客服:13056',
			description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
			url:''
		},
		{
			headerImg:'../../static/img/user01.jpg',
			title:'圆满资本',
			description:'昭阳区三元桥元岗中心b座1605',
			url:''
		},
		{
			headerImg:'',
			title:'中泰荣盛',
			description:'昭阳区建国门外东方瑞景2号楼1510',
			url:''
		},
		{
			headerImg:'',
			title:'首金担保',
			description:'昭阳区惠中北里310号楼2803室，1902室',
			url:''
		},
		{
			headerImg:'../../static/img/user01.jpg',
			title:'垫资-个人银装中泰荣盛',
			description:'',
			url:''
		}
	]
	return {
		type:constants.GET_INIT_LIST_DATA,
		payload:data
	}
}
