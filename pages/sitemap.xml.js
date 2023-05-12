import { allblogs } from '../actions/blog'
import { DOMAIN } from "../config"

const Sitemap = ({ blogs }) => {
  
return(

  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <loc>{`${DOMAIN}/`}</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>

    {blogs.map(blog => (
      <url key={blog._id}>
        <loc>{`${DOMAIN}/${blog.slug}`}</loc>
        <lastmod>{blog.date}</lastmod>
        <priority>0.8</priority>
        <changefreq>monthly</changefreq>
      </url>
    ))}
  </urlset>

)
    }


export async function getServerSideProps({ res }) {
  const blogs = await allblogs()
  res.setHeader('Content-Type', 'text/xml')
  return { props: { blogs } }
}



export default Sitemap;