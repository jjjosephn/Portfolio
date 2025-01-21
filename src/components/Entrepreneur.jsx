import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import {testimonials } from '../constants'
import JordansCanvas from './canvas/Jordans';
import { businesslogo } from '../assets';
import { Tilt } from 'react-tilt';

const ReviewCard = ({ index, testimonial, name, image }) => (
  <motion.div 
    variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>
    <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

    <div className='mt-7 flex justify-between items-center gap-1'>
      <div className='flex-1 flex flex-col'>
        <p className='text-white font-medium text-[16px]'>
          <span className='blue-text-gradient'>@ </span>{name}
        </p>
      </div>
    </div>
  </motion.div>
)
const Entrepreneur = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Building a business from the ground up</p>
        <h2 className={styles.sectionHeadText}>Entrepreneur</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn('', '', 0.1)} 
        className='mt-3 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        Founding a sneaker reselling business taught me to adapt quickly to market changes, 
        much like the iterative process in software engineering. By constantly analyzing trends, 
        adjusting strategies in real time, and optimizing operations to remain competitive, 
        I honed my adaptability and problem-solving skills.
      </motion.p>

      <section
        className="relative w-full h-[60vh] mx-auto mb-0"
        style={{ transform: "translate(-5%, -7%)" }}
      >
        <div className="flex items-center justify-between w-full h-full">
          <JordansCanvas />
          <motion.div 
            variants={fadeIn('left', 'spring', 0.1)}
            className="w-1/2">
            <Tilt>
              <a 
                href='https://www.instagram.com/sickiqs/' 
                target='_blank' 
                rel='noreferrer' 
                className="block w-fit mx-auto hover:opacity-75 hover:scale-105 transition-transform"
              >
                <img src={businesslogo} alt='Sickiqs' className='w-[5rem] mx-auto mb-3' />
              </a>
            </Tilt>
            <ul className='mt-2 text-secondary list-disc text-xs leading-[1.5] sm:text-[18px]'>
              <li> 
                Generated over $70,000 in revenue, averaging 30% profit margins
              </li>
              <li className='mt-4'>
                Accumulated a total of 350 sneakers sold and over 150 positive reviews across all platforms
              </li>
              <li className='mt-4'>
                Managed a team of 2 to optimize the acquisition of high-demand sneakers, maximizing business profitability
              </li>
            </ul>

          </motion.div>
        </div>
      </section>
      
      <div className={`bg-black-100 rounded-[20px] -mt-20`}>
        <div className={`-mt-20 pt-14 pb-6 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <ReviewCard key={testimonial.name} index={index} {...testimonial} />
          ))}
          <a 
            href='https://www.instagram.com/p/CRaTMiDpHWU/' 
            target='_blank' 
            rel='noreferrer' 
            className='hover:underline text-secondary w-full'
          >
            <p 
              className='w-full text-center text-secondary text-[17px] font-semibold' 
              style={{ margin: 0 }}
            >
              More
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Entrepreneur, 'entrepreneur');
