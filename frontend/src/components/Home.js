import React from 'react';
import { Link } from 'react-router-dom'
const home = () => (
  <div className='container'>
    <div className="jumbotron mt-5">
      <h1 className="display-4">Welcome to Blog Lyfe!</h1>
      <p className="lead">we make all kinds of awesome blog about various topics.</p>
      <hr className="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <Link className="btn btn-primary btn-lg" to="/blog" role="button">Check out our blog</Link>
    </div>
  </div>
);

export default home;