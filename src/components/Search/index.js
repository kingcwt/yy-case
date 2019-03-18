import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Input } from '@tarojs/components'
import './style.less'

class Search extends Component{
	render(){
		return(
			<View className='search'>
				<Input type="text" placeholder="输入搜索名称或地址"/>
			</View>
		)
	}
}

export default Search