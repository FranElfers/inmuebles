export const tryParse = (json: any): any | undefined => {
	try {
		return JSON.parse(json)
	} catch (e) {
		return undefined
	}
}