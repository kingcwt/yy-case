import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './style.less'

class FormButton extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<View className='my-form-sys'>
				<View className='my-form-submit'><AtButton type='primary'  size='normal' formType='submit'>确认</AtButton></View>
				<View className='my-form-reset'><AtButton size='normal' formType='reset'>取消</AtButton></View>
			</View>
		)
	}
}

export default FormButton