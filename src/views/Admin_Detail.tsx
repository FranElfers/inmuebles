import { useAtomValue } from "jotai";
import { useParams } from "react-router";
import { placesAtom } from "../tools/atoms";
import MyTable from "../components/DrawTable";

export default function Admin_PlaceDetail() {
	const getPlaces = useAtomValue(placesAtom)
	let params = useParams();
	const selectedPlace = getPlaces.find(p => p.id === params.place)

	if (selectedPlace === undefined) return <div>
		<p>Lugar no encontrado</p>
	</div>

	const formattedPlace = Object.entries(selectedPlace)

	return <MyTable
		headers={['Campo', 'Valor']}
		content={formattedPlace.map(([key, value]) => ({
			texts: [key, JSON.stringify(value)]
		}))}
	/>
}