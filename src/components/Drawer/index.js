import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon  } from 'taro-ui'
import './style.less'

class Drawer extends Component{
	constructor(props){
		super(props)
	}

	handClick = (e) => {
		let arrUrl = ['/','/','/','/','/','/pages/releaseProduct','/pages/releaseSd','/pages/releaseHd','/pages/releaseTz']
		if(e<=4){
			Taro.navigateTo({
				url: `/?val=${e}`
			})
		}else{
			Taro.navigateTo({
				url: arrUrl[e]
			})
		}
		this.props.onCloseFunc()
	}

	render(){
		let { show } = this.props
		return(
			<View className='my-drawer' style={{display:`${show?'':'none'}`}}>			
				<View className='my-drawer-list'>
					<View className='my-drawer-item' onClick={this.handClick.bind(this,0)}>
						<AtIcon value='bullet-list' size='26' color='#737373'></AtIcon> 机构
					</View>
					<View className='my-drawer-item' onClick={this.handClick.bind(this,1)}>
						<AtIcon value='lightning-bolt' size='26' color='#737373'></AtIcon> 甩单
					</View>
					<View className='my-drawer-item' onClick={this.handClick.bind(this,2)}>
						<AtIcon value='folder' size='26' color='#737373'></AtIcon> 活动
					</View>
					<View className='my-drawer-item' onClick={this.handClick.bind(this,3)}>
						<AtIcon value='streaming' size='26' color='#737373'></AtIcon> 广场
					</View>
					<View className='my-drawer-item' onClick={this.handClick.bind(this,4)}>
						<AtIcon value='user' size='23' color='#737373'></AtIcon> 个人中心
					</View>
					<View className='dd'></View>
					<View className='my-drawer-item' style={{border:'none'}} onClick={this.handClick.bind(this,5)}>
						<AtIcon value='shopping-bag' size='26' color='#737373'></AtIcon> 发布新产品
					</View>
					<View className='my-drawer-item' onClick={this.handClick.bind(this,6)}>
						<AtIcon value='shuffle-play' size='26' color='#737373'></AtIcon> 发布新甩单
					</View>
					<View className='my-drawer-item' onClick={this.handClick.bind(this,7)}>
						<AtIcon value='upload' size='26' color='#737373'></AtIcon> 发布新活动
					</View>
					<View className='my-drawer-item' onClick={this.handClick.bind(this,8)}>
						<AtIcon value='tag' size='26' color='#737373'></AtIcon> 发布新帖子
					</View>
				</View>
				<View className='zhezhao' onClick={this.props.onCloseFunc}>
				</View>
			</View>
		)
	}
}

export default Drawer

/*

*/