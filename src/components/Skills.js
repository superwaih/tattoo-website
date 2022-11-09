import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants"

const Skills = () => {

  const { ref, inView } = useInView({
    threshold: 0.2
  })
  const styles = {
    path: {
      stroke: '#111111',
    },
    trail: {
      stroke: '#EEEEEE',
    },
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  };
  const [fullBody, setFullBody] = useState(0)
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 80) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullBody, temporary]);
  return <motion.section 
  initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
  
  ref={ref} className=' section font-primary' 
  
  variants={fadeIn('up')}>
    <div className="container mx-auto">
      <div className=' flex flex-col xl:flex-row justify-between items-center gap-y-12  '>
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar
            text={`${fullBody}%`}
            strokeWidth={1}
            value={fullBody}
            styles={styles}
          />
          <div className='uppercase font-light tracking-[1.2px] text-center'>Full Body Tattoo</div>
        </div>
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar

            strokeWidth={1}
            value={fullColor}
            text={`${fullColor}%`}
            styles={styles}
          />
          <div className='uppercase font-light tracking-[1.2px] text-center'>Full Body Tattoo</div>
        </div>
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar

            strokeWidth={1}
            value={piercing}
            text={`${piercing}%`}
            styles={styles}
          />
          <div className='uppercase font-light tracking-[1.2px] text-center'>Safely Piercing</div>
        </div>
        <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={temporary}
              text={`${temporary}%`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Temporary Tatoo
            </div>
          </div>
      </div>
    </div>
  </motion.section>;
};

export default Skills;
