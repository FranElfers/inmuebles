export type Place = {
	Title: string
	Price: string
	Currency: string
	Seller_name: string
	Description: string
	Location: string
	Map: string
	Specifications: {
		Superficie_total: string
		Superficie_cubierta: string
		Ambientes: string
		Dormitorios: string
		Baños: string
		Bauleras: string
		Antigüedad: string
		Disposición: string
		Orientación: string
		Expensas: string
	},
	Product_URL: string
}

export type User = {
	last: string
	first: string
	born: number
}

