import { useState } from 'react';
import './qualification.css';
import { FaUserGraduate } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id='qualification' className='qualification section'>
      <h1 className='small-title'>My Personal Journey</h1>
      <h2 className='medium-title'>Qualification</h2>

      <div className='container qualification__container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <FaUserGraduate className='qualification__icon' /> Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <FaBriefcase className='qualification__icon' />
            Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div className='text-right'>
                <h3 className='qualification__title'>Computer Science</h3>
                <span className='qualification__subtitle'>LPU</span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2021 - 2025
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Data Science(ML/AI)</h3>
                <span className='qualification__subtitle'>upGrad</span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2021 - 2025
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div className='text-right'>
                <h3 className='qualification__title'>Senior High School</h3>
                <span className='qualification__subtitle'>Heritage Academy</span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2018 - 2020
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div className='text-right'>
                <h3 className='qualification__title'>Data Science</h3>
                <span className='qualification__subtitle'>
                  Blenheim Chalcot
                </span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2024 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Web Developer</h3>
                <span className='qualification__subtitle'>
                  Freelance
                </span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2023 - 2024
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div className='text-right'>
                <h3 className='qualification__title'>Planning and Management</h3>
                <span className='qualification__subtitle'>
                  E-Cell LPU
                </span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2021 - 2023
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Event Planning</h3>
                <span className='qualification__subtitle'>
                  Spade LPU
                </span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2021 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
