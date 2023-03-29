import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import webrsuindahImg from '../public/assets/projects/website-rsuindah.webp'
import facebookadsImg from '../public/assets/projects/facebookads.webp'
import landingpageImg from '../public/assets/projects/landingpage.webp'
import portofolio1Img from '../public/assets/projects/portofolio1.webp'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-8 py-16'>
        <p className='section-subtitle'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Social Media Management'
            backgroundImg={portofolio1Img}
            projectUrl='#projects'
            tech='Adobe Photoshop'
          />
          <ProjectItem
            title='Website Development'
            backgroundImg={webrsuindahImg}
            projectUrl='/rsuindah'
            tech='PHP'

          />
          <ProjectItem
            title='Digital Marketing'
            backgroundImg={facebookadsImg}
            projectUrl='#projects'
            tech='Facebook Ads'

          />
          <ProjectItem
            title='Website Development'
            backgroundImg={landingpageImg}
            projectUrl='#projects'
            tech='PHP'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
