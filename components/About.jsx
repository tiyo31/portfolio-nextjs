import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about-alib.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-8'>
        <div className='relative w-64 h-64 md:w-full md:h-full m-auto rounded-full flex items-center justify-center hover:scale-105 ease-out duration-500 mb-6'>
          <Image src={AboutImg} className='rounded-full' alt='/' />
          <div className="absolute w-64 h-64 md:w-full md:h-full rounded-full bg-gradient-to-br from-transparent via-transparent to-blue-600 hover:opacity-0 duration-700"></div>
        </div>
        <div className='col-span-2'>
          <p className='section-subtitle text-center md:text-left'>
            Tentang Saya
          </p>
          <h2 className='py-4 text-center md:text-left'>Siapa saya</h2>
          <p className='py-2 text-justify'>
            Saya seorang web programmer dan graphic designer dengan pengalaman lebih dari 11 tahun dalam industri ini. Saya sangat bersemangat untuk mengembangkan keterampilan saya dan memperluas pengetahuan saya dalam desain dan pengembangan web.
          </p>
          <p className='py-2 text-justify'>
            Desain Kreatif dan Pengembangan Web selalu menjadi hasrat saya. Setelah mendapatkan gelar sarjana saya di bidang Ilmu Komputer, saya telah mengejar hasrat saya. Latar belakang saya sebagai IT memberi saya keuntungan karena saya memahami desain web, membangun, dan meluncurkan situs web membuat saya lebih sadar akan tren dan teknologi terkini dalam industri kreatif digital. Saya juga tertarik dengan branding, membangun cerita dibalik brand, membuat konsep dan konten.
          </p>
          <Link href='/#projects'>
            <p className='py-2 underline cursor-pointer'>
              Cek project yang pernah saya kerjakan.
            </p>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
