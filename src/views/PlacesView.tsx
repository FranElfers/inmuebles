import { useAtomValue } from "jotai"
import { NavLink } from "react-router"
import { placesAtom } from "../tools/atoms"

export default function PlacesView() {
	const getPlaces = useAtomValue(placesAtom)

	return <div className="places-view">
		{getPlaces.map(place => <NavLink to={"/place/" + place.id} key={place.id}>Place {place.Title}</NavLink>)}
	</div>
}
