import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtButton, AtIcon, AtActionSheet } from 'taro-ui'


/*require img*/
import and2Png from '../../static/img/and2.png'
import productPng from '../../static/img/menu.png'
import jcPng from '../../static/img/jc.png'
import teamPng from '../../static/img/team2.png'

/* style */
import './style.less'

class FixedCircleMenu extends Component{
	constructor(props){
		super(props)
		this.state={
			isShow:false
		}
	}

	handleClick = (e) => {
		console.log(1111);
		this.setState({
			isShow:this.state.isShow===true?false:true
		})
	}

	navigateTo (e){
		Taro.navigateTo({
			url: e
		})
		this.setState({
			isShow:!this.state.isShow
		})
	}

	render(){
		let { isShow } = this.state
		return(
			<View className='my-fixed-circle-menu'>
				<Image onClick={this.handleClick}  className={isShow?'showMenu':''} src={and2Png}/>
				<View className={this.state.isShow===true?'my-fixed-circle-menu-list':'notShow'}>
					<View className='item'><Image onClick={this.navigateTo.bind(this,'/pages/releaseProduct/index')}  src={productPng}/></View>
					<View className='item'><Image onClick={this.navigateTo.bind(this,'/pages/releaseSd/index')}  src={jcPng}/></View>
					<View className='item'><Image onClick={this.navigateTo.bind(this,'/pages/releaseHd/index')}  src={teamPng}/></View>
				</View>
			</View>
		)
	}
}

export default FixedCircleMenu
