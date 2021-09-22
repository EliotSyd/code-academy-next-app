import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../../models/product";
import { getDB } from "../../../../db/init-db";

const getPhoneAcessories = `SELECT * FROM CodeAcademySchema.product WHERE category = 'Phone Acessories';`

const { db } = getDB();
export const phoneacessories = db.query(getPhoneAcessories)

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<IProduct[]>
){
    res.status(200).json(await phoneacessories);
}