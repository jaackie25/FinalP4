import Link from 'next/link'

export default function ProductItem({product}){
    return(
     <Link href={`/products/${product.id}`}>
         <a>
             <h3>{product.title}</h3>
         </a>
     </Link>
    )
}