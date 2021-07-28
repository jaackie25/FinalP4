import { ObjectId } from "mongodb";
import { getSession } from "next-auth/client";
import { connectToDatabase } from '../../../lib/mongodb'




export default async(req, res) => {
    const session = await getSession({req});
 
   
    
    console.log("remove SESSION:", session)

    const {db} = await connectToDatabase()
    console.log("DB CHECK",{db})
    const data = req.query.id
   console.log("REMOVE ID DATA:", data)
   const response = await db.collection("cart").deleteOne({_id:ObjectId(data)})
   console.log("RESPONSE REMOVE:", response)
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