import { object } from "zod"
import { MyNavLink } from "../components/CustomTags"
import { DefaultPlace } from "../defaultvalues"
import SyntaxHighlighter from "react-syntax-highlighter"
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useGetPlaces } from "../hooks/firebase"
import { useAtomValue } from "jotai"
import { placesAtom } from "../tools/atoms"

const isObject = (x: any) => typeof x === 'object' && x !== null

export function convertObjectToList(obj: Record<string, any>, prefix = ""): string[] {
	let result: string[] = [];

	for (const key in obj) {
		const currentPath = prefix ? `${prefix}.${key}` : key;

		if (typeof obj[key] === "object" && obj[key] !== null) {
			// Llama recursivamente para procesar los objetos anidados
			result = result.concat(convertObjectToList(obj[key], currentPath));
		} else {
			// Agrega la clave actual al resultado
			result.push(currentPath);
		}
	}

	// Retorna la lista final
	return result;
}

function fran() {
	let output
	convertObjectToList(DefaultPlace)?.map((key) => {

	})
}

const PlaceStructure = () => <p style={{ "textAlign": "left" }}>
	{convertObjectToList(DefaultPlace)?.map((key) => {
		if (key.includes('.')) {
			return <pre>&ensp;<MyNavLink to={'admin/db/places/' + key} key={key}>{key}</MyNavLink></pre>
		}
		return <pre>&ensp;<MyNavLink to={'admin/db/places/' + key} key={key}>{key}</MyNavLink></pre>
	})}
	---------------------------------------------------------------------------
	<pre>&ensp;<MyNavLink to="id">id</MyNavLink></pre>
	<pre>&ensp;<MyNavLink to="Title">Title</MyNavLink></pre>
	<pre>&ensp;<MyNavLink to="Price">Price</MyNavLink></pre>
	<pre>&ensp;<MyNavLink to="Currency">Currency</MyNavLink></pre>
	<pre>&ensp;<MyNavLink to="Seller_name">Seller_name</MyNavLink></pre>
	<pre>&ensp;<MyNavLink to="Description">Description</MyNavLink></pre>
	<pre>&ensp;<MyNavLink to="Location">Location</MyNavLink></pre>
	<pre>&ensp;<MyNavLink to="Map">Map</MyNavLink></pre>
	<pre>&ensp;<MyNavLink to="Specifications">Specifications</MyNavLink></pre>
	<pre>&ensp;&ensp;<MyNavLink to="Superficie_total">Superficie_total</MyNavLink></pre>
	<pre>&ensp;&ensp;<MyNavLink to="Superficie_cubierta">Superficie_cubierta</MyNavLink></pre>
	<pre><MyNavLink to="Ambientes">&ensp;&ensp;Ambientes</MyNavLink></pre>
	<pre>&ensp;&ensp;<MyNavLink to="Dormitorios">Dormitorios</MyNavLink></pre>
	<pre>&ensp;&ensp;<MyNavLink to="Baños">Baños</MyNavLink></pre>
	<pre>&ensp;&ensp;<MyNavLink to="Bauleras">Bauleras</MyNavLink></pre>
	<pre>&ensp;&ensp;<MyNavLink to="Antigüedad">Antigüedad</MyNavLink></pre>
	<pre>&ensp;&ensp;<MyNavLink to="Disposición">Disposición</MyNavLink></pre>
	<pre>&ensp;&ensp;<MyNavLink to="Orientación">Orientación</MyNavLink></pre>
	<pre>&ensp;&ensp;<MyNavLink to="Expensas">Expensas</MyNavLink></pre>
	<pre>&ensp;<MyNavLink to="Product_URL">Product_URL</MyNavLink></pre>
</p>

const Admin_Structure: React.FC<{ collectionName: string }> = ({ collectionName }) => {
	const places = useAtomValue(placesAtom)
	const getPlaces = useGetPlaces()

	return <div>
		<h2>{collectionName}</h2>
		<table style={{ 'borderSpacing': '1rem' }}>
			<tr>
				<th>Title</th>
				<th>Seller</th>
				<th>Price</th>
			</tr>
			{places.map((place) => <tr>
				<td>{place.Title}</td>
				<td>{place.Seller_name}</td>
				<td>{place.Price}</td>
			</tr>)}

		</table>

		<h2>Estructura de {collectionName}</h2>
		{/* <PlaceStructure />
		<SyntaxHighlighter language="json" style={materialDark}>
			{JSON.stringify(DefaultPlace, undefined, 2)}
		</SyntaxHighlighter> */}
	</div>
}

export default Admin_Structure