import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../../models/product";
import { getDB } from "../../../../db/init-db";

const getClothing = `SELECT * FROM CodeAcademySchema.product WHERE category = 'Clothing';`

const { db } = getDB();
export const clothing = db.query(getClothing)

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<IProduct[]>
){
    res.status(200).json(await clothing);
}