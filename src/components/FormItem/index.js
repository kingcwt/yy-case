import Taro, { Component } from '@tarojs/taro'
import { View, Text, Textarea, Input} from '@tarojs/components'

/* style */
import './style.less'

class FormItem extends Component {
	
	render(){
		const { className, lengthLimit, name, handleFunc, placeholder, title, type, value } = this.props
		return(
			<View className={`my-form-item ${className|''}`}>
				<View className='my-form-item-title'>{title}</View>
				{
					
					type==='textarea'?
						(<Textarea  onInput={this.props.onHandleFunc} placeholder={placeholder} value={value||''} maxlength={lengthLimit}></Textarea>)
					:
						(<Input onInput={this.props.onHandleFunc}  placeholder={placeholder} value={value} type={type} maxlength={lengthLimit}/>)
					
				}
				
				{
					lengthLimit?
						(<View className='my-form-item-limit'>{ value && value.length || 0 }/{lengthLimit}</View>)
					:
						''
				}
			</View>
		)
	}
	
}

export default FormItem

/*
	title 标题
	placeholder  提示语
	lengthLimit 长度限制
	type		类型 	text 或  textarea
	name        name
	onChange	func
	value	
*/