import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'
import TopRegister from '../../components/TopRegister'
import HdItem from '../../components/Content/HuoDongItem'
import './style.less'
import user01 from '../../static/img/user01.jpg'
import right from '../../static/img/right.png'
let colorArr = ['FBE9E7','E3F2FD','F3E5F5','E9FBE7','EEEEEE','E7E9FB']

class HuoDong extends Component{
	config = {
		navigationBarTitleText: '活动'
	}

	componentDidMount(){
		this.props.getInitListData()
	}
	render(){
		let { data } = this.props.state

		return(
			<View className='my-hd'>
				<TopRegister />
				<View className='hdList'>
					{
						data.map((item,index)=>{
							return(
								<View key={index} className='hdListItem' onClick={this.props.navigateTo.bind(this,'/pages/huodong/list/index')}>
									{
										item.headerImg===''? 
										(<View className='user_header' style={{backgroundColor:'#'+colorArr[parseInt(Math.random()*(5-0+1)+0,10)]}}>{item.title[0]}</View>)
										:
										(<Image className='user_header' src={user01} />)
									}
								
									<View className='index_body_wrap'>
										<View className='body_content'>
											<View className='title'>举办公司:{item.title}</View>
											<View className='content'>公司地址:{item.address}</View>
											<View className='num'>有{item.num}个人正在报名</View>
										</View>
										<Image className='toRight' src={right} />
									</View>
								</View>
							)
						})
					}
				</View>
			</View>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {
		state:state.hdPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getInitListData () {
			dispatch(actionCreators.getInitListData())
		},
		navigateTo(e){
			Taro.navigateTo({
				url: e
			})
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( HuoDong )