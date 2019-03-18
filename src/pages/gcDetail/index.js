import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtList, AtListItem, AtIcon, AtAvatar  } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'
import Footer from '../../components/Footer'
import TopInfo from '../../components/TopInfo'
import './style.less'

class TzDetail extends Component {

	config = {
		navigationBarTitleText: '帖子详情'
	}


	render () {
		return (
			<View className='main tz_detail'>
				<TopInfo
					val='帖子详情'
				/>		
				<AtList>
					
					<AtListItem
						className='tz_detail-top-info'
						arrow='right'
						note='不显示公司'
						title='匿名'
						extraText='手机：13341142851'
						thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
					/>
				</AtList>

				<View className='my-tz-detail-content-wrap'>
					<View className='title'>中国公务员竟遭欠薪，政府130万亿窟窿谁来填</View>
					<View className='my-tz-detail-content-wrap-div-two'>
						<View className='type'></View>
						<View className='state'>讨论中</View>
					</View>
					<View className='my-content-detail'>
						因财政入不敷出，湖南耒阳拖欠当地公务员的工资，成为中国首例地方政府欠薪事件。目前当地财政局已筹措资金将工资发放到位，但有分析称，
						欠薪事件凸显中国地方政府债务危机风险正在加剧。  其中，有人申诉：“辛苦了一个月，但5­月份的工资一分钱都没发，据说6月份的也没有，到底要什么时候才发，
						我们怎么生活？”  耒阳市财政局回应称，延迟发工资是因为煤炭经济萎缩，与2012年相比较，2017年煤炭规费减少了10亿元，造成市本级财政年年短收，
						而工资、重点民生项目等刚性支出逐年增长，本级财政入不敷出的现象逐年加深。  本月8日，当地拖欠的工资已全部发放给公职人员。耒阳财政局承诺加大税收征管，确保收入上来，
						同时会坚持过“苦日子”，“应该可以挺过难关”。
					</View>
					<View className='time'>2019-01-13</View>
				</View>

				<View className='my-tz-detail-comment'>
					<View className='title'>评论</View>
					<View className='content-item'>
						<View className='content-item-left'>
							<AtAvatar
								size='small'
								circle
								text='匿'
							>
							</AtAvatar>
						</View>
						<View className='content-item-right'>
							<View>匿名</View>
							<View>《劳动合同法》第八十五条　用人单位有下列情形之一的，由劳动行政部门责令限期支付劳动报酬、加班费或者经济补偿;用人单位按应付金额百分之五十以上百分之一百以下的标准向劳动者加付赔偿金</View>
							<View className='time'>2018-06-22</View>
						</View>
					</View>
				</View>

				<View className='my-tz-content'>暂时没有评论</View>
			</View>
		)
		}	
	}

export default TzDetail
