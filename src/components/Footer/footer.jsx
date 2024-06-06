import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>
        Abhay Sahani
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#expertise'>Expertise</a>
        </li>
        <li>
          <a href='#qualification'>Qualification</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#quotes'>Quotes</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://www.instagram.com/explore_abhay_'
          aria-label='Facebook'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebookF />
        </a>
        <a
          href='https://www.instagram.com/explore_abhay_'
          aria-label='Instagram'
          target='_blank'
          rel='noreferrer'
        >
          <FiInstagram />
        </a>
        <a
          href='https://twitter.com/Explore_Abhay_'
          aria-label='Twitter'
          target='_blank'
          rel='noreferrer'
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>
          Created by yours truly,{' '}
          <a
            href='https://www.linkedin.com/in/abhay-sahani/'
            aria-label='Salimi'
            target='_blank'
            rel='noreferrer'
          >
            Abhay
          </a>{' '}
          &copy; {new Date().getFullYear()}.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
