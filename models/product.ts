import { Key } from "react";

export interface IProduct {
  id: Key | null | undefined;
	product_id: number;
	product_name: string;
	selling_price: number;
	product_image: string;
}

