import React from 'react';
import { StyledCard, StyledContainer, StyledFilters } from './styles';
import Icon from 'src/components/icon';
import Checkbox from 'src/components/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import sortBy from 'lodash/sortBy';
import { checkboxList } from './constants';
import { addFilter, removeFilter } from 'src/reducers/skills';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const dispatch = useDispatch();
  const { skillsets, filters } = useSelector((state) => state.skills);

  const handleChange = (e) => {
    dispatch(
      e.target.checked ? addFilter(e.target.name) : removeFilter(e.target.name)
    );
  };

  return (
    <StyledContainer className='py-16 h-fit'>
      <div className='container mx-auto grid grid-cols-3 gap-8'>
        <div>
          <h1 className='text-4xl'>Skills & Tooling</h1>
          <div className='text-lg mb-8'>
            In this fast-paced world of software engineering, staying ahead and
            updated means having a versatile and robust set of technical skills
            ranging from programming languages, web frameworks, testing and
            quality assurance, problem solving and much more.
          </div>
          <StyledFilters>
            <legend className='text-lg'>Filters</legend>
            <div className='flex flex-wrap'>
              {checkboxList.map(({ name, label }) => (
                <Checkbox
                  key={label}
                  label={label}
                  checked={filters.includes(name)}
                  name={name}
                  onChange={handleChange}
                />
              ))}
            </div>
          </StyledFilters>
        </div>
        <motion.div layout className='col-span-2 icon-container'>
          <AnimatePresence>
            {sortBy(skillsets, (sk) => sk.name).map(({ name, icon }) => (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                key={icon}
                data-tip={name}
              >
                <StyledCard>
                  <div className='card-image flex justify-center'>
                    <Icon icon={icon} size={100} />
                  </div>
                  <div>
                    <h3 className='text-md text-center'>
                      {name.toLowerCase()}
                    </h3>
                  </div>
                </StyledCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </StyledContainer>
  );
};

export default Skills;
