import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

/* components */
import TopRegister from '../../components/TopRegister'
import UserItem from '../../components/UserItem'
/* style */
import './style.less'

class User extends Component{
	config = {
		navigationBarTitleText: '用户中心'
	}
	render(){
		let { localData } = this.props.state
		return(
			<View className='main'>
				<View className='main_body'>
					<TopRegister />
					<View className='user_content'>
						{
							localData.map((item,index)=>{
								return(
									<UserItem
										key={index}
										data={item}
									/>
								)
							})
						}
					</View>
				</View>				
			</View>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {
		state:state.userPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( User )