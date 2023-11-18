import './Blog.css';
import Header from '../component/Header';
import PostCard from '../component/PostCard';

function BlogList() {
  return (
    <div className='canvas'>
      <Header />
      <div className='blog-post-frame'>
        <PostCard />
      </div>
    </div>
  );
}

export default BlogList;