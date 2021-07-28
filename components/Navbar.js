import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar({children}){
    return(
      <div>
        <nav className={styles.nav}>
            <Link href="/">
                <a>Home</a>
            </Link>
           
            <Link href="/cart">
                <a>Cart</a>
            </Link>
       </nav> 
       {children}
      </div>  
    
      
    )
}