import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import JordansCanvas from './canvas/Jordans';

const Entrepreneur = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Building a from the ground up</p>
        <h2 className={styles.sectionHeadText}>Entrepreneur</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn('', '', 0.1)} 
        className='mt-3 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        Founding a sneaker reselling business taught me to quickly adapt to market changes, 
        similar to the iterative process in software engineering. Constantly learning to analyze 
        trends, adjusting strategies on the fly, and continuously optimizing operations to stay competitive, 
        honing skills in adaptability and problem-solving.
      </motion.p>

      <section
        className="relative w-full h-screen mx-auto"
        style={{ transform: "translate(-5%, -20%)" }}
      >
        <div className="flex items-center justify-between w-full h-full">
          <JordansCanvas />
          <div className="w-1/2">
            <a 
              href='https://www.instagram.com/sickiqs/' 
              target='_blank' 
              rel='noreferrer' 
              className='hover:underline text-[#6e5de8]'
            >
              <h1 className=' text-[30px] font-bold text-center'>Sickiqs</h1>
            </a>
            <ul className='mt-2 text-secondary text-[20px] list-disc'>
              <li> 
                Generated over $70,000 in revenue, averaging 30% profit margins
              </li>
              <li className='mt-4'>
                Accumulated a total of 350 sneakers sold and over 150 positive reviews
                across all platforms
              </li>
              <li className='mt-4'>
                Managed a team of 2 to optimize the acquisition of high-demand sneakers, 
                maximizing business profitability
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Entrepreneur, 'entrepreneur');
