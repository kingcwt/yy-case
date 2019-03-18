import { constants } from './'
export const getInitListData = () => {
	let data = [
					{
						headerImg:'1',
						title:'中国公务员遭欠薪',
						description:'因财政入不敷出，湖南拖欠当地公务的工资，误联系客服，息有误联系客服，进入可扫二维码实名交友，非诚勿扰，未录入公司或信息有误联系码....',
						url:'',
						createTime:'2018-6-19',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'王先生'
					},
					{
						headerImg:'',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，息有误联系客服，进入可扫二维码实名交友，非诚勿扰，未录入公司或信息有误联系码....',
						url:'',
						createTime:'2019-2-2',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'王先生'
					},
					{
						headerImg:'',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，息有误联系客服，进入可扫二维码实名交友，非诚勿扰，未录入公司或信息有误联系码....',
						url:'',
						createTime:'2019-2-2',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'王先生'
					},
					{
						headerImg:'1',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，息有误联系客服，进入可扫二维码实名交友，非诚勿扰，未录入公司或信息有误联系码....',
						url:'',
						createTime:'2019-2-2',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'王先生'
					},
					{
						headerImg:'',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，息有误联系客服，进入可扫二维码实名交友，非诚勿扰，未录入公司或信息有误联系码....',
						url:'',
						createTime:'2019-2-2',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'王先生'
					},
					{
						headerImg:'1',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，息有误联系客服，进入可扫二维码实名交友，非诚勿扰，未录入公司或信息有误联系码....',
						url:'',
						createTime:'2019-2-2',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'王先生'
					},
					{
						headerImg:'',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，息有误联系客服，进入可扫二维码实名交友，非诚勿扰，未录入公司或信息有误联系码....',
						url:'',
						createTime:'2019-2-2',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'王先生'
					},
					{
						headerImg:'',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，息有误联系客服，进入可扫二维码实名交友，非诚勿扰，未录入公司或信息有误联系码....',
						url:'',
						createTime:'2019-2-2',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'王先生'
					},
				]
	return{
		type:constants.GET_INIT_LIST_DATA,
		data
	}
}

export const switchTopMenu = (e) => {
	return {
		type:constants.SWITCH_TOP_MENU_DATA,
		data:e
	}
}