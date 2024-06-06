import './quotes.css';
import AVATAR1 from '../../assets/martin-fowler-min.jpg';
import AVATAR2 from '../../assets/kent-beck-min.jpg';
import AVATAR3 from '../../assets/chris-pine-min.jpg';
import AVATAR4 from '../../assets/jason-c-mcdonald-min.jpg';
import AVATAR1webp from '../../assets/martin-fowler-min.webp';
import AVATAR2webp from '../../assets/kent-beck-min.webp';
import AVATAR3webp from '../../assets/chris-pine-min.webp';
import AVATAR4webp from '../../assets/jason-c-mcdonald-min.webp';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    avatarWebp: AVATAR1webp,
    name: 'Martin Fowler',
    review:
      '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”'
  },
  {
    avatar: AVATAR2,
    avatarWebp: AVATAR2webp,
    name: 'Kent Beck',
    review:
      '“Optimism is an occupational hazard of programming: feedback is the treatment.”'
  },
  {
    avatar: AVATAR3,
    avatarWebp: AVATAR3webp,
    name: 'Chris Pine',
    review:
      "“Programming isn't about what you know, it's about what you can figure out.”"
  },
  {
    avatar: AVATAR4,
    avatarWebp: AVATAR4webp,
    name: 'Jason C. McDonald',
    review:
      "“Don't write better error messages, write code that doesn't need them.”"
  }
];

const Quotes = () => {
  return (
    <section id='quotes'>
      <h1 className='small-title'>Wise words</h1>
      <h2 className='medium-title'>Quotes</h2>

      <Swiper
        className='container quotes__container'
        modules={[Pagination]}
        spaceBetween={40}
        loop={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, avatarWebp, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='quote'>
              <div className='client__avatar'>
                <picture>
                  <source srcSet={avatarWebp} type='image/webp' />
                  <img
                    src={avatar}
                    type='image/jpg'
                    width='150'
                    height='150'
                    alt={name}
                  />
                </picture>
              </div>
              <h3 className='client__name'>{name}</h3>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Quotes;
