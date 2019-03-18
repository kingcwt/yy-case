import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text  } from '@tarojs/components'
import './style.less'

import user01 from '../../static/img/user01.jpg'
import right from '../../static/img/right.png'

let colorArr = ['FBE9E7','E3F2FD','F3E5F5','E9FBE7','EEEEEE','E7E9FB']

class GcListItem extends Component{

	render(){
		let { data } = this.props
		return (
			<View >
				{
					data.headerImg===''? 
					(<View className='user_header' style={{backgroundColor:'#'+colorArr[parseInt(Math.random()*(5-0+1)+0,10)],marginTop:'-2.5rem'}}>{data.title[0]}</View>)
					:
					(<Image style={{marginTop:'-2.5rem'}} className='user_header' src={user01} />)
				}
				<View className='index_body_wrap'>
					<View className="body_content">
						<Text className="title">主题:{data.title}</Text>
						<View className='stateOrTime'>
							<View className='dy'>{data.createTime}</View>
							<View  className={`stating-${data.stating}`}>{data.stating==='will'? '未开始':data.stating==='ing'? '讨论中':'已结束'}</View>
						</View>
						<Text className="content">{data.description}</Text>
					</View>
					
				</View>
			</View>
		)
	}
}

export default GcListItem

/*
	onClick={()=>Taro.navigateTo({url: '/pages/gcDetail'})}
	data{
		headImg
		title
		createTime
		stating
	}
*/