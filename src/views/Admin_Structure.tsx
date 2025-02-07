import { useAtomValue } from "jotai"
import { placesAtom } from "../tools/atoms"
import MyTable from "../components/DrawTable"
import { useNavigate } from "react-router"

/** no me acuerdo que hace esto TODO */
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

const Admin_Structure: React.FC<{ collectionName: string }> = ({ collectionName }) => {
	const places = useAtomValue(placesAtom)
	const nav = useNavigate()

	return <div>
		<h2>{collectionName}</h2>
		<MyTable
			headers={['Title', 'Seller', 'Price']}
			content={places.map((place) => ({
				texts: [place.Title, place.Seller_name, place.Price],
				callback: () => {
					console.log('debug:', place.id)
					nav('/admin/db/place/' + place.id)
				}
			}))}
		/>
	</div>
}

export default Admin_Structure