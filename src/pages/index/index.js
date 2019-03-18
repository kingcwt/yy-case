import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import { connect } from '@tarojs/redux'
import { actionCreators } from './store'
import JiGouItem from '../../components/Content/JiGouItem'
import ShuaiDan from '../shuaidan'
import HuoDong from '../huodong'
import GuangChang from '../guangchang'
import User from '../user'
import TopLK from '../../components/TopLK'
import TopRegister from '../../components/TopRegister'
import Search from '../../components/Search'
import FixedCircleMenu from '../../components/FixedCircleMenu'
import './style.less'

class Index extends Component {

	config = {
		navigationBarTitleText: '首页'
	}

	static defaultProps = {
		
	}

	componentDidMount() {
		this.props.getInitListData()
	}

	render () {
		let { data, footerData, current ,showContent, topLKData } = this.props.state
		let { handleClick, topLKDataHandleClick } = this.props
		return (
			<View className='main'>
				{
					current===0?
					(
						<View className='main_body'>
							<TopLK 
								data={ topLKData }
								onClick = { topLKDataHandleClick }
							/>
							<TopRegister/>
							<Search />
							<View className='index_body'>
								{
									data.map((item,index)=>{
										return(
											<JiGouItem
												key={ index }
												data={ item }
												onClick={ this.props.navigateTo }
											/>
										)
									})
								}
							</View>
						</View>
					)
					:current===1?
					(<ShuaiDan/>)
					:current===2?
					(<HuoDong/>)
					:current===3?
					(<GuangChang/>)
					:current===4?
					(<User/>)
					:''
				}

				<AtTabBar
				  className='my-footer'
				  fixed
				  tabList={ footerData }
				  onClick={ handleClick }
				  current={ current }
				/>
				<FixedCircleMenu />
			</View>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {
		state:state.indexPageReducer
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		navigateTo(e){
			Taro.navigateTo({
				url: e
			})
		},
		handleClick (e) {
			dispatch(actionCreators.switchFooterMenu(e))
		},
		getInitListData () {
			dispatch(actionCreators.getInitListData())
		},
		topLKDataHandleClick (e) {
			dispatch(actionCreators.switchTopMenu(e))

		}
	}
}

export default connect ( mapStateToProps, mapDispatchToProps )( Index )