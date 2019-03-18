import { constants } from './'

export const handleSdbtChange = (arg) => {
	return {
		type:constants.HANDLE_SDBT_CHANGE,
		payload:arg
	}
}

export const handleIsNm = (e) => {
	return {
		type:constants.HANDLE_ISNM,
		payload:e
	}
}

export const handleCplxChange = (e) => {
	return {
		type:constants.HANDLE_CPLX_CHANGE,
		payload:e
	}
}

export const handleXxnrChange = (e) => {
	return {
		type:constants.HANDLE_XXNR_CHANGE,
		payload:e
	}
}

export const handleImgUpload = (e) => {
	if(e.length>=3){
		return {
			type:constants.CLOSE_IMG_UPLOAD,
			payload:e
		}
	}else{
		return {
			type:constants.HANDLE_IMG_UPLOAD,
			payload:e
		}
	}
}