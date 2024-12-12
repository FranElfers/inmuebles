import { NavLink } from "react-router"

const dataPrueba = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function PlacesView() {
	return <div className="places-view">
		{dataPrueba.map(place => <NavLink to={"/place/" + place} key={place}>Place {place}</NavLink>)}
	</div>
}
