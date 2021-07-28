import axios from 'axios'
import ProductItem from '../../components/ProductItem'

export default function Products({products}){
    console.log("PRODUCT AFTER PASS", products)
    return(
        <div>
            <ul>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </ul>
            
        </div>
    )
}
export async function getServerSideProps(){
    const res = await axios.get('https://fakestoreapi.com/products?limit=10')
    const products = res.data
  
    return{
      props: {
        products
      }
    }
  
  }
  