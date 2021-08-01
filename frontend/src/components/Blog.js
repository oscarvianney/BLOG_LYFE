import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(res.data[0]);
                console.log(res.data);
            }
            catch(err){

            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setBlogs(res.data);
            }
            catch(err){

            }
        }
        fetchBlogs();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getBlogs = () => {

    };

    return (
        <div className='container'>
          <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
              <Link className="p-2 text-muted" to='/category/world'>World</Link>
              <Link className="p-2 text-muted" to='/category/environment'>Environment</Link>
              <Link className="p-2 text-muted" to='/category/technology'>Technology</Link>
              <Link className="p-2 text-muted" to='/category/design'>Design</Link>
              <Link className="p-2 text-muted" to='/category/culture'>Culture</Link>
              <Link className="p-2 text-muted" to='/category/business'>Business</Link>
              <Link className="p-2 text-muted" to='/category/politics'>Politics</Link>
              <Link className="p-2 text-muted" to='/category/opinion'>Opinion</Link>
              <Link className="p-2 text-muted" to='/category/science'>Science</Link>
              <Link className="p-2 text-muted" to='/category/health'>Health</Link>
              <Link className="p-2 text-muted" to='/category/style'>Style</Link>
              <Link className="p-2 text-muted" to='/category/travel'>Travel</Link>
              <Link className="p-2 text-muted" to='/category/sport'>Sport</Link>
              <Link className="p-2 text-muted" to='/category/love'>Love</Link>
            </nav>
          </div>
          <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
              <p className="lead my-3">{featuredBlog.excerpt}</p>
              <p className="lead mb-0">
                <Link to={`/blog/${featuredBlog.slug}`} className="text-white font-weight-bold">
                    Continue reading...
                </Link>
              </p>
            </div>
          </div>
        </div>
    );
};

export default Blog;