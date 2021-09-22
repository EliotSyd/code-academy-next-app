import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../../models/product";
import { getDB } from "../../../../db/init-db";

const getPhoneAccessories = `SELECT * FROM CodeAcademySchema.product WHERE category = 'Phone Accessories';`

const { db } = getDB();
export const phoneaccessories = db.query(getPhoneAccessories)

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<IProduct[]>
){
    res.status(200).json(await phoneaccessories);
}