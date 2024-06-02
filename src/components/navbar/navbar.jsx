import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiTask } from 'react-icons/bi';
import { SlGraduation } from 'react-icons/sl';
import { BsChatDots } from 'react-icons/bs';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a
        data-tooltip-content='Home'
        data-tooltip-id='homeBtn'
        href='#home'
        aria-label='Home'
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        data-tooltip-content='About'
        data-tooltip-id='aboutBtn'
        href='#about'
        aria-label='About'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        data-tooltip-content='Experience'
        data-tooltip-id='experienceBtn'
        href='#experience'
        aria-label='Experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        data-tooltip-content='Expertise'
        data-tooltip-id='expertiseBtn'
        href='#expertise'
        aria-label='Expertise'
        onClick={() => setActiveNav('#expertise')}
        className={activeNav === '#expertise' ? 'active' : ''}
      >
        <BiTask />
      </a>
      <a
        data-tooltip-content='Qualification'
        data-tooltip-id='qualificationBtn'
        id='menu-qualification'
        href='#qualification'
        aria-label='Qualification'
        onClick={() => setActiveNav('#qualification')}
        className={activeNav === '#qualification' ? 'active' : ''}
      >
        <SlGraduation />
      </a>
      <a
        data-tooltip-content='Contact'
        data-tooltip-id='contactBtn'
        href='#contact'
        aria-label='Contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BsChatDots />
      </a>

      <Tooltip
        id='homeBtn'
        place='top'
        variant='dark'
        effect='solid'
        className='tooltip noArrow'
      >
        Home
      </Tooltip>
      <Tooltip
        id='aboutBtn'
        place='top'
        variant='dark'
        effect='solid'
        className='tooltip noArrow'
      >
        About
      </Tooltip>
      <Tooltip
        id='experienceBtn'
        place='top'
        variant='dark'
        effect='solid'
        className='tooltip noArrow'
      >
        Experience
      </Tooltip>
      <Tooltip
        id='expertiseBtn'
        place='top'
        variant='dark'
        effect='solid'
        className='tooltip noArrow'
      >
        Expertise
      </Tooltip>
      <Tooltip
        id='qualificationBtn'
        place='top'
        variant='dark'
        effect='solid'
        className='tooltip noArrow'
      >
        Qualification
      </Tooltip>
      <Tooltip
        id='contactBtn'
        place='top'
        variant='dark'
        effect='solid'
        className='tooltip noArrow'
      >
        Contact
      </Tooltip>
    </nav>
  );
};

export default Nav;
