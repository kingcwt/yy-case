import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import {  AtModal, AtModalHeader, AtModalContent, AtModalAction, AtSearchBar } from 'taro-ui'
import JiGouItem from '../../components/Content/JiGouItem'
import right from '../../static/img/right.png'
import user01 from '../../static/img/user01.jpg'
import './style.less'

let colorArr = ['FBE9E7','E3F2FD','F3E5F5','E9FBE7','EEEEEE','E7E9FB']
class SelectAddress extends Component{

	constructor(props){
		super(props)
		this.state = {
			value:''
		}
	}


	onChange (value) {
		this.setState({
			value
		})
	}
	render(){
		let { isShow, onClick, onClose, data } = this.props
		return(
			<View className='my-select-address' style={isShow?'':{display:'none'}}>
					<AtSearchBar
				        value={this.state.value}
				        onChange={this.onChange.bind(this)}
				    />

				    {
				    	data.map((item,index)=>{
				    		return(
				    			<View key={index} className='my-jigou-item' onClick={this.props.onClick.bind(this,item.title)}>
									{
										item.headerImg===''? 
										(
											<Image className='user_header' src={user01} />
										)
										:
										(
											<View className='user_header' style={{backgroundColor:'#'+colorArr[parseInt(Math.random()*(5-0+1)+0,10)]}}>{item.title[0]}</View>
										)
									}

									<View className='index_body_wrap'>
										<View className='body_content'>
											<Text className='title'>{item.title}</Text>
											<Text className='content'>{item.description}</Text>
										</View>
										<Image className='toRight' src={right} />
									</View>
								</View>
				    		)
				    	})
				    }		
				    
			</View>
		)
	}
}

export default SelectAddress

/*

*/