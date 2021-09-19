import { NextApiRequest, NextApiResponse } from "next";
import { products } from ".";
import { getDB } from "../../../db/init-db";
import { IProduct } from "../../../models/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>
) {
  const { db } = getDB();
  const { id } = req.query;
  const result = await db.query('SELECT * FROM CodeAcademySchema.product');
  console.log(result);
  const product = await db.query('SELECT * FROM CodeAcademySchema.product WHERE product_id=${id}');
  res.status(200).json(product);
}
