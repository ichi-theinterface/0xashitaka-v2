import './Blog.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import blogs from "../blogs.json"
import ReactMarkdown from 'react-markdown';
//import content from '../MD/1.md';

function BlogPage() {
  const { id } = useParams();
  //const [blog, setBlog] = useState(null);

  //useEffect(() => {
  //  fetch(`YOUR_API_ENDPOINT_HERE/${id}`) // Replace with your API endpoint
  //    .then(response => response.json())
  //    .then(data => setBlog(data));
  //}, [id]);

  //if (!blog) return <div>Loading...</div>;

  const [markdown, setMarkdown] = useState('');

  if (typeof id !== 'string') {
      id = String(id);  // Convert to string if it's not already a string
  }

  let file_path = '/MD/' + id + '.md' 

  let s3URL = 'https://ichiro-dev-portfolio-blog-md.s3.amazonaws.com/' + id + '.md' 

  useEffect(() => {
      // Fetch the markdown content from the file
      fetch(s3URL)
          .then(response => response.text())
          .then(text => setMarkdown(text));
  }, []);

  return (
    <div className='canvas'>
      <Header />
      <div className='blog-post-frame'>
        <div className='markdown'>
          <ReactMarkdown children={markdown} />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
