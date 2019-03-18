import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtButton, AtFloatLayout } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'
import TopInfo from '../../../components/TopInfo'
import MyPointsItem from '../../../components/MyPointsItem'
import '../style.less'

class MyPoints extends Component {

	config = {
		navigationBarTitleText: '我的积分'
	}
	componentDidMount(){
		this.props.getInitListData()
	}
	render () {
		let { isOpened, userInfo, data, jfgz } = this.props.state
		let { jfgzFunc } = this.props
		return (
			<View className='main my-points'>
				<TopInfo
					val='我的积分'
				/>		
				<View className='jifen-detail'>
					<View className='jifen-detail-01'>
						<View className='jifen-detail-left'>当前可用积分</View>
						<View className='jifen-detail-right' style={{color:'red'}}>{userInfo.kyjf}</View>
					</View>
					<View className='jifen-detail-01'>
						<View className='jifen-detail-left'>原力值</View>
						<View className='jifen-detail-right' >{userInfo.ylz}</View>
					</View>
					<View className='jifen-detail-01'>
						<View className='jifen-detail-left'>蓝钻</View>
						<View className='jifen-detail-right' style={{color:'#0000FF'}}>{userInfo.lz}</View>
					</View>
					<View className='jifen-detail-01' style={{margin:'.5rem 0'}}>
						<View className='jifen-detail-left'><AtButton type='secondary' size='small' circle onClick={this.props.navigateTo.bind(this,'/pages/user/harvestLz')}>收割蓝钻</AtButton></View>
						<View className='jifen-detail-right'><AtButton onClick={jfgzFunc} type='primary' size='small'>积分规则</AtButton></View>
					</View>
					<AtFloatLayout isOpened={isOpened} title="积分规则" >
						{jfgz}
					</AtFloatLayout>
				</View>
				
				<View>
					<View className='my-points-title'>交易记录</View>
					<View className='my-points-wrap'>
						{
							data.map((item,index)=>{
								return (
									<View key={index} className='my-points-item'>
										<View>
											<Text>{item.descripton}</Text>
											<Text>{item.cTime}</Text>
										</View>
										<View style={{textAlign:'right'}}>
											<Button className='description'>累计</Button>
											<Text>{item.info}</Text>
										</View>
									</View>
								)
							})
						}
						
					</View>
				</View>
				<Text className='dx'>暂时没有更多数据!</Text>
			</View>
		)
	}	
}

const mapStateToProps = ( state ) => {
	return {
		state:state.myPointsPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getInitListData () {
			dispatch(actionCreators.getInitListData())
		},
		jfgzFunc(){
			console.log(1111);
			dispatch(actionCreators.jfgz())
		},
		navigateTo (e) {
			Taro.navigateTo({
				url:e
			})
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( MyPoints )