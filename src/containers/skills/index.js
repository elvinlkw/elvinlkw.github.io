import React from 'react';
import { StyledContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import sortBy from 'lodash/sortBy';
import { addFilter, removeFilter } from 'src/reducers/skills';
import { motion, AnimatePresence } from 'framer-motion';
import SkillCard from './SkillCard';
import SkillsFilters from './SkillsFilters';
import { navLinks } from '../navbar/constants';
import useFeatureFlag from 'src/hooks/useFeatureFlag';
import { FF_SKILLS } from 'src/features';

const Skills = () => {
  const dispatch = useDispatch();
  const { skillsets } = useSelector((state) => state.skills);
  const isEnabled = useFeatureFlag(FF_SKILLS);

  const handleChange = (e) => {
    dispatch(
      e.target.checked ? addFilter(e.target.name) : removeFilter(e.target.name)
    );
  };

  if (!isEnabled) {
    return;
  }

  return (
    <StyledContainer id={navLinks[0].href} className='pt-16 md:py-16 h-fit'>
      <div className='container mx-auto grid p-6 md:p-0 md:grid-cols-3 gap-y-8 md:gap-8'>
        <div className='flex flex-col items-center md:items-start'>
          <h1 className='text-4xl'>Skills & Tooling</h1>
          <div className='text-lg mb-8 text-center md:text-left'>
            In this fast-paced world of software engineering, staying ahead and
            updated means having a versatile and robust set of technical skills
            ranging from programming languages, web frameworks, testing and
            quality assurance, problem solving and much more.
          </div>
          <SkillsFilters onChange={handleChange} />
        </div>
        <motion.div layout className='col-span-2 icon-container'>
          <AnimatePresence>
            {sortBy(skillsets, (sk) => sk.name).map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </StyledContainer>
  );
};

export default Skills;
