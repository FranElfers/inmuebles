import { useSetAtom } from "jotai"
import { useEffect, useState } from "react"
import { placesAtom } from "../tools/atoms"
import { firebaseGetPlaces, firebaseUploadPlace } from "../firebase"
import { Place } from "../types"

export const useGetData = <T>(cb: () => Promise<T[]>): T[] => {
	const [data, setData] = useState<T[]>([])

	useEffect(() => {
		cb().then(setData)
	}, [])

	return data
}

/**
 * Devuelve una funcion que permite obtener las propiedades y 
 * las guarda en un atom para su reactividad.
 */
export const useGetPlaces = (): () => void => {
	const setData = useSetAtom(placesAtom)

	return () => {
		firebaseGetPlaces().then((data) => {
			setData(data)
			return data
		})
	}
}

/**
 * Devuelve una funcion que permite enviar una o varias propiedades
 * y las setea en el atom.
 */
export const useSetPlace = (): (place: Place) => void => {
	const setData = useSetAtom(placesAtom)

	return (place) => {
		setData((prev) => [...prev, place])
		firebaseUploadPlace(place)
	}
}