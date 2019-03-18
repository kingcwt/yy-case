import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
	constructor(){
		super()
	}

  config = {
    pages: [
			'pages/index/index',
      'pages/register/index',
      'pages/index/jgDetail/index',
      'pages/index/userDetail/index',
      'pages/index/jigouProduct/index',
      'pages/index/productDetail/index',
      'pages/sdDetail/index',
      'pages/huodong/list/index',
      'pages/hdDetail/index',
      'pages/gcDetail/index',
      'pages/user/yqjl/index',
      'pages/user/MyPoints/index',
      'pages/user/harvestLz',
      'pages/releaseProduct/index',
      'pages/releaseSd/index',
      'pages/releaseHd/index',
      'pages/releaseTz/index',
      'pages/sysSet/index',
      'pages/pinglunPage/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
