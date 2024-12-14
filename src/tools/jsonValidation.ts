import { z } from "zod";

const Parser = {
	User: z.object({
		first: z.string(),
		last: z.string(),
		born: z.number(),
	}),

	Place: z.object({
		id: z.string(),
		Title: z.string(),
		Price: z.string(),
		Currency: z.string(),
		Seller_name: z.string(),
		Description: z.string(),
		Location: z.string(),
		Map: z.string(),
		Specifications: z.object({
			Superficie_total: z.string(),
			Superficie_cubierta: z.string(),
			Ambientes: z.string(),
			Dormitorios: z.string(),
			Baños: z.string(),
			Bauleras: z.string(),
			Antigüedad: z.string(),
			Disposición: z.string(),
			Orientación: z.string(),
			Expensas: z.string(),
		}),
		Product_URL: z.string(),
	})
}

export default Parser