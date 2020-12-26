import React from 'react';

// SVG for title
import Find from '../assets/img/find.svg';

const title = () => (
  <section className='title'>
    <img src={Find} alt='SVG for title' className='svg-image' />
    <div className='text'>
      <h1>Find Jobs</h1>
      <h4>with ease and peace in mind</h4>
    </div>
  </section>
);

export default title;
