import { initializeApp } from "firebase/app";
import { getDocs, getFirestore } from "firebase/firestore";

const env = import.meta.env

export const app = initializeApp({
	apiKey: env.VITE_API_KEY,
	authDomain: env.VITE_PROJECT_ID + ".firebaseapp.com",
	projectId: env.VITE_PROJECT_ID,
	storageBucket: env.VITE_PROJECT_ID + ".firebasestorage.app",
	messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
	appId: env.VITE_APP_ID
});

export const db = getFirestore(app)

import { collection, addDoc } from "firebase/firestore";
import Parser from "./tools/jsonValidation";
import { Place, User } from "./types";

export async function uploadUserData(user: User) {
	try {
		Parser.User.parse(user)
		const docRef = await addDoc(collection(db, "users"), user)
		console.log("[Firebase.postDoc]", docRef.id)
	} catch (e) {
		console.error("Error adding document: ", e)
	}
}

export async function firebaseUploadPlace(place: Place) {
	try {
		Parser.Place.parse(place)
		const docRef = await addDoc(collection(db, "places"), place)
		console.log("[Firebase.postDoc]", docRef.id)
	} catch (e) {
		console.error("Error adding document: ", e)
	}
}

export function firebaseGetCollection(name: 'users' | 'places') {
	console.log('[Firebase.getCollection] getting', name)
	return getDocs(collection(db, name))
		.then((res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		.then((res) => {
			console.log('[Firebase.getCollection]', res)
			return res as unknown[]
		})
}

export function firebaseGetUsers(): Promise<User[]> {
	return firebaseGetCollection('users')
		.then((docs) => docs
			.map((doc) => Parser.User.safeParse(doc).data)
			.filter((doc) => doc !== undefined)
		)
}

export function firebaseGetPlaces(): Promise<Place[]> {
	return firebaseGetCollection('places')
		.then((docs) => docs
			.map((doc) => Parser.Place.safeParse(doc).data)
			.filter((doc) => doc !== undefined)
		)
}