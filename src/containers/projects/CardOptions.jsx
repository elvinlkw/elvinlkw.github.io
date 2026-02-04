import React from 'react';
import Icon from 'src/components/icon';
import { cardOptionsMap } from './constants.jsx';
import { motion } from 'framer-motion';

const CardOptions = ({ options }) => {
  return (
    <div className='dropdown'>
      <label tabIndex={0} className='btn'>
        <motion.div
          layout
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 1 }}
        >
          <Icon icon='Kebab' />
        </motion.div>
      </label>

      <ul
        tabIndex={0}
        className='dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52'
      >
        {cardOptionsMap.map(
          ({ name, property, newTab }) =>
            options?.[property] && (
              <li key={name}>
                {newTab ? (
                  <a target='_blank' rel='noreferrer' href={options[property]}>
                    {name}
                  </a>
                ) : (
                  <a href={options[property]}>{name}</a>
                )}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default CardOptions;
