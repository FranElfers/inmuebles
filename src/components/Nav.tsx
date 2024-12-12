import { NavLink, Outlet } from "react-router"

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
	return <div className="sidebar">
		<NavLink to="/">Home</NavLink>
		<NavLink to="/places">Places</NavLink>
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
