import { MyNavLink } from "../components/CustomTags"

const Admin_Index = () => {
	return <>
		<h1>Admin page</h1>
		<MyNavLink to="/admin/db">Base de datos</MyNavLink>
	</>
}

export default Admin_Index