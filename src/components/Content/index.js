import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import IndexBodyUi from './indexUi'
import { fd, sd, hd, gc } from '../../actions/topSwitch'


@connect(({ topSwitch }) => ({
  topSwitch
}), (dispatch) => ({
  fd () {
    dispatch(fd())
  },
  sd () {
    dispatch(sd())
  },
  hd () {
    dispatch(hd())
  },
  gc () {
    dispatch(gc())
  }
}))
class IndexBody extends Component {
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
	
	componentDidMount(){
		if(this.$router.path==='/'){	
			this.props.fd();
		}else if(this.$router.path==='/pages/shuaidan/index'){
			this.props.sd();
		}else if(this.$router.path==='/pages/huodong/index'){
			this.props.hd();
			
		}else if(this.$router.path==='/pages/guangchang/index'){
			this.props.gc();
		}
		
	}
	
	render () {
		return (
			<IndexBodyUi
				data={this.props.topSwitch.data}
				path={this.$router}
			/>
		)
	}
}

export default IndexBody