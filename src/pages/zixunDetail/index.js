import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Image } from '@tarojs/components'
import { AtList, AtListItem, AtIcon, AtAvatar  } from 'taro-ui'
import { connect } from '@tarojs/redux'
import Footer from '../../components/Footer'
import TopInfo from '../../components/TopInfo'
import './style.less'

class TzDetail extends Component {

	config = {
		navigationBarTitleText: '经营贷|兴业银行'
	}
	
	render () {
		return (
			<View className='main my-zx_detail'>
				<TopInfo
					val='经营贷|兴业银行'
				/>
				<View className='at-article'>
					<View className='at-article__h1'>
						这是一级标题这是一级标题
					</View>
					<View className='at-article__info'>
						2017-05-07&nbsp;&nbsp;&nbsp;这是作者
					</View>
					<View className='at-article__content'>
						<View className='at-article__section'>
							<View className='at-article__h2'>这是二级标题</View>
							<View className='at-article__h3'>这是三级标题</View>
								<View className='at-article__p'>
									这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
								</View>
								<View className='at-article__p'>
									这是文本段落。这是文本段落。
								</View>
								<Image 
									className='at-article__img' 
									src='https://jdc.jd.com/img/400x400' 
									mode='widthFix' 
								/>
							</View>
						</View>
					</View>
				
			</View>
		)
		}	
	}

export default TzDetail
