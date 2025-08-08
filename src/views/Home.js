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
import eggBowl from '../assets/img/egg-bowl.png';
import proteinBowl from '../assets/img/protein-bowl.png';
import salmonBowl from '../assets/img/salmon-bowl.png';
import veggiesOnBoard from '../assets/img/veggies-on-wood.jpg';
import glassBg from '../assets/img/glass-bg.svg';
import flyingVeg from '../assets/img/flyying-veg.png';

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


      <div className='max-w-7xl mx-auto py-32'>
        <div className='flex'>
          <div className='flex-1'>
            <h2>A New Kind of Super Food</h2>
            <ol>
              <li>
                <strong>Food For Life</strong>
                <p>Body text for whatever you'd like to expand on the main point.</p>
              </li>
              <li>
                <strong>Food For Life</strong>
                <p>Body text for whatever you'd like to expand on the main point.</p>
              </li>
              <li>
                <strong>Food For Life</strong>
                <p>Body text for whatever you'd like to expand on the main point.</p>
              </li>
            </ol>
            <Link className='btn' to='/'>Explore our Meals</Link>
          </div>
          <div className='flex-1'>
            <img className='w-full' src={veggies} alt='Veggies'/>
          </div>
        </div>
      </div>


      <div className='meals relative bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("${veggiesOnBoard}")` }}>
        <div className='overlay absolute top-0 left-0 bottom-0 right-0 opacity-80 bg-brand-primary'></div>
        <div className='max-w-7xl mx-auto relative z-1 py-16 px-12'>

          <div className='text-center mb-24'>
            <h2 className='text-white p-0 m-0 border-0 mb-4 text-[2.6rem]'>Meals To Go</h2>
            <p className='text-[#CFCFCF] w-xl mx-auto p-0'>Body text for whatever you'd like to expand on the main point Body text for whatever you'd like to expand.</p>
          </div>

          <div className='flex gap-6'>
            <div className='flex-1 glass-card relative overflow-hidden'>
              <img className='absolute top-0 left-0 w-full h-full object-contain' src={glassBg} alt='Glass Card' />
              <img className='w-[16rem] mx-auto' src={eggBowl} alt='Egg Bowl' />
              <h3>Protein Bowl</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <span>359 Cal.</span>
              <button><i className="fa-solid fa-cart-shopping"></i></button>
            </div>
            <div className='flex-1 glass-card relative overflow-hidden'>
              <img className='absolute top-0 left-0 w-full h-full object-contain' src={glassBg} alt='Glass Card' />
              <img className='w-[16rem] mx-auto mt-10' src={salmonBowl} alt='Salmon Bowl' />
              <h3>Protein Bowl</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <span>359 Cal.</span>
              <button><i className="fa-solid fa-cart-shopping"></i></button>
            </div>
            <div className='flex-1 glass-card relative overflow-hidden'>
              <img className='absolute top-0 left-0 w-full h-full object-contain' src={glassBg} alt='Glass Card' />
              <img className='w-[15rem] mx-auto mt-4' src={proteinBowl} alt='Protein Bowl' />
              <h3>Protein Bowl</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <span>359 Cal.</span>
              <button><i className="fa-solid fa-cart-shopping"></i></button>
            </div>

          </div>
        </div>
      </div>

      <div className='order-form relative'>
        <img className='absolute top-0 left-0' src={flyingVeg} alt='Bunch of Veggies' />
        <div className='flex'>
          <div className='flex-1'></div>
          <div className='flex-1'>
            <h2>Order Today!</h2>
            <p>Body text for whatever you'd like to expand on the main point Body text for whatever you'd like to expand.</p>
          </div>
        </div>
      </div>
    </>
  );
}
