import { constants } from './'

export const handlePlChange = (e) => {
	return {
		type:constants.HANDLE_PL_CHANGE,
		payload:e
	}
}

export const handleIsNm = (e) => {
	return {
		type:constants.HANDLE_ISNM,
		payload:e
	}
}