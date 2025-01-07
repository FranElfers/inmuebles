/** 
 * Función recursiva para obtener el valor del objeto en una ruta específica.
 * @param obj Objeto json
 * @param keyPath Ruta, por ejemplo ["pais", "provincia", "ciudad"]
 * @returns valor obtenido desde la ruta, o undefined si no se encontro
 */
function obtenerValor(obj: any, keyPath: string[]): any {
	if (keyPath.length === 0) return obj
	const [currentKey, ...rest] = keyPath
	return obj[currentKey] ? obtenerValor(obj[currentKey], rest) : undefined
}

/**
 * Asigna un valor a un objeto en una ruta de claves especificada.
 * 
 * Este método permite establecer valores en un objeto anidado
 * utilizando una ruta de claves representada como un array. Si algún
 * nivel del objeto no existe, se creará automáticamente como un objeto vacío.
 * 
 * @param obj - El objeto en el que se asignará el valor.
 * @param keyPath - Un array de strings que representa la ruta de claves para acceder a la propiedad.
 * @param valor - El valor que se asignará en la posición indicada por la ruta de claves.
 * @throws {Error} - Si ocurre un problema con el acceso o la asignación.
 * @returns void
 */
function asignarValor(obj: any, keyPath: string[], valor: any): void {
	if (!Array.isArray(keyPath)) {
		throw new Error("El parámetro 'keyPath' debe ser un array de strings.")
	}
	if (typeof obj !== 'object' || obj === null) {
		throw new Error("El parámetro 'obj' debe ser un objeto válido.")
	}

	const [currentKey, ...rest] = keyPath
	if (!currentKey) {
		throw new Error("El 'keyPath' no debe estar vacío ni contener claves inválidas.")
	}

	if (rest.length === 0) {
		obj[currentKey] = valor
	} else {
		if (!obj[currentKey]) obj[currentKey] = {} // Crear el nivel si no existe
		asignarValor(obj[currentKey], rest, valor)
	}
}

/**
 * Elimina una clave de un objeto en una ruta de claves especificada.
 * 
 * Este método permite eliminar una propiedad de un objeto anidado
 * utilizando una ruta de claves representada como un array. Si la clave
 * o el nivel intermedio no existe, no realiza ninguna acción.
 * 
 * @param obj - El objeto del que se eliminará la clave.
 * @param keyPath - Un array de strings que representa la ruta de claves para acceder a la propiedad.
 * @returns void
 */
function eliminarClave(obj: any, keyPath: string[]): void {
	const [currentKey, ...rest] = keyPath
	if (rest.length === 0) {
		delete obj[currentKey]
	} else if (obj[currentKey]) {
		eliminarClave(obj[currentKey], rest)
	}
}

/**
 * Elimina recursivamente las propiedades de un objeto que sean objetos vacíos.
 * 
 * @param obj - El objeto que será procesado.
 * @returns El mismo objeto, pero sin las propiedades que eran objetos vacíos.
 */
function eliminarObjetosVacios(obj: any): any {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const value = obj[key]

			if (typeof value === 'object' && value !== null) {
				eliminarObjetosVacios(value)

				if (Object.keys(value).length === 0) delete obj[key]
			}
		}
	}
	return obj
}

/**
 * Verifica si todas las claves en un array son válidas (no están vacías).
 * 
 * @param keys - Un array de strings que representan las claves a verificar.
 * @returns `true` si todas las claves son válidas, `false` si alguna clave está vacía.
 */
function checkForKeys(keys: string[]) {
	for (const key of keys) {
		if (key.length === 0) return false
	}
	return true
}

/**
 * Mueve un valor en un objeto desde una clave antigua a una nueva.
 * 
 * Este método permite mover un valor de una posición a otra en un objeto anidado,
 * eliminando el valor de su posición original y asignándolo en la nueva ruta.
 * 
 * @param objeto - El objeto que será procesado.
 * @param key - La ruta de la clave original del valor (usando notación de puntos, por ejemplo, "pais.provincia").
 * @param newKey - La nueva ruta donde se moverá el valor (usando notación de puntos, por ejemplo, "ubicacion.region").
 * @returns El objeto actualizado con el valor movido, o un `Error` si las claves no son válidas, los niveles de 
 * anidación no coinciden, o el valor no se encuentra.
 */
export function moverValorEntreClaves<T>(objeto: T, key: string, newKey: string): T | Error {
	if (key.length <= 0) return new Error('key invalid')
	if (newKey.length <= 0) return new Error('newKey invalid')

	const keys = key.split('.')
	const newKeys = newKey.split('.')

	if (keys.length !== newKeys.length) return new Error('unmatching nesting level')
	if (!checkForKeys(keys) || !checkForKeys(newKeys)) return new Error('keys invalidos')

	const nuevoObjeto = JSON.parse(JSON.stringify(objeto))

	const valor = obtenerValor(nuevoObjeto, keys)
	if (valor === undefined) return new Error('valor no encontrado')

	asignarValor(nuevoObjeto, newKeys, valor)
	eliminarClave(nuevoObjeto, keys)
	eliminarObjetosVacios(nuevoObjeto)

	return nuevoObjeto
}