import { ChangeEvent, useState } from "react"
import { firebaseUploadPlace } from "../firebase"
import { Place } from "../types"
import { DefaultPlace } from "../defaultvalues"
import { tryParse } from "../tools/utils"
import Parser from "../tools/jsonValidation"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

/**
 * valida el input buscando errores en la estructura.
 * deberia moverse a la carpeta de hooks, pero todavia es 
 * util lo que hice con {@link UploadPlace}
 */
export const useValidatePlace = () => {
	const [info, setInfo] = useState<Place>(DefaultPlace)
	const [isInvalid, setInvalid] = useState<boolean>(true)
	const [errorMessage, setErrorMessage] = useState<string>('')

	const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setErrorMessage('')
		const value = tryParse(e.target.value)
		if (value === undefined) {
			setErrorMessage("Json invalido")
			return setInvalid(true)
		}
		if (typeof value !== 'object') {
			setErrorMessage("Tu json no es un objeto")
			return setInvalid(true)
		}

		const parseResult = Parser.Place.safeParse(value)
		if (!parseResult.success) {
			const errorString = tryParse(parseResult.error.message).map((err: any) => {
				if (err.received === 'undefined') return `${err.path.join('.')} no existe\n`
				return `${err.path.join('.')} tiene que ser ${err.expected}\n`
			})
			setErrorMessage(errorString)
			return setInvalid(true)
		}

		setInvalid(false)
		setInfo(parseResult.data)
	}

	return {
		handleInput,
		info,
		isInvalid,
		errorMessage
	}
}

const UploadPlace: React.FC = () => {
	const { errorMessage, handleInput, info, isInvalid } = useValidatePlace()

	return <>
		<SyntaxHighlighter language="json" style={materialDark}>
			{JSON.stringify(DefaultPlace, undefined, 2)}
		</SyntaxHighlighter>
		<p>{errorMessage}</p>
		<textarea id="object" name="object" placeholder="Tu objeto json" onChange={handleInput} />
		<div>

			<button type="submit" disabled={isInvalid} onClick={() => firebaseUploadPlace(info)}>Subir</button>
		</div>
	</>
}

export default UploadPlace