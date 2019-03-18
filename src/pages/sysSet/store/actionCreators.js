import { constants } from './'

export const handleSdbtChange = (arg) => {
	return {
		type:constants.HANDLE_SDBT_CHANGE,
		payload:arg
	}
}

