import './header.css';
import Helper from './helper';
import MEpng from '../../assets/mypic.jpeg';
import MEwebp from '../../assets/mypic2.jpeg';
import Social from './social';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Header = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Data Scientist'],
    loop: true
  });

  return (
    <header id='home'>
      <div className='container header__container'>
        <h1 className='small-title'>Hello, I am</h1>
        <a href='/'>
          <h2 className='big-title'>Abhay Sahani</h2>
        </a>
        <div className='typewriter'>
          <span className='text-gradient'>{text}</span>
          <Cursor cursorColor='#444444' cursorStyle='|' />
        </div>
        <Helper />
        <Social />

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
