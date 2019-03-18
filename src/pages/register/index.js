import Taro, { Component } from '@tarojs/taro'
import { View, Button, Form, Input  } from '@tarojs/components'
import { AtImagePicker, AtNavBar } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

/* components */
import FormItem from '../../components/FormItem'
import SelectAddress from '../../components/SelectAddress'

/* style */
import './style.less'

class Register extends Component{
	
	

	static defaultProps = {
		
	}

	componentWillMount(){
		this.props.getInitListData()
	}

	render(){
		let { nameVal, companyName, selectCompayIsShow, telVal, wechatVal, imgFiles, isShow, bzVal, data } = this.props.state
		console.log(data,111222);
		return(
			<View className='register'>
				<AtNavBar
					className='my-form-top'
					onClickRgIconSt={this.props.handleSave}
					onClickLeftIcon={this.props.back}
					fixed={true}
					color='#fff'
					title='注册'
					leftIconType='chevron-left'
					rightFirstIconType='check'
				/>
				<Form className='reg-form'>
					<FormItem
						className='my-username-item'
						lengthLimit='11'
						name='username'
						onHandleFunc={this.props.handleNameChange}
						placeholder='输入您的姓名'
						title='姓名'
						type='text'
						value={nameVal}
						
					/>

					<View className='my-select-company'>
						<View className='title'>公司名称</View>
						<Input onFocus={ this.props.handleClickCompany } className='company' type='text' value={companyName} />
						<SelectAddress
							data={data}
							isShow={selectCompayIsShow}
							onClick={this.props.clickSelectCompany}
							onClose={ this.props.closeSelectCompany }
						/>
					</View>

					<FormItem
						title='手机号码'
						placeholder='输入您的手机号码'
						lengthLimit='11'
						type='text'
						name='tel'
						value={ telVal }
						onHandleFunc={ this.props.handleTelChange }
					/>
					<FormItem
						title='微信号'
						placeholder='输入您的微信号' 
						type='text'
						name='wechat'
						lengthLimit='20'
						value={ wechatVal }
						onHandleFunc={ this.props.handleWeChatChange }
					/>
					<View className='my-form-wrap my-form-img'>
						<View className='title'>备注图片<em>(最多三张图片)</em></View>
						<AtImagePicker
							length={5}
							files={ imgFiles }
							showAddBtn={ isShow }
							onChange={this.props.handleImgChange}
						/>
					</View>	
					<FormItem
						title='备注'
						placeholder='一句话介绍，该信息展示在客户经理主页上'
						lengthLimit='100'
						type='textarea'
						name='bz'
						value={ bzVal }
						onHandleFunc={ this.props.handleBzChange }
					/>
					<View className='reg-form-footer'>
						<Button>立即注册</Button>
						<p>待会再说</p>
					</View>
				</Form>
			</View>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {
		state:state.regPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getInitListData () {
			dispatch(actionCreators.getInitListData())
		},
		back(){
			Taro.navigateBack({ delta: 1 })
		},
		handleSave(){
			console.log(1111);
		},
		handleNameChange(e){
			dispatch(actionCreators.handleNameChange(e.detail.value))
		},
		handleTelChange(e){
			dispatch(actionCreators.handleTelChange(e.detail.value))
		},
		handleWeChatChange(e){
			dispatch(actionCreators.handleWeChatChange(e.detail.value))
		},
		handleBzChange(e){
			dispatch(actionCreators.handleBzChange(e.detail.value))
		},
		handleClickCompany(){
			dispatch(actionCreators.handleClickCompany())
		},
		closeSelectCompany(){
			dispatch(actionCreators.closeSelectCompany())
		},
		clickSelectCompany(e){
			dispatch(actionCreators.clickSelectCompany(e))
		},
		handleImgChange(e){
			dispatch(actionCreators.handleImgChange(e))
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( Register )