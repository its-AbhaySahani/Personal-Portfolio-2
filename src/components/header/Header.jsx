import './header.css';
import Cta from './CTA';
import MEpng from '../../assets/web-developer-min.png';
import MEwebp from '../../assets/web-developer-min.webp';
import HeaderSocial from './HeaderSocial';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Header = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Frontend Developer'],
    loop: true
  });

  return (
    <header id='home'>
      <div className='container header__container'>
        <h1 className='small-title'>Hello, I am</h1>
        <a href='/'>
          <h2 className='big-title'>Mohamad Salimi</h2>
        </a>
        <div className='typewriter'>
          <span className='text-gradient'>{text}</span>
          <Cursor cursorColor='#444444' cursorStyle='|' />
        </div>
        <Cta />
        <HeaderSocial />

        <div className='me'>
          <picture>
            <source srcSet={MEwebp} type='image/webp' />
            <img
              src={MEpng}
              type='image/png'
              width='304'
              height='482'
              alt='me'
            />
          </picture>
        </div>

        <div className='mouse'></div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
