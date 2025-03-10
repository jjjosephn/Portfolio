import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement 
    contentStyle={{background: '#1d1836', color:'#fff'}}
    contentArrowStyle={{borderRight: '7px solid #1d1836'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg, color: '#fff'}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon} 
          alt={experience.title} 
          className='w-[60%] h-[60%] object-contain' 
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>
        {experience.title}
      </h3>

      <a href={experience.link} target='_blank' rel='noreferrer' className='hover:underline text-secondary'>
        <p className='text-secondary text-[16px] font-semibold'style={{margin: 0}}>
          {experience.company_name}
        </p>
      </a>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li 
            key={`experience-point-${index}`} 
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Roles That Shaped My Career</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>

        <a 
          href='https://www.linkedin.com/in/josephnguyen-cs/' 
          target='_blank' 
          rel='noreferrer' 
          className='hover:underline'
        >
          <p className='w-full text-[20px] font-semibold text-center mt-[15px]'>For More Information</p>
        </a>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')