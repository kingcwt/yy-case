import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TopInfo from '../../../components/TopInfo'
import '../style.less'

class JigouProduct extends Component {

	config = {
		navigationBarTitleText: '机构产品'
	}
	navigateTo = (e) => {
		Taro.navigateTo({
			url: e
		})
	}
	
	render () {
		return (
			<View className='main'>
				<TopInfo
					val='机构产品'
				/>	

			</View>
		)
	}	
}


export default JigouProduct
