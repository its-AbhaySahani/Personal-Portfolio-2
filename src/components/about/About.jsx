import './about.css';
import MeJpg1000 from '../../assets/mypic2.jpeg';
import MeWebp1000 from '../../assets/mypic2.jpeg';
import MeJpg440 from '../../assets/mypic2.jpeg';
import MeWebp440 from '../../assets/mypic2.jpeg';
import MeJpg250 from '../../assets/mypic2.jpeg';
import MeWebp250 from '../../assets/mypic2.jpeg';
import { FaAward } from 'react-icons/fa';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h1 className='small-title'>Get To Know</h1>
      <h2 className='medium-title'>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <picture>
              <source
                media='(max-width: 600px)'
                srcSet={MeWebp250}
                type='image/webp'
                width='250'
                height='250'
              />
              <source
                media='(max-width: 1024px)'
                srcSet={MeWebp440}
                type='image/webp'
                width='440'
                height='440'
              />
              <source
                media='(min-width: 1025px)'
                srcSet={MeWebp1000}
                type='image/webp'
                width='1000'
                height='1000'
              />
              <source
                media='(max-width: 600px)'
                srcSet={MeJpg250}
                type='image/jpeg'
                width='250'
                height='250'
              />
              <source
                media='(max-width: 1024px)'
                srcSet={MeJpg440}
                type='image/jpeg'
                width='440'
                height='440'
              />
              <source
                media='(min-width: 1025px)'
                srcSet={MeJpg1000}
                type='image/jpeg'
                width='1000'
                height='1000'
              />
              <img
                src={MeJpg1000}
                type='image/jpg'
                alt='about'
                width='1000'
                height='1000'
              />
            </picture>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h3>Experience</h3>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h3>Projects</h3>
              <small>15+ Completed</small>
            </article>

            <article className='about__card'>
              <TfiHeadphoneAlt className='about__icon' />
              <h3>Worlwide</h3>
              <small>Remotely Available</small>
            </article>
          </div>

          <p>
          Full stack web developer proficient in building responsive single page web applications 
          and efficient backends using NodeJS, Express, frameworks like Django and React.
          Ability to implement performance optimization using threading and caching to make backend efficient.
          Adaptive to new technologies such as Cloud, AI and containers.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
