import React from 'react';
import Icon from 'src/components/icon';
import { cardOptionsMap } from './constants';

const CardOptions = ({ options }) => {
  return (
    <div className='dropdown'>
      <label tabIndex={0} className='btn m-1'>
        <Icon icon='Kebab' />
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
      >
        {cardOptionsMap.map(
          ({ name, property, newTab }) =>
            options?.[property] && (
              <li>
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
