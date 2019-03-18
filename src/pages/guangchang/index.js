import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'
import TopLK from '../../components/TopLK'
import TopRegister from '../../components/TopRegister'
import GcItem from '../../components/Content/GuangChangItem'
import ZiXun from '../zixun'
import user01 from '../../static/img/user01.jpg'
import right from '../../static/img/right.png'

let colorArr = ['FBE9E7','E3F2FD','F3E5F5','E9FBE7','EEEEEE','E7E9FB']

/* style */
import './style.less'

class GuangChang extends Component{
	config = {
		navigationBarTitleText: '广场'
	}
	
	componentDidMount(){
		this.props.getInitListData()
	}
	render(){
		let { showContent, topLKData, data } = this.props.state
		
		return(
			<View className='my-gc-wrap'>
				<TopLK
					data = { topLKData }
					onClick = { this.props.topLKDataHandleClick }
				/>
				{
					showContent===0?
					(
						<View>
							<TopRegister />
							<View className='index_body'>
								{
									data.map((item,index)=>{
										return(
											<View className='gcListItem' key={index} onClick={this.props.navigateTo.bind(this,'/pages/gcDetail/index')}>
												{
													item.headerImg===''? 
													(<View className='user_header' style={{backgroundColor:'#'+colorArr[parseInt(Math.random()*(5-0+1)+0,10)],marginTop:'-2.5rem'}}>{item.title[0]}</View>)
													:
													(<Image style={{marginTop:'-2.5rem'}} className='user_header' src={user01} />)
												}
												<View className='index_body_wrap'>
													<View className="body_content">
														<Text className="title">主题:{item.title}</Text>
														<View className='stateOrTime'>
															<View className='dy'>{item.createTime}</View>
															<View  className={`stating-${item.stating}`}>{item.stating==='will'? '未开始':item.stating==='ing'? '讨论中':'已结束'}</View>
														</View>
														<Text className="content">{item.description}</Text>
													</View>
													
												</View>
											</View>
										)
									})
								}
							</View>
						</View>
					)
					:
					(<ZiXun/>)
				}
				
			</View>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {
		state:state.gcPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		navigateTo(e){
			Taro.navigateTo({
				url: e
			})
		},
		getInitListData () {
			dispatch(actionCreators.getInitListData())
		},
		topLKDataHandleClick (e) {
			dispatch(actionCreators.switchTopMenu(e))
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( GuangChang )