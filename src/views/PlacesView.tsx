import { useAtomValue } from "jotai"
import { NavLink } from "react-router"
import { placesAtom } from "../tools/atoms"
import React from "react"
import { Place } from "../types"

const PlaceLink: React.FC<{ place: Place }> = ({ place: p }) => {
	return <NavLink to={"/place/" + p.id} key={p.id}>Place {p.Title} - {p.Currency} {p.Price}</NavLink>
}

export default function PlacesView() {
	const places = useAtomValue(placesAtom)

	if (!places.length) return <div className="places-view">
		<p>No hay lugares disponibles</p>
	</div>

	return <div className="places-view">
		{places.map(p => <PlaceLink place={p} />)}
	</div>
}
