import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'
import TopRegister from '../../components/TopRegister'
import SdItem from '../../components/Content/ShuaiDanItem'
import './style.less'

import user01 from '../../static/img/user01.jpg'
import right from '../../static/img/right.png'

let colorArr = ['FBE9E7','E3F2FD','F3E5F5','E9FBE7','EEEEEE','E7E9FB']

class ShuaiDan extends Component {
	config = {
		navigationBarTitleText: '甩单'
	}

	componentDidMount(){
		this.props.getInitListData()
	}
	render(){
		let { data } = this.props.state
		return(
			<View className='my-sd-wrap'>
				<TopRegister />
				<View className='index_body'>
					{
						data.map((item,index)=>{
							return(
								<View className='sdListItem' key={index} onClick={this.props.navigateTo.bind(this,'/pages/sdDetail/index')}>
									{
										item.headerImg===''?
										(<View className='user_header' style={{backgroundColor:'#'+colorArr[parseInt(Math.random()*(5-0+1)+0,10)],marginTop:'-2.5rem'}}>{item.title[0]}</View>)
										:
										(<Image style={{marginTop:'-2.5rem'}} className='user_header' src={user01} />)
									}
									<View className='index_body_wrap'>
										<View className="title">主题:{item.title}</View>
										<View className='stateOrTime'>
											<View className='dy'>{item.category}</View>
											<View  className={`stating-${item.stating}`}>{item.stating==='will'? '未开始':item.stating==='ing'? '甩单中':'已结束'}</View>
										</View>
										<View className="content">{item.description}</View>
										<View className='jobOrTime'>
											<View className='job'>{item.username} 经理</View>
											<View className='time'>{item.createTime}</View>
										</View>
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
		state:state.sdPageReducer
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
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( ShuaiDan )