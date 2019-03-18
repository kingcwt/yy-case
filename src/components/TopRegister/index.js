import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import './style.less'

import topregister from '../../static/img/topregister.png'

class TopRegister extends Component{
	navigateTo = (url) => {
		Taro.navigateTo({
			'url': url
		})
	}
	render(){
		return(
			<View className="top_register">
				<View className='top_register_img'>
					<Image src={topregister}/>
				</View>
				<View className='top_register_text'>
					<View className="top_register_p1">轻松找同行</View>
					<View className="top_register_p2">想扩大自己的同行圈?</View>
				</View>
				<View className='reg-btn'>
					<Button onClick={this.navigateTo.bind(this,'/pages/register/index')} >快来注册</Button>
				</View>
			</View>
		)
	}
}

export default TopRegister