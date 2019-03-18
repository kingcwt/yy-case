import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtForm, AtImagePicker, AtNavBar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

import FormButton from '../../components/FormButton'
import FormItem from '../../components/FormItem'
import './style.less'

class ReleaseTz extends Component {

	config = {
		navigationBarTitleText: '新增帖子'
	}

	render () {
		let { imgFiles, isShow, tzbtVal, xxnrVal, isNmConfig } = this.props.state
		return (
			<View className='main release-new-product'>
				
				<AtNavBar
					className='my-form-top'
					onClickRgIconSt={this.props.handleSave}
					onClickLeftIcon={this.props.back}
					fixed={true}
					color='#fff'
					title='新增帖子'
					leftIconType='chevron-left'
					rightFirstIconType='check'
				/>
				
				<AtForm className='my-form' >
					<Text className='tips'>发布帖子需要花费 50 积分。</Text>
					<FormItem 
						title='帖子标题'
						placeholder='标题，最多100字'
						lengthLimit='100'
						type='textarea'
						value={tzbtVal}
						onHandleFunc={this.props.handleTzbtChange}
					/>

					<View className='my-form-wrap' style={{border:'none'}}>
						<View className='title'>是否匿名</View>
						<Picker mode='selector' range={isNmConfig.selector} onHandleFunc={this.props.handleIsNm}>
							<View className='picker'>
								当前选择：<View className='fr'>{isNmConfig.selectorChecked||'点击选择'}</View>
							</View>
						</Picker>
					</View>

					<FormItem 
						title='详细内容'
						placeholder='发布广告将拉黑，不就不能使用此平台！请在这里描写要讨论的内容'
						lengthLimit='500'
						type='textarea'
						value={xxnrVal}
						onHandleFunc={this.props.handleXxnrChange}
					/>

					<View className='my-form-wrap' style={{border:'none'}}>
						<View className='title'>备注图片<em>(最多三张图片)</em></View>
						<AtImagePicker
							length={5}
							showAddBtn={isShow}
							files={imgFiles}
							onHandleFunc={this.props.handleImgUpload}
						/>
					</View>	
	
					<FormButton />
				</AtForm>
			</View>
		)
	}	
}

const mapStateToProps = ( state ) => {
	return {
		state:state.releaseTzPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		back(){
			Taro.navigateBack({ delta: 1 })
		},
		handleSave(){
			console.log(1111);
		},
		handleTzbtChange(e){
			dispatch(actionCreators.handleTzbtChange(e.detail.value))
		},
		handleIsNm(e){
			dispatch(actionCreators.handleIsNm(e.detail.value))
		},
		handleXxnrChange(e){
			dispatch(actionCreators.handleXxnrChange(e.detail.value))
		},
		handleImgUpload(e){
			dispatch(actionCreators.handleImgUpload(e))
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( ReleaseTz )
