import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import JiGouItem from './JiGouItem'
import ShuaiDanItem from './ShuaiDanItem'
import HuoDongItem from './HuoDongItem'
import GuangChangItem from './GuangChangItem'
import './style.less'
const IndexBodyUi = ( props ) => {
	return (
		<View className='index_body'>
			{
				props.data.map((item,index)=>{
					if(props.path.path==='/'){
						return (
							<JiGouItem 
								key={index}
								data={item}
							/>
						)
					}else if(props.path.path==='/pages/shuaidan/index'){
						return (
							<ShuaiDanItem 
								key={index}
								data={item}
							/>
						)
					}else if(props.path.path==='/pages/huodong/index'){
						return (
							<HuoDongItem 
								key={index}
								data={item}
							/>
						)
					}else if(props.path.path==='/pages/guangchang/index'){
						return (
							<GuangChangItem 
								key={index}
								data={item}
							/>
						)
					}
				})
			}

			<View style={{height:'2.6rem'}} />
		</View>
	)
}

export default IndexBodyUi