import {Link} from "react-router-dom";
 
const Bloglist = ({ blogs, title, handleDelete }) => {
    // const blogs = propss.blogs;
    // const title = propss.title;

    // console.log(propss,blogs);

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogdetails/${blog.id}`}>
                     <h2>{blog.title}</h2>
                    <p>witten By {blog.auther} </p> 
                    </Link>
                   
                </div>

            ))}
        </div>
    );
}

export default Bloglist;