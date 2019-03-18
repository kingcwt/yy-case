import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './style.less'

class TopLK extends Component {
	
	render(){
		let { data, onClick } = this.props
		return(
			<View className="TopLK_wrap">
				{
					data.map((item,index)=>{
						return(
							<View key={index} className='item' onClick={ onClick.bind(this,index) }>
								<Image  src={ item.imgUrl }/>
								{ item.text }
							</View>
						)
					})
				}
			</View>
		)
	}
}

export default TopLK 