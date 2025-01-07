import { useEffect, useRef, useState } from "react"
import { moverValorEntreClaves } from "../tools/jsonConverter"

const Admin_JsonView: React.FC = () => {
	const [route, setRoute] = useState('')
	const [newRoute, setNewRoute] = useState('')
	const [input, setInput] = useState('')
	const [output, setOutput] = useState('')
	const outputRef = useRef(null)

	useEffect(() => {
		setOutput('')
		console.log('Admin_JsonView render', { route, newRoute })

		try {
			const cleanInput = JSON.parse(input)
			if (cleanInput.length === undefined) throw new Error('no es una lista')
			const newOutput = []
			for (const el of cleanInput) {
				newOutput.push(moverValorEntreClaves(el, route, newRoute))
			}
			setOutput(JSON.stringify(newOutput, null, 2))
		} catch (e: any) {
			console.error('Admin_JsonView error', e.message)
			if (e.message !== undefined) {
				setOutput(e.message)
			}
		}
	}, [route, newRoute, input])

	return <>
		<textarea name="input" id="input" onChange={(e) => setInput(e.target.value)} /><br />
		<input type="text" name="route" id="route" placeholder="Ruta de la key" onChange={(e) => setRoute(e.target.value)} /><br />
		<input type="text" name="new_route" id="new_route" placeholder="Nueva ruta de la key" onChange={(e) => setNewRoute(e.target.value)} /><br />
		<textarea name="output" id="output" readOnly ref={outputRef} value={output} /><br />
	</>
}

export default Admin_JsonView