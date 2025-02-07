// Blog.js
import React from 'react';
import BlogData from './BlogData';
import './Blog.css';

const Blog = () => {
  return (
    <div>
      <header>
        <h2>Blog</h2>
        <h4> Check out are amazing blogs</h4>
      </header>


      <div className="blog">
        <br></br>
        {BlogData.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>Author: {post.author}</p>
              <p>Date: {post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
