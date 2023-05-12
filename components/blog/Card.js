// /blogs ----- page
import Link from 'next/link';
import renderHTML from 'react-render-html';
import { API } from '../../config';
import styles from "../../styles/blogs.module.css"
import { format } from 'date-fns';


const Card = ({ blog }) => {

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (

            <div className={styles.tagcatdisplay} key={i}>
                <Link href={`/categories/${c.slug}`} className={styles.category}>
                    {c.name}
                </Link>
            </div>
        ))


    const showBlogTags = blog =>
        blog.tags.map((t, i) => (

            <div className={styles.tagcatdisplay} key={i}>
                <Link href={`/tags/${t.slug}`} className={styles.category}>
                    {t.name}
                </Link>
            </div>
        ));


    // Date Conversion
    const date = new Date(blog.date);
    const formattedDate = format(date, 'dd MMM, yyyy');

    return (

        <>
            <section className={styles.Fimage}>
                <img src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} className={styles.images} />
            </section>

            <header><Link className={styles.headcolor} href={`/${blog.slug}`}><h2 className={styles.blogtitle}>{blog.title}</h2></Link></header>

            {/* <section className={styles.dateauthor}>{formattedDate}  &nbsp; by &nbsp; <Link href={`/profile/${blog.postedBy.username}`} className={styles.author}>
                {blog.postedBy.name}</Link></section> */}

                <section className={styles.dateauthor}>
                {formattedDate} &nbsp; by &nbsp;
                {blog.postedBy && blog.postedBy.name && blog.postedBy.username ? (
                    <Link href={`/profile/${blog.postedBy.username}`} className={styles.author}>
                        {blog.postedBy.name}
                    </Link>
                ) : (
                    <span>User</span>
                )}
            </section>

            <div className={styles.givepadding}>
                {showBlogCategories(blog)}
                {showBlogTags(blog)}

                <section>
                    <div className={styles.para}>{renderHTML(blog.excerpt)}</div>
                </section>
            </div>

            {/* <section>
                <Link className={styles.readmore} href={`/${blog.slug}`}> Read More  </Link>
            </section> */}

        </>

    );
};

export default Card;