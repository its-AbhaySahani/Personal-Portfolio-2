import { useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import './portfolio.css';

import IMG1 from '../../assets/longDrive.jpeg';
import IMG1webp from '../../assets/longDrive.webp'

import IMG2 from '../../assets/PokemonDetector.png';
import IMG2webp from '../../assets/PokemonDetector.webp'

import IMG3 from '../../assets/ShitChat.png';
import IMG3webp from '../../assets/ShitChat.webp'

import IMG4 from '../../assets/portfolio.png';
import IMG4webp from '../../assets/portfolio.webp'

import IMG5 from '../../assets/anime.png';
import IMG5webp from '../../assets/anime.webp'

import IMG6 from '../../assets/covid-19.png';
import IMG6webp from '../../assets/covid-19.webp'

const data = [
  {
    id: 6,
    image: IMG6,
    imageWebp: IMG6webp,
    title: 'Covid-19 website',
    github: 'https://github.com/its-AbhaySahani/Covid-19-Website',
    demo: 'https://its-abhaysahani.github.io/Covid-19-Website/',
    tags: ['html', 'css', 'javascript'],
    desc: 'This is a Covid-19 website which contains all nessasary information about Covid-19 and its prevention. Also conatains a map which shows the number of cases in each country.',
  },
  {
    id: 5,
    image: IMG5,
    imageWebp: IMG5webp,
    title: 'GokuFlex',
    github: 'https://github.com/its-AbhaySahani/anime',
    demo: 'https://gokuflex.netlify.app/',
    tags: ['React','Node/Express','MongoDb', 'Anime API', 'React Context API'],
    desc: 'This is a anime streaming website with user authentication and watchlist feature. Users can watch anime and add them to their watchlist.',
  },
  {
    id: 4,
    image: IMG4,
    imageWebp: IMG4webp,
    title: 'Portfolio Website',
    github: 'https://github.com/its-AbhaySahani/Personal-Portfolio-2',
    demo: 'https://abhay-sahani.netlify.app/',
    tags: ['React', 'React Icons', 'React Hooks'],
    desc: 'This is my personal portfolio website. It is a single page application with dark mode and light mode support.',
  },
  {
    id: 3,
    image: IMG3,
    imageWebp: IMG3webp,
    title: 'ShitChat',
    github: 'https://github.com/its-AbhaySahani/ShitChat',
    demo: 'chatgoku.onrender.com',
    tags: ['html&css', 'Node/Express', 'Socket.io', 'code editor'],
    desc: 'This is a real-time code editor with chat functionality. Users can chat and code simultaneously.',
  },
  {
    id: 2,
    image: IMG2,
    imageWebp: IMG2webp,
    title: 'Pokemon Detector',
    github: 'https://github.com/its-AbhaySahani/Pokemon-Detector',
    demo: 'https://drive.google.com/file/d/1Ifz7KxKzKIobN-9d7sy6-UVzKWzt3GGo/view',
    tags: ['React', 'Flask', 'PyTorch', 'Deep Learning', 'Vision Transformer', 'CV'],
    desc: 'This is a Pokemon detector app which uses Vision Transformer model to detect Pokemon from images. Trained useing 1.5lakh images of 1100 pokemons scraped from Bing.',
  },
  {
    id: 1,
    image: IMG1,
    imageWebp: IMG1webp,
    title: 'Long Drive- peer-to-peer car rental app',
    github: 'https://github.com/its-AbhaySahani/long_drive',
    demo: 'https://longdrive.netlify.app/',
    tags: ['React+vite', 'node/express', 'MongoDB'],
    desc: 'This is a peer-to-peer car rental app where users can rent cars from other users and also can give their personal vehicles on rent.',
  }


];

const Portfolio = () => {
  const [count, setCount] = useState(6);
  return (
    <section id='portfolio'>
      <h1 className='small-title'>My Recent Work</h1>
      <h2 className='medium-title'>Portfolio</h2>

      <div className='container portfolio__container'>
        {data
          .slice(0)
          .reverse()
          .slice(0, count)
          .map(({ id, image, imageWebp, title, github, demo, tags, desc }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <picture>
                    <source srcSet={imageWebp} type='image/webp' />
                    <img
                      src={image}
                      type='image/jpg'
                      width='600'
                      height='420'
                      alt={title}
                    />
                  </picture>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__tag'>
                  {tags.map((tag, index) => {
                    return (
                      <span key={index} className='portfolio__tag-pill'>
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <p className='portfolio__desc'>{desc}</p>
                <div className='portfolio__item-cta'>
                  <a
                    href={github}
                    className='btn btn-variant'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className='btn btn-white'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
      <div className='btn-row'>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (count === 6) {
              setCount(data.length);
            } else {
              setCount(6);
            }
          }}
          type='button'
          className='btn btn-dark-variant'
        >
          See{' '}
          {count === 6 ? (
            <>
              More <BsArrowDownCircle className='moreless' />
            </>
          ) : (
            <>
              Less <BsArrowUpCircle className='moreless' />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
