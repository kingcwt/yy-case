import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtIcon, AtDrawer } from 'taro-ui'
import Drawer from '../Drawer/index'
import './style.less'
import toLeft from '../../static/img/toLeft.png'


class TopInfo extends Component{

	constructor(props){
		super(props)
		this.state={
			show:false
		}
	}
	 
	back = () => {
		Taro.navigateBack({ delta: 1 })
	}
	
	ck= () =>{
		this.setState({
			show:true
		})
	}

	onCloseFunc = () => {
		this.setState({
			show:false
		})
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
	}

	render(){
		return(
			<View>
				<View className='top-info'>
					<Image onClick={this.back} src={toLeft} />
					<Text>{this.props.val}</Text>
					{
						this.props.menuNotShow?
						(
							<Text></Text>
						)
						:
						(
							<AtIcon onClick={this.ck} value='menu' size='28' color='#fff'></AtIcon>
						)
					}
					
				</View>
				<Drawer 
					show={this.state.show}
					onCloseFunc={this.onCloseFunc}					
				/>
				{/*<AtDrawer 
					show={this.state.show} 
					right 
					mask 
					onItemClick={this.handClick}
					items={['机构', '甩单','活动','广场','个人中心','发布新产品','发布新甩单','发布新活动','发布新帖子']}
				></AtDrawer>*/}
			</View>
		)
	}	
}
export default TopInfo