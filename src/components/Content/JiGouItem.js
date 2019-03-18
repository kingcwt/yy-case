import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './style.less'

import user01 from '../../static/img/user01.jpg'
import right from '../../static/img/right.png'

let colorArr = ['FBE9E7','E3F2FD','F3E5F5','E9FBE7','EEEEEE','E7E9FB']

class JiGouItem extends Component{
	static defaultProps = {
		data:[],
		onClick:null
	}
	render(){
		let { data } = this.props 
		return (
			<View className='my-jigou-item'  onClick={this.props.onClick.bind(this,'/pages/index/jgDetail/index')}>
				{
					data.headerImg===''?
					(<View className='user_header' style={{backgroundColor:'#'+colorArr[parseInt(Math.random()*(5-0+1)+0,10)]}}>{data.title[0]}</View>)
					:
					(<Image className='user_header' src={user01} />)
				}

				<View className='index_body_wrap'>
					<View className='body_content'>
						<View className='title'>{data.title}</View>
						<View className='content'>{data.description}</View>
					</View>
					<Image className='toRight' src={right} />
				</View>
			</View>
		)
	}
}

export default JiGouItem