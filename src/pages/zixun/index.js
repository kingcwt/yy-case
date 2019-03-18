import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'

/* components */
import TopLK from '../../components/TopLK'
import TopRegister from '../../components/TopRegister'
import Content from '../../components/Content'

/* img */
import home from '../../static/img/home.png'
import news from '../../static/img/news.png'
/* style */
import './style.less'

class ZiXun extends Component{
	config = {
		navigationBarTitleText: '资讯'
	}
	componentDidMount(){
		this.props.getInitListData() 
	}
	render(){
		let { data, swiperData } = this.props.state
		return(
			<View className='main'>
				<View className='main_body'>
					<Swiper
						className='zx_swiper'
						indicatorColor='#4B87BD'
						indicatorActiveColor='#027BE3'
						circular
						indicatorDots
						autoplay
					>
						{
							swiperData.map((item,index)=>{
								return(
									<SwiperItem key='index'>
										<Image src={item} />
									</SwiperItem>
								)
							})
						}
					</Swiper>

					<AtList>
						{
							data.map((item,index)=>{
								return (
									<AtListItem
										note={item.text}
										title={item.title}
										extraText='123'
									/>
								)
							})
						}	
					</AtList>
				</View>
			</View>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {
		state:state.zixunPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getInitListData(){
			dispatch(actionCreators.getInitListData())
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( ZiXun )