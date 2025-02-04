import { Outlet } from "react-router"
import { useGetPlaces } from "../hooks/firebase"
import { MyAsyncButton, MyButton, MyNavLink } from "./CustomTags"
import { SideBarLinkType } from "../configs"
import { FC, PropsWithChildren } from "react"

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
const SideBar: FC<PropsWithChildren<{ links: SideBarLinkType[] }>> = function ({ links }) {
	const getPlaces = useGetPlaces()

	return <div className="sidebar">
		{links.map((link) => <MyNavLink to={link.url}>{link.text}</MyNavLink>)}
		<MyAsyncButton onClick={getPlaces} title="Obtener datos de Firebase">Obtener data</MyAsyncButton>
	</div>
}

const Nav: FC<PropsWithChildren<{ links: SideBarLinkType[] }>> = function ({ links }) {
	return <>
		<NavBar />
		<div className="navbar-filler"></div>
		<div className="container">
			<SideBar links={links} />
			<Outlet />
		</div>
	</>
}

export default Nav