import React from 'react';
import heroImg from '../assets/img/healthy-chicken-bowl.png';
// import { gsap } from 'gsap';

export default function Home() {
  return (
    <div className='flex hero -z-1 relative -translate-y-23'>
      <div className='flex-1 bg-brand-secondary'>
        <div className='pl-20'>
          <div>
            <h2>Welcome To</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Faucibus in libero  risus risus risus risus.  risus risus 
              risus risus risus risus risus.
            </p>
          </div>
          <div>
            <h1>
              <span>Redefined</span>
              <span>Health</span>
            </h1>
          </div>
        </div>
      </div>
      <div className='flex-1 bg-brand-grey'>
        <img src={heroImg} alt="Chicken Bowl" />
      </div>
    </div>
  );
}
