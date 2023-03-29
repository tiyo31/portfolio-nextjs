import React from 'react';
import Head from 'next/head';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Alib Destiyono | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px] px-8'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-gradient-to-tl from-blue-500 to-blue-900 rounded-md my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center text-white'>Alib Destiyono</h2>
          <div className='flex text-white'>
            <a
              href='https://www.instagram.com/alibdestiyono/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://web.facebook.com/alibdestino'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebook size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>

        <p>
          Web Development and creative design have always been my passion. After getting my bachelor degree in Computer Science, I’ve been pursuing my passion. My background as an IT gave me an advantage as I understand web design, building and launch websites made me more aware of current trend and technology in the digital creative industry. I also interested in branding, building story behind the brand, creating concepts and contents.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center text-blue-500 text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
          
         Front-End Web Developer | HTML | CSS |  Tailwind | Javascript | PHP | Next JS | CodeIgniter | MQL | Photoshop | Ilustrator | Google Ads

          </p>

        </div>

        <h5 className='text-center text-blue-500 text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              PT Global Kapital Investama Berjangka/GKinvest
            </span>
            <span className='px-2'>|</span>Pekanbaru, Riau
          </p>
          <p className='py-1 italic'>Web Developer & Digital Marketing (2019 - 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Develop landing page to generate leads.
            </li>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>Helping the marketing team by making banners, flyers and other creative assets.</li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              PT Midtou Aryacom Future
            </span>
            <span className='px-2'>|</span>Jakarta
          </p>
          <p className='py-1 italic'>Web Development & Digital Marketing - Remote (2020-2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Create and manage landing pages
            </li>
            <li>
              Ensure Google Ads & Facebook Ads ads generate prospective leads.
            </li>
            <li>
              Manage CRM to process existing leads.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center text-blue-500 text-[18px] py-4'>
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>GoldenFinityFX</span>
            <span className='px-2'>|</span>Jakarta
          </p>
          <p className='py-1 italic'>Web Development & Digital Marketing - Remote (2020 – 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Responsible for creating and sharing digital content on social media such as Facebook, Instagram.
            </li>




          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
