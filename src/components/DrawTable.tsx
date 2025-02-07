import { CSSProperties, FC } from "react";

const tableStyle: CSSProperties = {
	"display": "grid",
	borderRadius: "10px",
	overflow: "hidden",
	padding: 0,
	margin: "10px"
}

const headerStyle: CSSProperties = {
	"backgroundColor": "#444444",
	"textAlign": "left"
}

const fieldStyle: CSSProperties = {
	"backgroundColor": "#616161",
	"textAlign": "left"
}

const clickableFieldStyle: CSSProperties = {
	...fieldStyle,
	"cursor": "pointer"
}

type ContentType = {
	texts: string[],
	callback?: () => void
}[]

const validateTableSize = (headers: string[], content: ContentType) => {
	for (const row of content) {
		if (headers.length !== row.texts.length) {
			console.error('headers !== row.texts', { headers, texts: row.texts })
			return false
		}
	}
	return true
}

const MyTable: FC<{ headers: string[], content: ContentType }> = ({ headers, content }) => {
	if (!validateTableSize(headers, content)) {
		console.error('Tabla invalida:', content)
		return <h2>Invalido</h2>
	}
	return <div style={{
		...tableStyle,
		"gridTemplateColumns": `repeat(${headers.length}, auto)`,
	}}>
		{headers.map((header) => <div style={headerStyle}>{header}</div>)}
		{content.map((row) => <>
			{row.texts.map((field) => <div
				style={row.callback ? clickableFieldStyle : fieldStyle}
				onClick={row.callback}
			>{field}</div>)}
		</>)}
	</div>
}

export default MyTable