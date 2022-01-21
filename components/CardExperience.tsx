import React from 'react';
import { data } from '../pages/api/data';

type Props = {};

const CardExperience = (props: Props) => {
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 items-center justify-center mx-auto gap-3 md:gap-10'>
        {data.experience.map((i) => (
          <>
            <div className='border-2 p-3 rounded-lg'>
              {i.com}
            </div>
          </>
        ))}
      </div>
    </>
  )
};

export default CardExperience;
