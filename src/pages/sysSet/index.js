import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

import './style.less'
import UserItem from '../../components/UserItem'

class SysSet extends Component {

	config = {
		navigationBarTitleText: '设置'
	}

	render () {
		let { localData } = this.props.state
		let { handleSave, back } = this.props
		return (
			<View className='sys-set-wrap'>
				<AtNavBar
					className='my-form-top'
					onClickRgIconSt={handleSave}
					onClickLeftIcon={back}
					fixed={true}
					color='#fff'
					title='设置'
					leftIconType='chevron-left'
					rightFirstIconType='check'
				/>
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
		)
	}	
}

const mapStateToProps = ( state ) => {
	return {
		state:state.sysSetPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		back(){
			Taro.navigateBack({ delta: 1 })
		},
		handleSave(){
			console.log(1111);
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( SysSet )
