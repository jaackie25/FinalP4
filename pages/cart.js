import {useSession} from 'next-auth/client'
import { connectToDatabase } from "../lib/mongodb";
import styles from '../styles/Cart.module.css'



export default function Cart({items}){
    const[session, loading] = useSession()
    let total = 0 
    console.log("SESSION IN CART", session)
    console.log("ITEM", items)
    if(!session){
            return(
                <h1>Please sign in to access the cart</h1>
            )
        }

    const remove = async ({item}) => {
        console.log("REMOVE ITEM", item )
        const data = await fetch(`http://localhost:3000/api/cart/${item._id}`)
        console.log("REMOVE DATA", data)
        const res = await data.json()
        console.log("RES REMOVE", res)
    }

    return(
        <div>
            <ul>
            {items.map((item)=> (
               <div>
                   <li>
                   Name: {item.product_name}
                   $: {item.price}
                   <img className={styles.img} src={item.image} />
                   <button onClick={() => remove({item})}>Delete</button>
                   </li>    
               </div> 
            ))}
            </ul>
        </div>
    )

}

export async function getServerSideProps(){
    const {db} = await connectToDatabase()
    const data = await db.collection("cart").find({}).toArray()
    const items = JSON.parse(JSON.stringify(data))
    console.log("ITEMS PROPS:", items )
    const fix = items.map(item => {
        return {
        _id : item._id,
        product_name: item.product_name,
        price : item.price,
        image : item.image
        }
    })
    return {
        props: {items:fix}
    }
}