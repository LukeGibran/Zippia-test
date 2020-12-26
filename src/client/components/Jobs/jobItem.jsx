import React from 'react';

import Company from '../../assets/img/company.svg';

const jobItem = ({ jobTitle, companyName, shortDesc, id }) => (
  <div className={`card card-${id < 5 ? 'primary' : 'secondary'}`}>
    <div className='card-header'>
      <div className='job-title'>{jobTitle}</div>
      <div className='company-name'>
        <img src={Company} alt='Company' className='company-image' />
        {companyName}
      </div>
    </div>
    <hr />
    <div className='card-body'>
      <p>{shortDesc}</p>
    </div>
  </div>
);

export default jobItem;
