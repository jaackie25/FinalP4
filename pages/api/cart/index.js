import { getSession } from "next-auth/client";
import { connectToDatabase } from '../../../lib/mongodb'

export default async(req, res) => {
    const session = await getSession({req});
    console.log("SESSION", session)

    const {db} = await connectToDatabase()
    console.log("DB CHECK",{db})
    const data = req.query
    const response = await db.collection("cart").insertOne(data)
    console.log("RESPONSE FROM CART", response)
    res.json(response)

    // if(session){
    //     res.send({
    //         content: "Welcome to the secret cart"
    //     })
    // } else {
    //     res.send({
    //         error: "You need to be signed in"
    //     })
    // }
}