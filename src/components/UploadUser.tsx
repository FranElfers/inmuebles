import { ChangeEvent, useState } from "react"
import { uploadUserData } from "../firebase"
import { User } from "../types"


const UploadUser: React.FC = () => {
	const [info, setInfo] = useState<User>({
		born: 0,
		first: '',
		last: ''
	})

	const handleInput = (input: string) => {
		return (e: ChangeEvent<HTMLInputElement>) => {
			setInfo((prev) => ({
				...prev,
				[input]: e.target.value
			}))
		}
	}

	return <div>
		<input type="text" name="first" id="first" placeholder="first" onChange={handleInput('first')} />
		<input type="text" name="last" id="last" placeholder="last" onChange={handleInput('last')} />
		<input type="number" name="born" id="born" placeholder="born" onChange={handleInput('born')} />
		<button type="submit" onClick={() => uploadUserData(info)}>Subir</button>
	</div>
}

export default UploadUser