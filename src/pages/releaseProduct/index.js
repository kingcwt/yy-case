import Taro, { Component } from '@tarojs/taro'
import { View, Button, Picker  } from '@tarojs/components'
import { AtButton, AtForm, AtImagePicker, AtNavBar, AtRadio  } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

import FormItem from '../../components/FormItem'
import Radio from '../../components/Radio'
import './style.less'
class ReleaseNewProduct extends Component {

	config = {
		navigationBarTitleText: '新增产品'
	}
	
	render () {
		let { cpmcVal, cpjsVal, imgFiles, isShow, cplxConfig, xqlxConfig, yllVal, fwfyVal, dkedVal, dkqxVal,
			fkzqVal, hkfsVal, ysVal, cpysVal, sqtjVal, sxclVal,	bllcVal, fytsVal, qtxxVal } = this.props.state
		// let { back, handleSave, handleClick, handleCpmcChange, handleCpjsChange, handleImgChange,
		// 	handleCplxChange, handleXqlxChange, handleYllChange, handleFwfyChange, handleDkedChange,
		// 	handleDkqxChange, handleFkzqChange, handleHkfsChange, handleYsChange, handleCpysChange, handleSqtjChange, handleSxclChange,
		// 	handleBllcChange, handleFytsChange, handleQtxxChange } = this.props
		return (
			<View className='main release-new-product'>
				<AtNavBar
					className='my-form-top'
					onClickRgIconSt={this.props.handleSave}
					onClickLeftIcon={this.props.back}
					fixed={true}
					color='#fff'
					title='新增产品'
					leftIconType='chevron-left'
					rightFirstIconType='check'
				/>
				<AtForm className='my-form'>
					<FormItem 
						title='产品名称'
						placeholder='产品名称'
						lengthLimit='16'
						type='text'
						name='cpmc'
						value={cpmcVal}
						onHandleFunc={this.props.handleCpmcChange}
					/>

					<View className='my-form-wrap' style={{border:'none'}}>
						<View className='title'>产品类型</View>
						<Picker mode='selector' range={cplxConfig.selector} onChange={this.props.handleCplxChange}>
							<View className='picker'>
								当前选择：<View className='fr'>{cplxConfig.selectorChecked||'点击选择'}</View>
							</View>
						</Picker>
					</View>	
					<View className='my-form-wrap' style={{border:'none'}}>
						<View className='title'>详情类型</View>
						<Picker mode='selector' range={xqlxConfig.selector} onChange={this.props.handleXqlxChange}>
							<View className='picker'>
								当前选择：<View className='fr'>{xqlxConfig.selectorChecked||'点击选择'}</View>
							</View>
						</Picker>
					</View>
					{
						xqlxConfig.selectorChecked===''?
						''
						:
						xqlxConfig.selectorChecked==='简单版'?
						(
							<FormItem 
								title='产品介绍及优势'
								placeholder='在这里填写简单的产品介绍，最多1000字'
								lengthLimit='1000'
								type='textarea'
								name='cpjs'
								value={cpjsVal}
								onHandleFunc={this.props.handleCpjsChange}
							/>
						)
						:
						(
							<View>
								<FormItem 
									title='月利率'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={yllVal}
									onHandleFunc={this.props.handleYllChange}
								/>
								<FormItem 
									title='服务费用'
									placeholder='如无；或1%'
									lengthLimit='32'
									type='text'
									value={fwfyVal}
									onHandleFunc={this.props.handleFwfyChange}
								/>
								<FormItem 
									title='贷款额度'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={dkedVal}
									onHandleFunc={this.props.handleDkedChange}
								/>
								<FormItem 
									title='贷款期限'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={dkqxVal}
									onHandleFunc={this.props.handleDkqxChange}
								/>
								<FormItem 
									title='放款周期'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={fkzqVal}
									onHandleFunc={this.props.handleFkzqChange}
								/>
								<FormItem 
									title='还款方式'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={hkfsVal}
									onHandleFunc={this.props.handleHkfsChange}
								/>
								<FormItem 
									title='优势'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={ysVal}
									onHandleFunc={this.props.handleYsChange}	
								/>
								<FormItem 
									title='产品描述'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={cpysVal}
									onHandleFunc={this.props.handleCpysChange} 		
								/>
								<FormItem 
									title='申请条件'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={sqtjVal}
									onHandleFunc={this.props.handleSqtjChange}
								/>
								<FormItem 
									title='所需材料'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={sxclVal}
									onHandleFunc={this.props.handleSxclChange}
								/>
								<FormItem 
									title='办理流程'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={bllcVal}
									onHandleFunc={this.props.handleBllcChange}
								/>
								<FormItem 
									title='费用提示'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={fytsVal}
									onHandleFunc={this.props.handleFytsChange}
								/>
								<FormItem 
									title='其他信息'
									placeholder='如1%；或1%-2%'
									lengthLimit='32'
									type='text'
									value={qtxxVal}
									onHandleFunc={this.props.handleQtxxChange}
								/>
							</View>
						)
					}
					{
						xqlxConfig.selectorChecked===''?
						''
						:
						(
							<View>
								<View className='my-form-wrap' style={{border:'none'}}>
									<View className='title'>备注图片<em>(最多三张图片)</em></View>
									<AtImagePicker
										length={5}
										files={imgFiles}
										showAddBtn={isShow}
										onChange={this.props.handleImgChange}
									/>
								</View>
								<View className='my-form-sys'>
									<AtButton className='my-form-submit' formType='submit'>确认</AtButton>
									<AtButton className='my-form-reset' formType='reset'>取消</AtButton>
								</View>
							</View>
						)
					}
				</AtForm>
			</View>
		)
	}	
}

