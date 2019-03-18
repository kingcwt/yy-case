import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtAvatar, AtCard, AtList, AtListItem } from 'taro-ui'

/* components */
import TopInfo from '../../components/TopInfo'
import FixFooter from '../../components/FixFooter'

/* img */
import user01Jpg from '../../static/img/user01.jpg'

/* style */
import './style.less'

class HdDetail extends Component {

	config = {
		navigationBarTitleText: '活动详情'
	}
	
	render () {
		return (
			<View className='main my-hd-detail'>
				<TopInfo
					val='活动详情'
				/>	

				<View className='content' style={{backgroundColor:'#F8F8F8',paddingBottom:'50Px'}}>
					<AtCard
					  title='活动主题'
					>
					  <View>结交好友 互利共赢 时间：本周三（明天）下午1点半 欢迎新老朋友前来相聚，👉微信或电话预约🙅🏿据绝空降哦[调皮] 地点: 西局恒泰中心D</View>
					</AtCard>

					<AtCard
					  title='活动信息'
					>
					  	<View>联系人员：杜</View>
					  	<View>联系电话：18743639898</View>
					  	<View>活动时间：2018-12-26 13:54</View>
					 	<View>活动地址：丰台西局恒泰广场d座16层</View>
					</AtCard>

					<AtCard
					  title='活动内容'
					>
					  <View>💓聚会💓 </View>
					  <View>主题：</View>
					  <View>结交好友 互利共赢</View>
					  <View>时间：本周三（明天）下午1点半</View>
					  <View>人数：15-20人</View>
					  <View>[勾引][勾引]欢迎新老朋友前来相聚，👉微信或电话预约🙅🏿据绝空降哦</View>
					</AtCard>

					<AtCard
					  title='发起人1111'
					  className='my-fqr'
					>
					  	
					
						<AtListItem
							arrow='right'
							note='张三'
							thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
						/>
						
					</AtCard>
				</View>
				<FixFooter

				/>
			</View>
		)
	}	
}


export default HdDetail
