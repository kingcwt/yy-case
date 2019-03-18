import { constants } from './'

export const getInitListData = () => {
	let userInfo = {
		username:'刘曙光',
		company:'秒贷金融-海淀分公司',
		tel:'17319271595',
		address:'海淀区车道沟北方地产大厦1704',
		description:'相互合作，互利共赢！'
	}
	let data = [
		{
			imgUrl:'https://jdc.jd.com/img/200',
			title:'米仓财行抵押贷款111',
			info:'房屋抵押1111',
			description:'米仓财行降点了 1.一抵0.79！！ 二抵0.86！！ 2.征信近两年不能有连4累18。 3.同行返费，高出全返， 一次性全返，不扣税。 4.从下户到放款4-5个工作日。13720018503'
		},{
			imgUrl:'https://jdc.jd.com/img/200',
			title:'米仓财行抵押贷款222',
			info:'房屋抵押222',
			description:'米仓财行降点了 1.一抵0.79！！ 二抵0.86！！ 2.征信近两年不能有连4累18。 3.同行返费，高出全返， 一次性全返，不扣税。 4.从下户到放款4-5个工作日。13720018503'
		},{
			imgUrl:'https://jdc.jd.com/img/200',
			title:'米仓财行抵押贷款333',
			info:'房屋抵押333',
			description:'米仓财行降点了 1.一抵0.79！！ 二抵0.86！！ 2.征信近两年不能有连4累18。 3.同行返费，高出全返， 一次性全返，不扣税。 4.从下户到放款4-5个工作日。13720018503'
		},{
			imgUrl:'https://jdc.jd.com/img/200',
			title:'米仓财行抵押贷款444',
			info:'房屋抵押444',
			description:'米仓财行降点了 1.一抵0.79！！ 二抵0.86！！ 2.征信近两年不能有连4累18。 3.同行返费，高出全返， 一次性全返，不扣税。 4.从下户到放款4-5个工作日。13720018503'
		},{
			imgUrl:'https://jdc.jd.com/img/200',
			title:'米仓财行抵押贷款555',
			info:'房屋抵押5555',
			description:'米仓财行降点了 1.一抵0.79！！ 二抵0.86！！ 2.征信近两年不能有连4累18。 3.同行返费，高出全返， 一次性全返，不扣税。 4.从下户到放款4-5个工作日。13720018503'
		}
	]
	return{
		type:constants.GET_INIT_LIST_DATA,
		payload:{
			userInfo,
			data
		}
	}
}