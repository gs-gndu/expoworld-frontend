import Link from 'next/link'
import { APP_NAME } from "../config"
import styles from "../styles/NavbarFooter.module.css"
import dynamic from 'next/dynamic';
import { FacebookIcon, WhatsappIcon, LinkedinIcon,TwitterIcon,RedditIcon } from 'next-share'

const Footer = () => {
  const socialmedia = () => {
    return (
        <div style={{marginTop:'15px'}} className="Footerlogos">
          <a href='#'>  <FacebookIcon style={{ padding: "5px" }} size={45} round /> </a>
          <a href='#'>  <LinkedinIcon style={{ padding: "5px" }} size={45} round /></a>
          <a href='#'>  <WhatsappIcon style={{ padding: "5px" }} size={45} round /> </a>
          <a href='#'>  <TwitterIcon style={{ padding: "5px" }} size={45} round /></a>
          <a href='#'> <RedditIcon style={{ padding: "5px" }} size={45} round /></a>
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
            <div>Coding4U is a blog website where users can publish their articles related to programming or computer science field. It is designed to help individuals learn programming concepts, languages, and best practices. </div>


            <div className={styles.Footerlogos}>
              {socialmedia()}

              {/* <Link href="#">   <Image src="/Youtube.png" width={44} height={35} alt='Youtube' style={{ marginBottom: "6px" }} /></Link> */}
              {/* <Link href="#">     <Image src="/Twitter.png" width={50} height={50} alt='Twitter' style={{ marginLeft: "7px", marginRight: "3px" }} /> </Link> */}

              {/* <Link href="#">     <Image src="/Whatsapp2.png" width={46} height={50} alt='LinkedIn' style={{marginBottom:"6px", paddingTop:"8px"}}/> </Link> */}

              {/* <Link href="#">     <Image src="/Facebook.png" width={50} height={50} alt='Facebook' style={{ marginRight: "2px" }} /> </Link> */}
              {/* <Link href="#">     <Image src="/Linkedin.png" width={42} height={37} alt='LinkedIn' style={{ marginBottom: "6px", marginLeft: "4px" }} /> </Link> */}

            </div>


          </div>



          <div className={styles.footerbox}>
          <div className={styles.footerheading}>Explore</div>
          <ul>
            <li> <Link href="/about-us">About Us </Link>  </li>
            <li> <Link href="/contact">Contact Us </Link>  </li>
            <li> <Link href="/disclaimer">Disclaimer </Link>  </li>
            <li> <Link href="/privacy-policy">Privacy Policy </Link>  </li>
            </ul>
          </div>



          <div className={styles.footerbox}>
          <div className={styles.footerheading}>Categories</div>
          <ul>
            <li> <Link href="/categories/react">React </Link>  </li>
            <li> <Link href="/categories/wordpress">Wordpress </Link>  </li>
            <li> <Link href="/categories/django">Django </Link>  </li>
            <li> <Link href="/categories/javascript">Javascript </Link>  </li>
            <li> <Link href="/categories/seo">SEO </Link>  </li>
            <li> <Link href="/categories/python">Python </Link>  </li>
            </ul>
          </div>





          <div className={styles.footerbox}>
            
            <div className={styles.footerheading}>Articles</div>
            <ul>
            <li> <Link href="/wordpress-vs-react">Wordpress vs React </Link>  </li>
            <li> <Link href="/nextjs-vs-nuxt.js">Next.js vs Nuxt.js </Link>  </li>
            <li> <Link href="/how-much-js-before-react">How much JS before React ? </Link>  </li>
            <li> <Link href="/reactjs-vs-nextjs">React.js vs Next.js </Link>  </li>
            <li> <Link href="/what-is-nodejs">What is Node.js </Link>  </li>
            <li> <Link href="/what-is-blogging">What Is Blogging </Link>  </li>
            <li> <Link href="/wordpress-vs-blogger">Wordpress vs Blogger </Link>  </li>
            </ul>
          </div>


        </div>


          <div className={styles.footercopyright}>Copyright {currentYear} @ {APP_NAME}</div>

      </footer>

    </>

  )
}

// export default Footer

export default dynamic(() => Promise.resolve(Footer), { ssr: false })