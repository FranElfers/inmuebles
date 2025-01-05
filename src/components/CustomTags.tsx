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
