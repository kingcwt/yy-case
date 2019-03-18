import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtList, AtListItem, AtIcon  } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

import Footer from '../../components/Footer'
import TopInfo from '../../components/TopInfo'
import PingLun from '../../components/PingLun'
import './style.less'

import img1 from '../../static/img/shuaidan-detail-img.jpg'

class SdDetail extends Component {

	config = {
		navigationBarTitleText: '甩单详情'
	}

	render () {
		return (
			<View className='main shuaidan_detail'>
				<TopInfo
					val='甩单详情'
				/>		
				<AtList>
					
					<AtListItem
						arrow='right'
						note='不显示公司'
						title='匿名111'
						extraText='手机：13341142851'
						thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
					/>
				</AtList>

				<View className='my-sd-detail-content-wrap'>
					<View className='title'>个人银主能接的打电话</View>
					<View className='my-sd-detail-content-wrap-div-two'>
						<View className='type'>其他</View>
						<View className='state'>甩单中</View>
					</View>
					<View className='my-content-detail'>
						在熊安新区有自建房基地三处，现在国家归化之内，每处市值500多万，共市值2000万左右，暂借800万元用于企业周转
					</View>
					<View className='time'>2019-01-13</View> 
				</View>

				<View className='my-tel-message'>
					<View className='tel' onClick={this.props.handleTelClick}><AtIcon value='phone' size='26' color='#21BA45'></AtIcon>电话</View>
					<View><a href='sms:10086?body=短信内容'><AtIcon value='message' size='26' color='#21BA45'></AtIcon>短信</a></View>
				</View>

				<View className='my-sd-detail-img'>
					<Image src={img1} />
				</View>

				<View className='my-sd-detail-comment'>
					<View>评论抢单</View>
					<View className='content'>暂时没有评论</View>
				</View>
				<PingLun />
			</View>
		)
	}	
}

const mapStateToProps = ( state ) => {
	return {
		state:state.sdDetailPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		handleTelClick (){
			Taro.makePhoneCall({
				phoneNumber: '1340000'
			})
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( SdDetail )