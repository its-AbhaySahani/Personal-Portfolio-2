import './expertise.css';
import { BiCheck } from 'react-icons/bi';

const Expertise = () => {
  return (
    <section id='expertise'>
      <h1 className='small-title'>What I Offer</h1>
      <h2 className='medium-title'>Expertise</h2>

      <div className='container expertises__container'>
        <article className='expertise'>
          <div className='expertise__head'>
            <h3>SEO Optimization</h3>
          </div>

          <ul className='expertise__list'>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Gather relevant keywords.</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Optimize images for search.</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Optimize meta descriptions.</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Speed up web page load.</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Optimize page across devices.</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Manage broken links.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className='expertise'>
          <div className='expertise__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='expertise__list'>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Designing user interfaces and navigation menus</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Writing and reviewing code for web pages.</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Integrating multimedia content onto a site.</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Testing web applications.</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>
                Troubleshooting problems with performance or user experience.
              </p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>
                Collaborating with teams of designers, developers, and clients.
              </p>
            </li>
          </ul>
        </article>
        {/* Eend of Web Development */}

        <article className='expertise'>
          <div className='expertise__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='expertise__list'>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Research industry-related topics.</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>
                Prepare well-structured drafts using digital publishing
                platforms.
              </p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>
                Create and distribute marketing copy to advertise company and
                products.
              </p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Identify customers&apos; needs and recommend new topics.</p>
            </li>
            <li>
              <BiCheck className='expertise__list-icon' />
              <p>Measure web traffic to content.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  );
};

export default Expertise;
