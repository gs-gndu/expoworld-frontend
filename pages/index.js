// import Link from 'next/link';
import Layout from "@/components/Layout"
import styles from "../styles/blogposts.module.css"
import { listBlogsWithCategoriesAndTags } from '../actions/blog';
import Card from '../components/blog/Card';

const Index = ({ blogs, router }) => {

    const showAllBlogs = () => {
        return blogs.map((blog, i) => (
            <article key={i} className={styles.box}>
                <Card blog={blog} />
            </article>
        )).slice(0, 12); ;
    }

    return (
        <Layout>

            <div className={styles.backImg}>
                <br /><br />
                <br /><br />


                <section className={styles.topsection}>
                    <h1 className={styles.heading}>Talk is cheap. Show me the code</h1>
                    <p>It’s not at all important to get it right the first time. It’s vitally important to get it right the last time.</p>

                    <div className={styles.resizeimg}>📚</div>

                    <h1>The Best way to predict the future is to invent it.</h1>
                    <p>Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed ?</p>
                </section>





                <section className={styles.latestposts}>
                    <h1 className={styles.latestpostheading} >📕 Latest Post 📕</h1>
                    <div className={styles.grid}>{showAllBlogs()}</div>
                    <br/>
                    <br/>
                </section>
            </div>

        </Layout>
    );
}


export async function getServerSideProps() {
  const data = await listBlogsWithCategoriesAndTags();
  if (data.error) {
    console.log(data.error);
  }
  return {
    props: {
      blogs: data.blogs,
      categories: data.categories,
      tags: data.tags,
    },
  };
}


export default Index;