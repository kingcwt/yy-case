import { constants } from './'

export const handleHdztChange = (e) => {
	return {
		type:constants.HANDLE_HDZT_CHANGE,
		payload:e
	}
}
export const handleHddzChange = (e) => {
	return {
		type:constants.HANDLE_HDDZ_CHANGE,
		payload:e
	}
}
export const handleLxdhChange = (e) => {
	return {
		type:constants.HANDLE_LXDH_CHANGE,
		payload:e
	}
}
export const handleHdrsChange = (e) => {
	return {
		type:constants.HANDLE_HDRS_CHANGE,
		payload:e
	}
}
export const handleXxnrChange = (e) => {
	return {
		type:constants.HANDLE_XXNR_CHANGE,
		payload:e
	}
}
export const handleLxrChange = (e) => {
	return {
		type:constants.HANDLE_LXR_CHANGE,
		payload:e
	}
}