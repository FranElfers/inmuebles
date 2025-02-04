import { MyNavLink } from "../components/CustomTags"

/*
Lista todos los collections de firebase.
Es una lista estatica y hardcodeada porque no hay forma
(soportada) en firebase de obtener la lista de todos
los nombres de los collections de una base de datos.
*/

const Admin_Database = () => {
	return <div>
		<h2>Tablas</h2>
		<MyNavLink to="/admin/db/users">Users</MyNavLink>
		<br />
		<MyNavLink to="/admin/db/places">Places</MyNavLink>
	</div>
}

export default Admin_Database