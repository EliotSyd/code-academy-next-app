import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../../models/product";
import { getDB } from "../../../../db/init-db";

const getTVStuff = `SELECT * FROM CodeAcademySchema.product WHERE category = 'TV Stuff';`

const { db } = getDB();
export const tvstuff = db.query(getTVStuff)

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<IProduct[]>
){
    res.status(200).json(await tvstuff);
}