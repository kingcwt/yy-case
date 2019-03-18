import { constants } from './'
export const getInitListData = () => {
	let data = [
					{
						headerImg:'',
						title:'甩单11111',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
						url:'',
						createTime:'2019-2-2',
						category:'其他',//类别
						stating:'will',//will ing ed
						username:'王先生'
					},
					{
						headerImg:'../../static/img/user01.jpg',
						title:'甩单22222',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
						url:'',
						createTime:'2018-7-2',
						category:'房屋抵押',//类别
						stating:'ing',//will ing ed
						username:'孙红雷'
					},
					{
						headerImg:'../../static/img/user01.jpg',
						title:'甩单33333',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
						url:'',
						createTime:'2018-1-12',
						category:'车辆抵押',//类别
						stating:'ed',//will ing ed
						username:'刘德华'
					},
					{
						headerImg:'',
						title:'房抵',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
						url:'',
						createTime:'2018-12-21',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'蔡国庆'
					},
					{
						headerImg:'../../static/img/user01.jpg',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
						url:'',
						createTime:'2018-12-2',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'何炅'
					},
					{
						headerImg:'',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
						url:'',
						createTime:'2019-2-2',
						category:'其他',//类别
						stating:'will',//will ing ed
						username:'王先生'
					},
					{
						headerImg:'../../static/img/user01.jpg',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
						url:'',
						createTime:'2018-7-2',
						category:'房屋抵押',//类别
						stating:'ing',//will ing ed
						username:'孙红雷'
					},
					{
						headerImg:'../../static/img/user01.jpg',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
						url:'',
						createTime:'2018-1-12',
						category:'车辆抵押',//类别
						stating:'ed',//will ing ed
						username:'刘德华'
					},
					{
						headerImg:'',
						title:'房抵',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
						url:'',
						createTime:'2018-12-21',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'蔡国庆'
					},
					{
						headerImg:'../../static/img/user01.jpg',
						title:'微信客服:13056',
						description:'实名交友，非诚勿扰，未录入公司或信息有误联系客服，进入可扫二维码',
						url:'',
						createTime:'2018-12-2',
						category:'其他',//类别
						stating:'ing',//will ing ed
						username:'何炅'
					}
				]
	return {
		type:constants.GET_INIT_LIST_DATA,
		data:data
	}
}