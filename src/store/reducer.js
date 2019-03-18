import { combineReducers } from 'redux'
import { reducer as indexPageReducer } from '../pages/index/store'
import { reducer as sdPageReducer } from '../pages/shuaidan/store'
import { reducer as hdPageReducer } from '../pages/huodong/store'
import { reducer as gcPageReducer } from '../pages/guangchang/store'
import { reducer as zixunPageReducer } from '../pages/zixun/store'
import { reducer as userPageReducer } from '../pages/user/store'
import { reducer as regPageReducer } from '../pages/register/store'
import { reducer as indexJgDetailPageReducer } from '../pages/index/jgDetail/store'
import { reducer as indexUserDetailPageReducer } from '../pages/index/userDetail/store'
import { reducer as sdDetailPageReducer } from '../pages/sdDetail/store'
import { reducer as hdListPageReducer } from '../pages/huodong/list/store'
import { reducer as releaseProductPageReducer } from '../pages/releaseProduct/store'
import { reducer as releaseSdPageReducer } from '../pages/releaseSd/store'
import { reducer as releaseHdPageReducer } from '../pages/releaseHd/store'
import { reducer as releaseTzPageReducer } from '../pages/releaseTz/store'
import { reducer as sysSetPageReducer } from '../pages/sysSet/store'
import { reducer as pinglunPageReducer } from '../pages/pinglunPage/store'
import { reducer as myPointsPageReducer } from '../pages/user/MyPoints/store'

export default combineReducers({
	indexPageReducer,
	sdPageReducer,
	hdPageReducer,
	gcPageReducer,
	zixunPageReducer,
	userPageReducer,
	regPageReducer,
	indexJgDetailPageReducer,
	indexUserDetailPageReducer,
	sdDetailPageReducer,
	hdListPageReducer,
	releaseProductPageReducer,
	releaseSdPageReducer,
	releaseHdPageReducer,
	releaseTzPageReducer,
	sysSetPageReducer,
	pinglunPageReducer,
	myPointsPageReducer
})
