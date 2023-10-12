import React from 'react';
import { motion } from 'framer-motion';
import { StyledCard } from './styles';
import Icon from 'src/components/icon';

const SkillCard = ({ name, icon }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      key={icon}
    >
      <StyledCard>
        <div className='card-image flex justify-center'>
          <Icon icon={icon} size={100} />
        </div>
        <div>
          <h3 className='text-md text-center'>{name.toLowerCase()}</h3>
        </div>
      </StyledCard>
    </motion.div>
  );
};

export default SkillCard;
