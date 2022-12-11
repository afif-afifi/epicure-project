import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import hero from '../../../assets/hero.svg'
import '../Hero/Hero-stylesheet.css';
export interface IHeroProps {
}

export function Hero (props: IHeroProps) {
  return(
    <div className='Hero'>
        <img
            alt=""
            src={hero}
            width="100%"
            height=""
            className="hero-image"
        />
      <div className='search-box'>
        <p className='intro'>
        Epicure works with the top chef restaurants in Tel Aviv
        </p>
        <div className="search-container">
          
          <span><FontAwesomeIcon className='icon' icon={['fas', 'magnifying-glass']} /></span>
          <input className='search' type="text" placeholder="     Search for restaurant cuisine, chef" name="search"></input>
        </div>
      </div>
    </div>
  );
}