const mapStateToProps = ( state ) => {
	return {
		state:state.releaseProductPageReducer
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
		handleClick(){
			console.log(1);
		},
		handleCpmcChange(e){
			console.log(1111,e);
			dispatch(actionCreators.handleCpmcChange(e.detail.value))
		},
		handleCpjsChange(e){
			dispatch(actionCreators.handleCpjsChange(e.detail.value))
		},
		handleImgChange(e){
			dispatch(actionCreators.handleImgChange(e))
		},
		handleCplxChange(e){
			dispatch(actionCreators.handleCplxChange(e.detail.value))
		},
		handleXqlxChange(e){
			dispatch(actionCreators.handleXqlxChange(e.detail.value))
		},
		handleYllChange(e){
			dispatch(actionCreators.handleYllChange(e.detail.value))
		},
		handleFwfyChange(e){
			dispatch(actionCreators.handleFwfyChange(e.detail.value))
		}, 
		handleDkedChange(e){
			dispatch(actionCreators.handleDkedChange(e.detail.value))
		},
		handleDkqxChange(e){
			dispatch(actionCreators.handleDkqxChange(e.detail.value))
		},
		handleFkzqChange(e){
			dispatch(actionCreators.handleFkzqChange(e.detail.value))
		},
		handleHkfsChange(e){
			dispatch(actionCreators.handleHkfsChange(e.detail.value))
		},
		handleYsChange(e){
			dispatch(actionCreators.handleYsChange(e.detail.value))
		}, 
		handleCpysChange(e){
			dispatch(actionCreators.handleCpysChange(e.detail.value))
		}, 
		handleSqtjChange(e){
			dispatch(actionCreators.handleSqtjChange(e.detail.value))
		}, 
		handleSxclChange(e){
			dispatch(actionCreators.handleSxclChange(e.detail.value))
		},
		handleBllcChange(e){
			dispatch(actionCreators.handleBllcChange(e.detail.value))
		}, 
		handleFytsChange(e){
			dispatch(actionCreators.handleFytsChange(e.detail.value))
		}, 
		handleQtxxChange(e){
			dispatch(actionCreators.handleQtxxChange(e.detail.value))
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( ReleaseNewProduct )
