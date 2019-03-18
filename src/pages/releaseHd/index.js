import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm, AtNavBar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store' 

/* components */
import FormButton from '../../components/FormButton'
import FormItem from '../../components/FormItem'

/* style */
import './style.less'

class ReleaseHd extends Component {

	config = {
		navigationBarTitleText: '新增活动'
	}
	
	render () {
		let {hdztVal, hddzVal, lxrVal, lxdhVal, hdrsVal, xxnrVal, companyName} = this.props.state
		return (
			<View className='main release-new-product'>
				
				<AtNavBar
					className='my-form-top'
					onClickRgIconSt={this.props.handleSave}
					onClickLeftIcon={this.props.back}
					fixed={true}
					color='#fff'
					title='新增活动'
					leftIconType='chevron-left'
					rightFirstIconType='check'
				/>
				
				<AtForm
					onSubmit={this.onSubmit}
					onReset={this.onReset}
					className='my-form'
				>
					<FormItem 
						title='公司名'
						placeholder='公司名'
						type='text'
						value={companyName}
						onHandleFunc={this.props.handleChange}
					/>

					<FormItem 
						title='活动主题'
						placeholder='主题，最多100字'
						lengthLimit='100'
						type='textarea'
						value={hdztVal}
						onHandleFunc={this.props.handleHdztChange}
					/>

					<FormItem 
						title='活动地址'
						placeholder='活动地址'
						lengthLimit='100'
						type='textarea'
						value={hddzVal}
						onHandleFunc={this.props.handleHddzChange}
					/>

					<FormItem 
						title='联系人'
						placeholder='联系人'
						value='张三'
						lengthLimit='10'
						type='input'
						value={lxrVal}
						onHandleFunc={this.props.handleLxrChange}
					/>

					<FormItem 
						title='联系电话'
						placeholder='联系电话'
						value='15515541756'
						lengthLimit='11'
						type='text'
						value={lxdhVal}
						onHandleFunc={this.props.handleLxdhChange}
					/>

					<FormItem 
						title='活动人数'
						placeholder='活动人数'
						lengthLimit='7'
						type='textarea'
						value={hdrsVal}
						onHandleFunc={this.props.handleHdrsChange}
					/>

					<FormItem 
						title='详细内容'
						placeholder='发布广告将拉黑，不就不能使用此平台！请在这里详细介绍下活动ing的相关信息，最多500字'
						lengthLimit='500'
						type='textarea'
						name='xxnr'
						value={xxnrVal}
						onHandleFunc={this.props.handleXxnrChange}
					/>
					
					<FormButton />
				</AtForm>
			</View>
		)
		}	
}

const mapStateToProps = ( state ) => {
	return {
		state:state.releaseHdPageReducer
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
		handleHdztChange(e){
			dispatch(actionCreators.handleHdztChange(e.detail.value))
		},
		handleHddzChange(e){
			dispatch(actionCreators.handleHddzChange(e.detail.value))
		},
		handleLxdhChange(e){
			dispatch(actionCreators.handleLxdhChange(e.detail.value))
		},
		handleHdrsChange(e){
			dispatch(actionCreators.handleHdrsChange(e.detail.value))
		},
		handleXxnrChange(e){
			dispatch(actionCreators.handleXxnrChange(e.detail.value))
		},
		handleLxrChange(e){
			dispatch(actionCreators.handleLxrChange(e.detail.value))
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( ReleaseHd )