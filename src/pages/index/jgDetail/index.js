import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'
import TopInfo from '../../../components/TopInfo'
import '../style.less'

class JgDetail extends Component {

	config = {
		navigationBarTitleText: '机构详情'
	}
	
	componentDidMount(){
		this.props.getInitListData()
	}
	
	render () {
		let { jgInfo, jgData } = this.props.state
		return (
			<View className='main jigou_detail'>
				<TopInfo
					val='机构详情'
				/>		
				<AtList>
					<AtListItem
						className='jigou_detail_one'
						note={jgInfo.note}
						title={jgInfo.title}
						extraText='机构产品 >'
						thumb={jgInfo.thumb}
						
					/>
					{
						jgData.map((item,index)=>{
							return(
								<AtListItem
									key={index}
									className='my-list-item'
									arrow='right'
									note={item.note}
									title={item.title}
									extraText={item.extraText}
									thumb={item.thumb}
									onClick={this.props.handleClick.bind(this,'/pages/index/userDetail/index')}
								/>
							)
						})
					}
				</AtList>
				<Text className='dx'>我们是有底线的!</Text>
			</View>
		)
	}	
}

const mapStateToProps = ( state ) => {
	return {
		state:state.indexJgDetailPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		handleClick (e) {
			Taro.navigateTo({
				url:e
			})
		},
		getInitListData () {
			dispatch(actionCreators.getInitListData())
		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( JgDetail )
