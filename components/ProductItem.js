import Link from 'next/link'
import styles from '../styles/ProductItem.module.css'

export default function ProductItem({product}){
    return(
    <div class={styles.list}>
    <Link href={`/products/${product.id}`}>
         <div>
            <a>
                <h3>{product.title}</h3>
                <span>$ {product.price}</span>
                <img className={styles.image} src={product.image} />
            </a>
         </div>
     </Link>
    </div>
    )
}