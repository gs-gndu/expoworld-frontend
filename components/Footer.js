import Link from 'next/link';
import { APP_NAME } from "../config";
import styles from "../styles/NavbarFooter.module.css";
import { FacebookIcon, WhatsappIcon, LinkedinIcon,TwitterIcon,RedditIcon } from 'next-share';

const Footer = () => {
  const socialmedia = () => {
    return (
        <div style={{marginTop:'15px'}} className="Footerlogos">
          <a href='https://coding4u-project.vercel.app'>  <FacebookIcon style={{ padding: "5px" }} size={45} round /> </a>
          <a href='https://coding4u-project.vercel.app'>  <LinkedinIcon style={{ padding: "5px" }} size={45} round /></a>
          <a href='https://coding4u-project.vercel.app'>  <WhatsappIcon style={{ padding: "5px" }} size={45} round /> </a>
          <a href='https://coding4u-project.vercel.app'>  <TwitterIcon style={{ padding: "5px" }} size={45} round /></a>
          <a href='https://coding4u-project.vercel.app'> <RedditIcon style={{ padding: "5px" }} size={45} round /></a>
        </div>
    )
}


  const currentYear = new Date().getFullYear();

  return (
    <>

      <footer className={styles.footerbackground} >
        <div className={styles.footergrid}>

          <div className={styles.footerbox1} >
          <div className={styles.footerheading00}>📚 {APP_NAME}</div>
            <div>ExpoWorld.com is a website where user can share blogs post on different ideas places etc. </div>


            <div className={styles.Footerlogos}>
              {socialmedia()}
            </div>


          </div>



          <div className={styles.footerbox}>
          <div className={styles.footerheading}>Explore</div>
          <ul>
            <li> <Link href="/about-us">About Us </Link>  </li>
            <li> <Link href="/contact-us">Contact Us </Link>  </li>
            <li> <Link href="/disclaimer">Disclaimer </Link>  </li>
            <li> <Link href="/privacy-policy">Privacy Policy </Link>  </li>
            </ul>
          </div>



          <div className={styles.footerbox}>
          <div className={styles.footerheading}>Categories</div>
          <ul>
            <li> <Link href="/categories/react">POSTS</Link>  </li>
            <li> <Link href="/categories/wordpress">Hotels </Link>  </li>
            <li> <Link href="/categories/django"> Resturant </Link>  </li>
            <li> <Link href="/categories/javascript"> CITIES </Link>  </li>
            <li> <Link href="/categories/seo">Country </Link>  </li>
            <li> <Link href="/categories/python">STATE </Link>  </li>
            </ul>
          </div>





          <div className={styles.footerbox}>
            
            <div className={styles.footerheading}>Articles</div>
            <ul>
            <li> <Link href="/wordpress-vs-react"> HOTELS </Link>  </li>
            <li> <Link href="/next.js-vs-nuxt.js">OLD GOLD RESTURANTS </Link>  </li>
            <li> <Link href="/how-much-js-before-react"> PLACES </Link>  </li>
            <li> <Link href="/react.js-vs-next.js">HISTORICAL </Link>  </li>
            <li> <Link href="/what-is-nodejs"> NATURE </Link>  </li>
            <li> <Link href="/what-is-blogging">POSTS </Link>  </li>
            <li> <Link href="/wordpress-vs-blogger"> FOOD </Link>  </li>
            </ul>
          </div>


        </div>


          <div className={styles.footercopyright}>Copyright {currentYear} @ {APP_NAME}</div>

      </footer>

    </>

  )
}

export default Footer

// export default dynamic(() => Promise.resolve(Footer), { ssr: false })