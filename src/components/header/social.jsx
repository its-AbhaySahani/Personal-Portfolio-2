import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.instagram.com/explore_abhay_'
        aria-label='Facebook'
        target='_blank'
        rel='noreferrer'
      >
        <FaInstagramSquare />
      </a>
      <a
        href='https://www.linkedin.com/in/abhay-sahani/'
        aria-label='Linkedin'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
      <a
        href='https://github.com/its-AbhaySahani'
        aria-label='Github'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
