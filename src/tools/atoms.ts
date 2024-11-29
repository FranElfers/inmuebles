import { atom } from 'jotai'
import { Place } from '../types'

export const placesAtom = atom<Place[]>([])