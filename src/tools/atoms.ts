import { atom } from 'jotai'
import { Place } from '../types'

/**
 * ### Uso de los atoms.
 * 
 * El atom `PrimitiveAtom<any>` se puede usar como parametro 
 * en los hooks `useAtom`, `useAtomValue` y `useSetAtom`. 
 * El hook `useAtom` funciona como un hook `useState`, 
 * devolviendo un getter y un setter. Los hooks `useAtomValue` 
 * y `useSetAtom` funcionan como getter y como setter 
 * respectivamente, siendo mas eficiente si vamos a usar uno 
 * solo.
 * 
 * @example
 * import { atom, useAtom, useAtomValue, useSetAtom } from "jotai"
 * const numberAtom = atom<number>(0)
 * const [num, setNum] = useAtom(numberAtom)
 * const getNum = useAtomValue(numberAtom)
 * const setNum = useSetAtom(numberAtom)
 */

export const placesAtom = atom<Place[]>([])