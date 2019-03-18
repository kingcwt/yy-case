import Taro, { Component } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import { AtForm, AtImagePicker, AtNavBar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

import FormButton from '../../components/FormButton'
import FormItem from '../../components/FormItem'
import Radio from '../../components/Radio'


import './style.less'

class ReleaseSd extends Component {

	config = {
		navigationBarTitleText: '新增甩单'
	}

	render () {
		let { imgFiles, isShow, sdbtVal, isNmConfig, cplxConfig, xxnrVal } = this.props.state
		return (
			<View className='main release-new-product'>
				<AtNavBar
					className='my-form-top'
					onClickRgIconSt={this.props.handleSave}
					onClickLeftIcon={this.props.back}
					fixed={true}
					color='#fff'
					title='新增甩单'
					leftIconType='chevron-left'
					rightFirstIconType='check'
				/>
				
				<AtForm className='my-form' >
					<FormItem 
						title='甩单标题'
						placeholder='标题，最多100字'
						lengthLimit='100'
						type='textarea'
						value={sdbtVal}
						onHandleFunc={this.props.handleSdbtChange}
					/>
					
					<View className='my-form-wrap' style={{border:'none'}}>
						<View className='title'>是否匿名</View>
						<Picker mode='selector' range={isNmConfig.selector} onChange={this.props.handleIsNm}>
							<View className='picker'>
								当前选择：<View className='fr'>{isNmConfig.selectorChecked||'点击选择'}</View>
							</View>
						</Picker>
					</View>

					<View className='my-form-wrap' style={{border:'none'}}>
						<View className='title'>是否匿名</View>
						<Picker mode='selector' range={cplxConfig.selector} onChange={this.props.handleCplxChange}>
							<View className='picker'>
								当前选择：<View className='fr'>{cplxConfig.selectorChecked||'点击选择'}</View>
							</View>
						</Picker>
					</View>	
					
					<FormItem 
						title='详细内容'
						placeholder='发布广告将拉黑，不就不能使用此平台！在这里介绍下客户的相关信息，例如征信，负债，家庭情况等'
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
							onChange={this.props.handleImgUpload}
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
		state:state.releaseSdPageReducer
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
		handleSdbtChange(e){
			console.log(1111);
			dispatch(actionCreators.handleSdbtChange(e.detail.value))
		},
		handleIsNm(e){
			dispatch(actionCreators.handleIsNm(e.detail.value))
		},
		handleCplxChange(e){
			dispatch(actionCreators.handleCplxChange(e.detail.value))
		},
		handleXxnrChange(e){
			dispatch(actionCreators.handleXxnrChange(e.detail.value))
		},
		handleImgUpload(e){
			dispatch(actionCreators.handleImgUpload(e))
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( ReleaseSd )