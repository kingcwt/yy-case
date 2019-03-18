import { constants } from './'


const defaultState = {
	plVal:'',
	isNmConfig:{
		selector: ['不匿名', '匿名'],
		selectorChecked: '不匿名'
	},
}

export default (state = defaultState, action) => {
	switch (action.type){
		case constants.HANDLE_PL_CHANGE:
			return Object.assign({},state,{
				plVal:action.payload
			})
		case constants.HANDLE_ISNM:
			return Object.assign({},state,{
				isNmConfig:{
					selector: ['不匿名', '匿名'],
					selectorChecked:['不匿名', '匿名'][action.payload]
				}
			})
		default:
			return state
	}
}