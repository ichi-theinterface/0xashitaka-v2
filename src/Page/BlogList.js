import './Blog.css';
import Header from '../component/Header'
import { Link } from "react-router-dom";
import blogs from "../blogs.json"

function BlogList() {
  //const [blogs, setBlogs] = useState([]);

  //useEffect(() => {
  //  fetch('YOUR_API_ENDPOINT_HERE') // Replace with your API endpoint
  //    .then(response => response.json())
  //    .then(data => setBlogs(data));
  //}, []);

  return (
    <div className='canvas'>
      <Header />
      <div className='blog-post-frame'>
        {blogs.map(blog => (
          <div className='blog-post-cards' key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;