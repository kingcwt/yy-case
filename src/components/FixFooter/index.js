import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtButton, AtIcon, AtActionSheet } from 'taro-ui'
import './style.less'

/*require img*/
import user01Jpg from '../../static/img/user01.jpg'

class FixFooter extends Component{
	constructor(props){
		super(props)
		this.state={
			isOpened:false
		}
	}

	handleMessageClick = () => {
		this.setState({
			isOpened:true
		})
	}

	handleTelClick = () => {
		Taro.makePhoneCall({
			phoneNumber: '1340000'
		})
	}
	render(){
		return(
			<View className='my-fix-footer'>
				<View className='btn-wrap'>
					<AtButton full type='primary' onClick={this.handleTelClick}><AtIcon value='phone' size='26' color='#FFFFFF' ></AtIcon> 电话</AtButton>
					<View className='devider'></View>
					<AtButton full type='primary' onClick={this.handleMessageClick}><AtIcon value='message' size='26' color='#FFFFFF'></AtIcon> 微信</AtButton>
				</View>
				<AtActionSheet className='my-fix-footer-AtActionSheet' isOpened={this.state.isOpened} cancelText='取消'>
					<View className='wechat-info-wrap'>
						<Text className='info-1'>微信号：</Text>
						<Text className='info-2'>13720018503</Text>
					</View>
					<Image className='my-fix-footer-ewm-img' style={{width:'200Px',height:'200Px'}} src={user01Jpg} />
					<View className='info-wrap'>
						<View className='info-1'>长按二维码加我好友，验证信息请填：</View>
						<Text className='info-2'>我是在小蓝金融之家上看到您的</Text>
					</View>
				</AtActionSheet>					
			</View>
		)
	}
}

export default FixFooter

/*
data Objict
{
	
}
*/