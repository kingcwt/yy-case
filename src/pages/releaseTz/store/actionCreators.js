import { constants } from './'

export const handleTzbtChange = (e) => {
	return {
		type:constants.HANDLE_TZBT_CHANGE,
		payload:e
	}
}

export const handleIsNm = (e) => {
	return {
		type:constants.HANDLE_ISNM,
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
			type:constants.CLOSE_IMG_UPLOAD
		}
	}else{
		return {
			type:constants.HANDLE_IMG_UPLOAD,
			payload:e
		}
	}
}