import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtForm, AtImagePicker, AtNavBar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

import FormButton from '../../components/FormButton'
import FormItem from '../../components/FormItem'
import TopInfo from '../../components/TopInfo'
import './style.less'

class PinglunPage extends Component {

	config = {
		navigationBarTitleText: '发表甩单评论'
	}

	render () {
		let { plVal, isNmConfig } = this.props.pinglunPageReducer
		return (
			<View className='my-pinglun-page'>
				
				<TopInfo
					val='发表甩单评论'
				/>
				
				<AtForm className='my-form' >
					<Text className='tips'>{this.$router.params.title||'高息客户'}</Text>
					<FormItem 
						title='评论内容'
						placeholder='评论内容，最少十个字，最多100字'
						lengthLimit='100'
						type='textarea'
						value={plVal}
						onChange={this.props.handlePlChange}
					/>

					<View className='my-form-wrap' style={{border:'none'}}>
						<View className='title'>是否匿名</View>
						<Picker mode='selector' range={isNmConfig.selector} onChange={this.props.handleIsNm}>
							<View className='picker'>
								当前选择：<View className='fr'>{isNmConfig.selectorChecked||'点击选择'}</View>
							</View>
						</Picker>
						<Text className='text'>匿名将不显示姓名，公司，但会显示联系方式</Text>
					</View>

		
	
					<FormButton	/>
				</AtForm>
			</View>
		)
	}	
}

const mapStateToProps = ( {pinglunPageReducer} ) => {
	return {
		pinglunPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		back(){
			history.go(-1)
		},
		handleSave(){
			console.log(1111)
		},
		handlePlChange(e){
			dispatch(actionCreators.handlePlChange(e.detail.value))
		},
		handleIsNm(e){
			dispatch(actionCreators.handleIsNm(e.detail.value))
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( PinglunPage )
