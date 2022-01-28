import { useTheme } from 'next-themes';
import React from 'react';

type Props = {};

const DarkMode = (props: Props) => {
  const {theme, setTheme} = useTheme()

  console.log(theme);
  
  return (
    <div>
      <button
      className='bg-white bg-opacity-50 backdrop-blur-md p-3 rounded-full'
        onClick={() =>
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
          />
        </svg>
      </button>
    </div>
  )
};

export default DarkMode;
