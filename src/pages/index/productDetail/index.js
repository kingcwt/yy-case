import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtAvatar, AtCard  } from 'taro-ui'

/* components */
import TopInfo from '../../../components/TopInfo'

/* img */
import user01Jpg from '../../../static/img/user01.jpg'

/* style */
import '../style.less'

class ProductDetail extends Component {

	config = {
		navigationBarTitleText: '产品详情'
	}
	
	render () {
		return (
			<View className='main my-product-detail'>
				<TopInfo
					val='产品详情'
				/>	

				<View className='my-user-detail-info-wrap'>
					<AtAvatar 
						circle
						size='large'
						image='https://jdc.jd.com/img/200'
					>
					</AtAvatar>
					<View className='my-user-detail-info-wrap-right-wrap'>
						<Text className='title'>给力单方</Text>
						<Text className='info'>房屋抵押</Text>
						<Text className='des'>年化7.3-7.8真实住宅，真实公司，最高给五成</Text>
					</View>

					
				</View>

				<View className='content'>
					<AtCard
					  title='产品描述'
					>
					  <View>查询次数三次以内，江苏可以第三次查询，只看贷款审批、信用卡审批，其他不看 负债：房贷不算负债，其他银行负债看月供，
					  信用卡负债算已用额度的10% 额度计算方法：（收入-负债）x30倍 例如：客户A打卡工资15000，贷款月供5000 
					  计算：（15000-5000）x30=30万 例如：客户B公积金个人缴费2000，贷款月供6000 计算：（2000➗0.12-6000）
					  x30=30万</View>
					</AtCard>

					<AtCard
					  title='申请条件'
					>
					  <View>1、打卡工资5000可申请，打卡工资30倍</View>
					  <View>2、公积金个人缴费600以上可申请，额度个人缴费600➗0.12 X 30倍 </View>
					  <View>3、社保基数5000以上，缴费基数30倍</View>
					</AtCard>

					<AtCard
					  title='所需材料'
					>
					  <View>身份证原件</View>
					  <View>产品1、：半年流水+社保卡或公积金卡</View>
					  <View>产品2、3、：社保卡或公积金卡</View>
					</AtCard>

					<AtCard
					  title='办理流程'
					>
					  <View>来银行办理即可，也可外出签约，约起来13810945434</View>
					</AtCard>

					<AtCard
					  title='费用提示'
					>
					  <View>无任何其他费用</View>
					</AtCard>

					<AtCard
					  title='其他内容'
					>
					  <Image src={user01Jpg} />
					</AtCard>
				</View>
				
			</View>
		)
	}	
}


export default ProductDetail
