import {useSession} from 'next-auth/client'
import { connectToDatabase } from "../lib/mongodb";
import styles from '../styles/Cart.module.css'


export default function Cart({items}){
    const[session, loading] = useSession()
    console.log("SESSION IN CART", session)
    console.log("ITEM", items)
    if(!session){
            return(
                <h1>Please sign in to access the cart</h1>
            )
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
                   </li>    
               </div> 
            ))}
            </ul>
        </div>
    )

    // useEffect(() => {
    //   const fetchData = async() => {
    //       const res = await fetch("/api/cart")
    //       const json = await res.json()

    //       if(json.content){
    //           setContent(json.content)
    //       }
    //   } 
    //   fetchData()
    // },[session])

    // if(!session){
    //     return(
    //         <h1>Please sign in to access this page</h1>
    //     )
    // }
    // return(
    //     <div>
    //         <h1>Protected page</h1>
    //         <p>{content}</p>
    //     </div>
    // )
}

export async function getServerSideProps(){
    const {db} = await connectToDatabase()
    const data = await db.collection("cart").find({}).project({price:1, product_name:1, image:1, _id: 0}).toArray()
    const items = data
    return {
        props: {items:items}
    }
}