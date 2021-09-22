import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../../models/product";
import { getDB } from "../../../../db/init-db";

const getTechStuff = `SELECT * FROM CodeAcademySchema.product WHERE category = 'Tech Stuff';`

const { db } = getDB();
export const techstuff = db.query(getTechStuff)

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<IProduct[]>
){
    res.status(200).json(await techstuff);
}