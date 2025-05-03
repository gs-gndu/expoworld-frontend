import Link from 'next/link';
import { APP_NAME, BACKEND } from "../config";
import { isAuth } from '../actions/auth';
import styles from "../styles/NavbarFooter.module.css";
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import { googleauthenticate } from '../actions/auth';

const Navbar = () => {

  const [user, setUser] = useState(null);



  useEffect(() => { 
    
    const getUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    
    getUser(); }, []);

  function disablenavbar2() {
    let x = document.getElementById("disable")
    if (x.style.display === "block") { x.style.display = "none"; }
    else { x.style.display = "block" }
  }

  function disablenavbar() { document.getElementById("disable").style.display = "none"; }

  return (
    <>
      <nav className={styles.nav}>

        <div className={styles.span} onClick={disablenavbar2}>☰</div>

        <Link href="/"><div className={styles.logo}> 📚 {APP_NAME}</div></Link>

        <ul id="disable" onClick={disablenavbar}>
          {/* <li><Link href="/categories/react" >React</Link></li>
          <li><Link href="/categories/javascript">Javascript</Link></li>
          <li><Link href="/categories/django">Django</Link></li>
          <li><Link href="/categories/python">Python</Link></li>
          <li><Link href="/categories/seo">SEO</Link></li>
          <li><Link href="/categories/wordpress">Wordpress</Link></li> */}
 <li> <Link href="/wordpress-vs-react"> HOTELS </Link>  </li>
            <li> <Link href="/next.js-vs-nuxt.js">OLD GOLD RESTURANTS </Link>  </li>
            <li> <Link href="/how-much-js-before-react"> PLACES </Link>  </li>
            <li> <Link href="/react.js-vs-next.js">HISTORICAL </Link>  </li>
            <li> <Link href="/what-is-nodejs"> NATURE </Link>  </li>
            <li> <Link href="/what-is-blogging">POSTS </Link>  </li>
            <li> <Link href="/wordpress-vs-blogger"> FOOD </Link>  </li>

          {!user && (<><li><Link href="/signin">Signin </Link></li><li><Link href="/signup">Signup</Link></li></>)}

          {user && isAuth().role === 1 && (<li><a className={styles.userdash} href="/admin"> {`${isAuth().name} ‒ Admin`}</a></li>)}
          {user && isAuth().role === 0 && (<li><a className={styles.userdash} href="/admin"> {`${isAuth().name} ‒ User`}</a></li>)}


        </ul>
      </nav>

    </>

  )
}


export default Navbar