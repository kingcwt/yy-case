import { constants } from './'

export const handleCpmcChange = (e) => {
	return {
		type:constants.HANDLE_CPMC_CHANGE,
		payload:e
	}
}

export const handleCpjsChange = (e) => {
	return {
		type:constants.HANDLE_CPJS_CHANGE,
		payload:e
	}
}

export const handleImgChange = (e) => {
	if(e.length>=3){
		return {
			type:constants.CLOSE_IMG_UPLOAD,
			payload:e
		}
	}else{
		return {
			type:constants.HANDLE_IMG_CHANGE,
			payload:e
		}
	}
}

export const handleCplxChange = (e) => {
	return {
		type:constants.HANDLE_CPLX_CHANGE,
		payload:e
	}
}

export const handleXqlxChange = (e) => {
	return {
		type:constants.HANDLE_XQLX_CHANGE,
		payload:e
	}
}

export const handleYllChange = (e) => {
	return {
		type:constants.HANDLE_YLL_CHANGE,
		payload:e
	}
}

export const handleFwfyChange = (e) => {
	return {
		type:constants.HANDLE_FWFY_CHANGE,
		payload:e
	}
}

export const handleDkedChange = (e) => {
	return {
		type:constants.HANDLE_DKED_CHANGE,
		payload:e
	}
}
export const handleDkqxChange = (e) => {
	return {
		type:constants.HANDLE_DKQX_CHANGE,
		payload:e
	}
}

export const  handleFkzqChange = (e) => {
	return {
		type:constants.HANDLE_FKZQ_CHANGE,
		payload:e
	}
}

export const handleHkfsChange = (e) => {
	return {
		type:constants.HANDLE_HKFS_CHANGE,
		payload:e
	}
}




export const handleYsChange = (e) => {
	return {
		type:constants.HANDLE_YS_CHANGE,
		payload:e
	}
}

export const handleCpysChange = (e) => {
	return {
		type:constants.HANDLE_CPYS_CHANGE,
		payload:e
	}
}

export const handleSqtjChange = (e) => {
	return {
		type:constants.HANDLE_SQTJ_CHANGE,
		payload:e
	}
}

export const handleSxclChange = (e) => {
	return {
		type:constants.HANDLE_SXCL_CHANGE,
		payload:e
	}
}

export const handleBllcChange = (e) => {
	return {
		type:constants.HANDLE_BLLC_CHANGE,
		payload:e
	}
}

export const handleFytsChange = (e) => {
	return {
		type:constants.HANDLE_FYTS_CHANGE,
		payload:e
	}
}

export const handleQtxxChange = (e) => {
	return {
		type:constants.HANDLE_QTXX_CHANGE,
		payload:e
	}
}