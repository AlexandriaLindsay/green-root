import React from 'react';
import heroImg from '../assets/img/healthy-chicken-bowl.png';

export default function Home() {
  return (
    <div className='hero'>
      <div className='max-w-7xl mx-auto'>

        <div className='px-6 banner-text relative translate-y-[6rem]'>
          <div className='absolute -left-[19rem] rotate-90 w-[25rem] top-[8.2rem] border-l-[11px] border-brand-primary pl-8'>
            <h2>Welcome To</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Faucibus in libero  risus risus risus risus.  risus risus 
              risus risus risus risus risus.
            </p>
          </div>

          <div className='heading-text'>
            <h1>
              <span>Redefined</span>
              <span>Health</span>
            </h1>
          </div>
        </div>

      </div>

      <div className='flex relative -z-1 translate-y-[-27rem]'>
        <div className='flex-1 bg-brand-secondary'></div>
        <div className='flex-1 bg-brand-grey banner-img overflow-hidden'>
          <img src={heroImg} alt="Chicken Bowl" />
        </div>
      </div>
     
    </div>
  );
}
