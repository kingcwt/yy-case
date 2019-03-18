import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtList, AtListItem, AtButton, AtFloatLayout   } from 'taro-ui'
import { connect } from '@tarojs/redux'
import TopInfo from '../../../components/TopInfo'
import '../style.less'

class Yqjl extends Component {

	config = {
		navigationBarTitleText: '邀请激励'
	}
	
	render () {
		return (
			<View className='main my-yqjl'>
				<TopInfo
					val='邀请激励'
				/>		
				<View className='my-yqjl-info'>我共邀请了<Text>0</Text>位粉丝</View>
				<Text className='dx'>暂时没有邀请记录!</Text>
			</View>
		)
		}	
	}

export default Yqjl
