import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtGrid } from "taro-ui"
import TopInfo from '../../components/TopInfo'
import lzPng from '../../static/img/lz.png'
import './style.less'

class harvestLz extends Component {

	config = {
		navigationBarTitleText: '蓝钻生长'
	}
	
	render () {
		return (
			<View className='main my-harvest-lz'>
				<TopInfo
					val='蓝钻生长'
				/>		
				<View className='my-harvest-lz-d2'>
					<View>原力值 65</View>
					<View>蓝钻 1.6885</View>
					<View className='my-harvest-wrap'>
						<AtGrid hasBorder={false} columnNum={5} data={
						  [
						    {
						      image: lzPng,
						      value: '0.0949'
						    },
						    {
						      image: lzPng,
						      value: '0.0831'
						    },
						    {
						      image: lzPng,
						      value: '0.0729'
						    },
						    {
						      image: lzPng,
						      value: '1.1102'
						    },
						    {
						      image: lzPng,
						      value: '0.0731'
						    },
						    {
						      image: lzPng,
						      value: '正在生长中'
						    }
						  ]
						} />
					</View>
				</View>
			</View>
		)
		}	
	}

export default harvestLz
