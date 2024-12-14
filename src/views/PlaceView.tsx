import { useAtomValue } from "jotai";
import { useParams } from "react-router";
import { placesAtom } from "../tools/atoms";

export default function PlaceView() {
	const getPlaces = useAtomValue(placesAtom)
	let params = useParams();
	const selectedPlace = getPlaces.find(p => p.id === params.place)

	if (selectedPlace === undefined) return <div>
		<p>Lugar no encontrado</p>
	</div>

	return <div>
		<p>{selectedPlace.id}</p>
		<p>{selectedPlace.Title}</p>
		<p>{selectedPlace.Description}</p>
		<p>{selectedPlace.Currency} {selectedPlace.Price}</p>
		<p>{selectedPlace.Product_URL}</p>
	</div>
}