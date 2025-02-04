import { useState } from "react"
import { NavLink } from "react-router"

export const MyNavLink: React.FC<React.PropsWithChildren<{ to: string }>> = function (props) {
	return <NavLink onClick={() => console.log('[click]', props.children)} to={props.to}>
		{props.children}
	</NavLink>
}

export const MyButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = function (props) {
	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		console.log('[click]', props.children)
		if (props.onClick) props.onClick(e)
	}
	return <button onClick={handleClick} style={props.style}>
		{props.children}
	</button>
}

/**
 * Boton que se deshabilita al presionarlo, y solo se vuelve a habilitar
 * al terminar la promesa ejecutada.
 * @param props 
 * @returns 
 */
export const MyAsyncButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = function (props) {
	const [disabled, useDisabled] = useState(false)
	async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		console.log('[click]', props.children)
		useDisabled(true)
		if (props.onClick) await props.onClick(e)
		useDisabled(false)
	}
	return <button onClick={handleClick} style={props.style} disabled={disabled}>
		{props.children}
	</button>
}
