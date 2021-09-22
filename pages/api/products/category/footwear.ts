import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../../models/product";
import { getDB } from "../../../../db/init-db";

const getFootwear = `SELECT * FROM CodeAcademySchema.product WHERE category = 'Footwear';`

const { db } = getDB();
export const footwear = db.query(getFootwear)

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<IProduct[]>
){
    res.status(200).json(await footwear);
}