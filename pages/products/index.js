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

            <style jsx>{`
           ul{
               display:grid;
                grid-template-columns: repeat(auto-fill, minmax(650px, 2fr)); 
                justify-content:center;
                align-items:center;
           }
        `}</style>
            
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
  