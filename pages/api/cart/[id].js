import { ObjectId } from "mongodb";
import { getSession } from "next-auth/client";
import { connectToDatabase } from '../../../lib/mongodb'




export default async(req, res) => {
    const session = await getSession({req});
    const {db} = await connectToDatabase()
    const data = req.query.id
    const response = await db.collection("cart").deleteOne({_id:ObjectId(data)})
    res.json(response)
}