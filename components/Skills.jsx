import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import CiImg from '../public/assets/skills/ci.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Photoshop from '../public/assets/skills/photoshop.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full px-8'>
        <p className='section-subtitle'>
          Skills
        </p>
        <h2 className='py-4'>Apa yang bisa saya lakukan</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='skill-card'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <div className=''>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          <div className='skill-card'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <div className=''>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='skill-card'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <div className=''>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='skill-card'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <div className=''>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='skill-card'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <div className=' '>
                <Image src={CiImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3>CodeIgniter</h3>
              </div>
            </div>
          </div>
          <div className='skill-card'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <div className=''>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='skill-card'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <div className=''>
                <Image src={Photoshop} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3>Photoshop</h3>
              </div>
            </div>
          </div>
          <div className='skill-card'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <div className=''>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
