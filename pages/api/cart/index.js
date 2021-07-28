import { getSession } from "next-auth/client";
import { connectToDatabase } from '../../../lib/mongodb'

export default async(req, res) => {
    const session = await getSession({req});
    
    const {db} = await connectToDatabase()
    
    const data = req.query
    const response = await db.collection("cart").insertOne(data)
   
    res.json(response)

}