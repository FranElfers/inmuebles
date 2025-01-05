import { Outlet } from "react-router"
import { useGetPlaces } from "../hooks/firebase"
import { MyButton, MyNavLink } from "./CustomTags"

/**
 * Barra de busqueda con posicion absoluta.
 */
function NavBar() {
	return <div className="navbar">
		<div>Inmuebles</div>
		<div>Search</div>
		<div>Publish</div>
		<div>Find an agent</div>
	</div>
}

/**
 * Barra lateral de navegacion con posicion absoluta.
 */
function SideBar() {
	const getPlaces = useGetPlaces()

	return <div className="sidebar">
		<MyNavLink to="/">Home</MyNavLink>
		<MyNavLink to="/places">Places</MyNavLink>
		<MyButton onClick={getPlaces} title="Obtener datos de Firebase">Obtener data</MyButton>
	</div>
}

export default function Nav() {
	return <>
		<NavBar />
		<div className="navbar-filler"></div>
		<div className="container">
			<SideBar />
			<Outlet />
		</div>
	</>
}
