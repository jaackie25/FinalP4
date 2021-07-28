import Link from 'next/link'
import axios from 'axios'
import styles from '../../styles/Item.module.css'
import {useSession} from 'next-auth/client'




export default function Details({product}){
    // console.log("PRODUCTS", product)
    const[session, loading] = useSession()
    

    const cart = async ({product}) => {
        console.log("PRODUCT CART", product)
       const data = await fetch(`http://localhost:3000/api/cart?product_id=${product.id}&user_id=${session.accessToken}&product_name=${product.title}&price=${product.price}&image=${product.image}`)
       const res = await data.json() 
       console.log("CART DATA", res)
    }

    return(
        <div>
            <Link href="/products">
                <a> Back to Products</a>
            </Link>

            <h3>{product.title}</h3>
            <small>{product.category}</small>
            <br/>
            <img className={styles.img} src={product.image}/> 
            <p>$ {product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => cart({product})}>Add to cart</button>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await axios.get("https://fakestoreapi.com/products")
    const products= res.data
    const paths = products.map(product => {
        return {
            params : {id: product.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}


export async function getStaticProps(context) {
  const res = await axios.get(`https://fakestoreapi.com/products/${context.params.id}`)
  const product = res.data
  return{
      props: {
          product
      }
  }
}

