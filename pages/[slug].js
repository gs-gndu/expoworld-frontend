import Head from 'next/head';
import dynamic from 'next/dynamic';
import { isAuth } from '../actions/auth'
import parse from 'html-react-parser';
import Link from 'next/link';
const Layout = dynamic(() => import('@/components/Layout'), { ssr: false });
import { useState, useEffect } from 'react';
import { singleBlog, listRelated } from '../actions/blog';
import { API, DOMAIN, APP_NAME } from "../config"
const SmallCard = dynamic(() => import('../components/blog/SmallCard'), { ssr: false });
import styles from "../styles/blogposts.module.css"
const Search = dynamic(() => import('@/components/blog/Search'), { ssr: false });
import { format } from 'date-fns';
const DisqusThread = dynamic(() => import('../components/DisqusThread'), { ssr: false });
import {
    FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon,
    TelegramShareButton, TelegramIcon,
    RedditShareButton, RedditIcon, TwitterShareButton, TwitterIcon,
} from 'next-share'





const SingleBlog0 = ({ blog, errorCode }) => {

    if (errorCode) {
        return (
            <Layout>
                <div style={{ background: "black" }}>
                    <br /><br /><br />
                    <div className={styles.page404}>404 Error! Page Not Found</div>
                    <section className={styles.item0000}> <br /> <Search /> <br /><br /><br /></section>
                </div>
            </Layout>
        );
    }



    const head = () => (
        <Head>
            <title >{`${blog.title} - ${APP_NAME}`}</title>

            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/${blog.slug}`} />
            <meta property="og:title" content={`${blog.mtitle}| ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="webiste" />
            <meta name="robots" content="index, follow" />
            <meta property="og:url" content={`${DOMAIN}/${blog.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/jpg" />

        </Head>
    );

    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated({ blog }).then(data => {
            if (data && data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };


    useEffect(() => {
        loadRelated();
    }, []);



    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`} className={styles.blogcat}>
                {c.name}
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`} className={styles.blogtag}>
                {t.name}
            </Link>
        ));


    const showRelatedBlog = () => {
        return (related && related.map((blog, i) => (

            <article key={i} className={styles.box}>
                <SmallCard blog={blog} />
            </article>

        )))
    };


    const showComments = () => {
        return (
            <DisqusThread id={blog._id} title={blog.title} path={`/blog/${blog.slug}`} />

        );
    };

    const Posttitle = `${blog.title}`;
    const shareUrl = `${DOMAIN}/${blog.slug}`;
    // const encodedUrl = encodeURIComponent(shareUrl);



    const socialmedia = () => {
        return (

            <div style={{ marginTop: '15px' }} className="Footerlogos">
                <FacebookShareButton url={shareUrl} quote={Posttitle}> <FacebookIcon size={35} round /> </FacebookShareButton>
                <WhatsappShareButton url={shareUrl} title={Posttitle} style={{ padding: "5px" }}><WhatsappIcon size={35} round /></WhatsappShareButton>
                <TelegramShareButton url={shareUrl} title={Posttitle} style={{ padding: "5px" }}><TelegramIcon size={35} round /></TelegramShareButton>
                {/* <LinkedinShareButton url={shareUrl} title={Posttitle} style={{ padding: "5px" }}><LinkedinIcon size={35} round /></LinkedinShareButton> */}
                <RedditShareButton url={shareUrl} title={Posttitle} style={{ padding: "5px" }}><RedditIcon size={35} round /></RedditShareButton>
                <TwitterShareButton url={shareUrl} title={Posttitle} style={{ padding: "5px" }}><TwitterIcon size={35} round /></TwitterShareButton>
            </div>
        )
    }


    // Date Conversion
    const date = new Date(blog.date);
    const formattedDate = format(date, 'dd MMM, yyyy');

    return (

        <>

            {head()}
            <Layout >

                <main>
                    <article className={styles.backgroundImg}>
                        <br />


                        <section className={styles.mypost}>
                            <section className={styles.topsection}>

                                {isAuth() && isAuth().role === 1 && (<div className={styles.editbutton}><a href={`${DOMAIN}/admin/${blog.slug}`}>Edit</a></div>)}


                                <header>
                                    <h1 >{blog.title}</h1>

                                    {/* <div className={styles.dateauth}>{formattedDate} &nbsp; by &nbsp; <Link href={`/profile/${blog.postedBy.username}`} className={styles.author}> {blog.postedBy.name}</Link>   </div> */}


                                    <section className={styles.dateauth}>
                                        {formattedDate} &nbsp; by &nbsp;
                                        {blog.postedBy && blog.postedBy.name && blog.postedBy.username ? (
                                            <Link href={`/profile/${blog.postedBy.username}`} className={styles.author}>
                                                {blog.postedBy.name}
                                            </Link>
                                        ) : (
                                            <span>User</span>
                                        )}

                                    </section>
                                </header>

                                {socialmedia()}<br />


                                <section>
                                    <img className={styles.resizeimg} src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} height={600} width={600}/>
                                </section>

                                <br /><br />
                            </section>



                            <section class="postcontent">

                                {parse(blog.body)}

                                <div style={{ textAlign: "center" }}>
                                    <br /><br />
                                    {showBlogCategories(blog)}
                                    {showBlogTags(blog)}

                                </div>
                            </section>
                        </section>
                        <br />
                        <br />


                        <section className={styles.mypost2} >
                            <br /> <br /> <br />
                            <section className={styles.comments}> {showComments()} </section>  <br />

                            <section className={styles.item0000}> <br /> <Search /> <br /> </section>

                            <section className={styles.grid}>{showRelatedBlog()}</section>
                            <br /> <br /><br /><br />
                        </section>

                    </article>
                </main>

            </Layout>
        </>
    );

};




export async function getServerSideProps({ query, res }) {
    try {
        const data = await singleBlog(query.slug);
        if (!data) {
            res.statusCode = 404;
            return { props: { errorCode: 404 } };
        }
        return { props: { blog: data } };
    } catch (error) {
        console.error(error);
        return { props: { errorCode: 500 } };
    }
}

export default SingleBlog0;