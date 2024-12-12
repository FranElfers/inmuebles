import { PlacesTable } from '../components/Crud'
import { useValidatePlace } from '../components/UploadPlace'
import { useGetPlaces, useSetPlace } from '../hooks/firebase'
import './Start.css'

const MainGrid = () => {
	const { errorMessage, handleInput, info, isInvalid } = useValidatePlace()
	const getPlaces = useGetPlaces()
	const setPlace = useSetPlace()

	return <div className="admin-container">
		<div className="tabla">
			<PlacesTable />
		</div>
		<div className="left">
			<h3>¿Cómo subir datos?</h3>
			<p>Se puede copiar y pegar en el area de texto una propiedad individual. Al momento de pegar el objeto json, se comprobarán los atributos para validar que sea una propiedad completa.</p>
			<p>Adicionalmente se puede subir un json que tiene que tener una lista de propiedades, y pasará por el mismo validador para subirlo correctamente a la base de datos.</p>
			<button onClick={getPlaces}>Obtener places</button>
		</div>
		<div className="right">
			<h3>Subir datos</h3>
			<div className="upload">
				<div className='input'>
					<textarea id="object" name="object" placeholder="Tu objeto json" onChange={handleInput} />
					<div>
						<button disabled>Subir archivo</button>
						<button disabled={isInvalid} onClick={() => setPlace(info)}>Subir</button>
					</div>
				</div>
				<div>
					<code>{errorMessage}</code>
				</div>

			</div>
		</div>
	</div>
}

export default MainGrid