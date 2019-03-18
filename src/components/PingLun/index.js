import Taro, { Component } from '@tarojs/taro'
import { View, Text, Textarea, Input, Button } from '@tarojs/components'
import './style.less'

class PingLun extends Component {
	
	handleClick = (e) => {
		Taro.navigateTo({
			url: e
		})
	}
	render(){
		return(
			<View className='my-ping-lun' onClick={this.handleClick.bind(this,'/pages/pinglunPage/index')}>
				抢先评论联系
			</View>
		)
	}
	
}

export default PingLun
