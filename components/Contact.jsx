import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import AboutImg from '../public/assets/about-alib.jpg';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-8 py-16 w-full '>
        <p className='section-subtitle'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full bg-slate-800 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={AboutImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Alib Destiyono</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
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
                    <a>
                      <div className='social-media-icon'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto bg-slate-800 rounded-xl lg:p-4 text-slate-900'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/36c992e8-a253-4a6d-a04f-b8d38f67eb20'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-slate-300'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name' required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-slate-300'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-slate-300'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-slate-300'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-slate-300'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full bg-indigo-800  p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
