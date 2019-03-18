import { constants } from './'

import hc from '../../../static/img/hc_600_350.jpg'
import linux from '../../../static/img/linux.jpg'
import rn from '../../../static/img/rn_600_350.jpg'
export const getInitListData = () => {
	let swiperData = [hc, linux, rn]
	let data = [
		{
			text:'兴业开始对时控审核从严1',
			title:'经营贷|兴业银行1',
			src:rn
		},
		{
			text:'兴业开始对时控审核从严2',
			title:'经营贷|兴业银行2',
			src:rn
		},
		{
			text:'兴业开始对时控审核从严3',
			title:'经营贷|兴业银行3',
			src:linux
		},
		{
			text:'兴业开始对时控审核从严4',
			title:'经营贷|兴业银行4',
			src:rn
		},
		{
			text:'兴业开始对时控审核从严',
			title:'经营贷|兴业银行',
			src:rn
		},
		{
			text:'兴业开始对时控审核从严',
			title:'经营贷|兴业银行',
			src:hc
		}
	]
	return{
		type:constants.GET_INIT_LIST_DATA,
		payload:{
			swiperData,
			data
		}
	}
}