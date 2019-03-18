import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtList, AtListItem, AtIcon  } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

import Footer from '../../components/Footer'
import TopInfo from '../../../components/TopInfo'
import './style.less'

class HdList extends Component {

	config = {
		navigationBarTitleText: '公司活动列表'
	}

	componentDidMount(){
		this.props.getInitListData()
	}
	handleClick = () => {
		Taro.navigateTo({
			url: '/pages/hdDetail/index'
		})
	}
	
	render () {
		let { data } = this.props.state
		return (
			<View className='main my-hd-detail'>
				<TopInfo
					val='公司活动列表'
				/>
				{
					data.map((item,index)=>{
						return (
							<View key={index} onClick={this.handleClick}>
								<View key={index}  className='my-hd-detail-item'>
									<View className='my-hd-detail-item-title'>主题：{item.title}</View>
									<View className='my-hd-detail-item-two'>
										<View className='my-item-left'>
											<View>举办公司：{item.company}</View>
											<View>联系人员：{item.lxr}</View>
											<View>活动时间：{item.time}</View>
											
										</View>
										<View className='my-item-right'>
											<View className='state'>{item.state}</View>
											<View>电话：{item.tel}</View>
											<View>活动人数：{item.peopleNumber}</View>
										</View>
									</View>
									<View>活动地址：{item.address}</View>
								</View>
								{ data.length-1 === index ? "":(<View className='hr' style={{height:'1Px',backgroundColor:'#ccc',width:'80%',float:'right'}}></View>)}
							</View>
						)
					})
				}
				<View className='my-hd-detail-footer-info'>暂时没有更多活动</View>
				
			</View>
		)
	}	
}

const mapStateToProps = ( state ) => {
	return {
		state:state.hdListPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getInitListData () {
			dispatch(actionCreators.getInitListData())
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( HdList )