import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/img/healthy-chicken-bowl.png';
import pattern1 from '../assets/img/veg-pattern1.png';
import pattern2 from '../assets/img/veg-pattern2.png';
import pattern3 from '../assets/img/veg-pattern3.png';
import tomato from '../assets/img/tomato.png';
import broccoli from '../assets/img/broccoli.png';
import pear from '../assets/img/pear.png';
import nuts from '../assets/img/nuts.png';
import veggies from '../assets/img/veggies.png';

export default function Home() {
  return (
    <>
      <div className='hero h-[45rem]'>
        <div className='max-w-[68rem] mx-auto'>

          <div className='px-6 banner-text relative translate-y-[6rem]'>
            <div className='absolute -left-[19rem] rotate-90 w-[25rem] top-[8.2rem] border-l-[8px] border-brand-primary pl-8'>
              <h3 className='font-extrabold uppercase tracking-[.1rem]'>Welcome To</h3>
              <p className='text-brand-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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


      <div className='max-w-7xl mx-auto -translate-y-[7rem]'>

        <div className='flex'>
          <div className='flex-[54%]'>
            <div className='flex gap-8'>
              <div className='flex-1'><img className='w-full' src={pattern1} alt='Veggie Pattern'/></div>
              <div className='flex-1'><img className='w-full' src={pattern2} alt='Veggie Pattern'/></div>
              <div className='flex-1'><img className='w-full' src={pattern3} alt='Veggie Pattern'/></div>
            </div>
      
          </div>

          <div className='flex-[40%] pl-18 translate-y-[8.5rem]'>
            <h3 className='accent'>Chef ABC</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper.</p>
            <div className='flex gap-4'>
              <div className='flex-1'><img className='w-full' src={tomato} alt='Tomato'/></div>
              <div className='flex-1'><img className='w-full' src={broccoli} alt='Broccoli'/></div>
              <div className='flex-1'><img className='w-full' src={pear} alt='Pear'/></div>
              <div className='flex-1'><img className='w-full' src={nuts} alt='Nuts'/></div>
            </div>
          </div>
        </div>
      </div>


      <div className='max-w-7xl mx-auto'>
        <div className='flex'>
          <div className='flex-1'>
            <h2>A New Kind of Super Food</h2>
            <ol>
              <li>
                <strong>Food For Life</strong>
                <p>Body text for whatever you’d like to expand on the main point.</p>
              </li>
              <li>
                <strong>Food For Life</strong>
                <p>Body text for whatever you’d like to expand on the main point.</p>
              </li>
              <li>
                <strong>Food For Life</strong>
                <p>Body text for whatever you’d like to expand on the main point.</p>
              </li>
            </ol>
            <Link className='btn' to='/'>Explore our Meals</Link>
          </div>
          <div className='flex-1'>
            <img className='w-full' src={veggies} alt='Veggies'/>
          </div>
        </div>
      </div>
    </>
  );
}
