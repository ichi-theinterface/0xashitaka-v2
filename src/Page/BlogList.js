import './Blog.css';
import Header from '../component/Header';
import PostCard from '../component/PostCard';

function BlogList() {
  return (
    <div className='canvas'>
      <Header />
      <div className='BlogList-Header-Frame'>
        <h1 className='BlogList-Header'>My Engineering Blog</h1>
      </div>
      <div className='blog-post-frame'>
        <PostCard />
      </div>
    </div>
  );
}

export default BlogList;