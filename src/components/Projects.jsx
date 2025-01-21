import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, link, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
    >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
            <div className='absolute inset-0 flex justify-end m-3 card-img-hover'>
              <div 
                onClick={() => window.open(source_code_link, '_blank')} 
                className='black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img src={github} alt='github' className='w-8 h-8 object-contain' />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <a href={link} target='_blank' rel='noreferrer' className='hover:underline'>
              <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            </a>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                @{tag.name}
              </p>
            ))}
          </div>

        </Tilt>
      </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Exploring technology through creations</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn('', '', 0.1)} 
          className='mt-3 text-secondary text-[17px] max-w-6xl leading-[30px]'
        >
          Projects that reflect my passion for software engineering, showcasing the 
          journey from initial concepts and ideas to fully realized applications. 
          Each project demonstrates my ability to combine creativity, technical expertise, 
          and problem-solving skills to deliver solutions that are both innovative and impactful.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        <a 
          href='https://github.com/jjjosephn' 
          target='_blank' 
          rel='noreferrer' 
          className='w-full text-center hover:underline'
        >
          <p className='text-[20px] font-semibold mt-[15px]'>For More Information</p>
        </a>
      </div>
    </>
  )
}

export default SectionWrapper(Projects, 'projects')