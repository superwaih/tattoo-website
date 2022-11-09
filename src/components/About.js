import React from 'react';
import {motion } from "framer-motion"
import { aboutData } from '../data';
import { fadeIn } from '../variants';
const About = () => {
  const {title, subtitle1, subtitle2, btnText, btnIcon} = aboutData
   
  return <section>
    <div className="lg:py-16 xl:pb-[160px]">
      <div className="mx-auto container">
        <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
          {/* numbers */}
          <motion.div variants={fadeIn("right")}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false,amount: 0.7 }}
          className='flex flex-col lg:flex-col flex-1'>
            <div className='text-[360px] xl:text-[720px]
            bg-about bg-no-repeat bg-right 
            lg:-tracking-[0.055em] leading-none font-tertiary bg-clip-text text-transparent'>01</div>
          </motion.div>
          <motion.div variants={fadeIn('left')}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false,amount: 0.8 }}
          className='flex-1 h-full xl:mt-48 '>
            <h2 className='h2'>{title}</h2>
            <div className="flex flex-col items-end ">
            <div className='max-w-[530px] text-gray'>
            <p className='mb-6'>{subtitle1}</p>
              <p className='mb-9' >{subtitle2}</p>
              <button className='btn btn-lg btn-link '>
                {btnText} <div className="text-xl">{btnIcon}</div>
              </button>

            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>;
};

export default About;
