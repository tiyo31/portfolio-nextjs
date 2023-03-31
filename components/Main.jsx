import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center px-8 '>
      <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
        <div className='border border-solid border-indigo-800 w-full md:py-48 rounded-3xl md:px-8 py-10 px-2'>
          <p className='uppercase text-sm tracking-widest text-slate-500'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='pt-4 text-blue-500'>
            Hi, Saya <span className='text-white'> Alib Destiyono</span>
          </h1>
          <h3 className='py-2 text-slate-300'>Web Programmer & Graphic Designer</h3>
          <p className='py-4 sm:max-w-[70%] m-auto'>
            Saya fokus membangun aplikasi web responsive dan mengintegrasikannya dengan teknologi back-end.
          </p>
          <div className='flex items-center justify-between max-w-[300px] m-auto py-4'>
            <a
              href='https://www.instagram.com/alibdestiyono/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='social-media-icon'>
                <FaInstagram />
              </div>
            </a>
            <a
              href='https://web.facebook.com/alibdestino'
              target='_blank'
              rel='noreferrer'
            >
              <div className='social-media-icon'>
                <FaFacebook />
              </div>
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=6281275013501&text=Halo%20Alib'
              target='_blank'
              rel='noreferrer'
            >
              <div className='social-media-icon'>
                <FaWhatsapp />
              </div>
            </a>

            <Link href='/resume'>
              <div className='social-media-icon'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
