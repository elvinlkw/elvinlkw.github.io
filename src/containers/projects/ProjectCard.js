import React from 'react';
import CardOptions from './CardOptions';
import { StyledProjectcard } from './styles';
import Icon from 'src/components/icon';
import { motion } from 'framer-motion';

const ProjectCard = ({ name, options, src, skills, visible }) => {
  if (!visible) return;

  return (
    <StyledProjectcard className='card card-compact bg-base-100 shadow-xl flex flex-col justify-between'>
      <figure>
        <img src={process.env.PUBLIC_URL + src} alt={name} />
      </figure>
      <div className='card-body'>
        <div className='card-body-header flex justify-between'>
          <h2 className='card-title text-lg'>{name}</h2>
          <CardOptions options={options} />
        </div>
        <div className='flex justify-center gap-2 my-2'>
          {skills.map((skill) => (
            <div className='skill-icon tooltip tooltip-bottom' data-tip={skill}>
              <motion.div layout whileHover={{ scale: 1.3 }} key={skill}>
                <Icon icon={skill} size={24} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </StyledProjectcard>
  );
};

export default ProjectCard;
