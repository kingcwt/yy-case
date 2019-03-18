import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './style.less'

class UserItem extends Component{
	navigateTo = (url) => {
		Taro.navigateTo({
			'url': url
		})
	}
	render(){
		return(
			<View className='my-user-item-wrap'>

				{
					this.props.data.map((item,index)=>{
						return(
							<View key={index} className='my-user-item' onClick={this.navigateTo.bind(this,item.link)}>
								<Image className='left-img' style={{width:item.wh,height:item.wh,borderRadius:item.wh,padding:0,margin: '0 0.7rem'}} src={item.imgUrl} />
								<View className='b-border'>
									<View className='text-wrap'>
										<Text className='text-title'>{item.title}</Text>
										<Text className='text-description'>{item.description}</Text>
									</View>
									<AtIcon value='chevron-right' size='16' color='#737384'></AtIcon>
								</View>
							</View>
						)
					})
				}
			</View>
		)
	}
}

export default UserItem

/*
data Objict
{
	
}
*/