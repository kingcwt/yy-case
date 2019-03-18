import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'
import { AtAvatar } from 'taro-ui'
import TopInfo from '../../../components/TopInfo'
import FixFooter from '../../../components/FixFooter'
import '../style.less'

class UserDetail extends Component {

	config = {
		navigationBarTitleText: '客户经理详情'
	}

	componentDidMount(){
		this.props.getInitListData()
	}
	
	render () {
		let { userInfo, data } =this.props.state
		return (
			<View className='main'>
				<TopInfo
					val='客户经理详情' 
				/>	

				<View className='my-user-detail-info-wrap'>
					<AtAvatar 
						circle
						size='small'
						image='https://jdc.jd.com/img/200'
					>
					</AtAvatar>
					<View className='my-user-detail-info-wrap-right-wrap'>
						<Text className='title'>{userInfo.username} 经理</Text>
						<Text className='info'>{userInfo.company} <Text>手机：{userInfo.tel}</Text></Text>
						<Text className='address'>公司地址：{userInfo.address}</Text>
						<Text className='des'>{userInfo.description}</Text>
					</View>
				</View>

				<View className='my-user-detail-content'>
					{
						data.map((item,index)=>{
							return(
								<View key={index} className='my-user-detail-info-wrap' onClick={this.props.navigateTo.bind(this,'/pages/index/productDetail/index')}>
									<AtAvatar 
										circle
										size='small'
										image={item.imgUrl}
									>
									</AtAvatar>
									<View className='my-user-detail-info-wrap-right-wrap'>
										<Text className='title'>{item.title}</Text>
										<Text className='info'>{item.info}</Text>
										<Text className='des'>{item.description}</Text>
									</View>
								</View>
							)
						})
					}
				</View>
				<FixFooter/>
			</View>
		)
	}	
}

const mapStateToProps = ( state ) => {
	return {
		state:state.indexUserDetailPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		navigateTo (e) {
			Taro.navigateTo({
				url: e
			})
		},
		getInitListData () {
			dispatch(actionCreators.getInitListData())
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( UserDetail )
