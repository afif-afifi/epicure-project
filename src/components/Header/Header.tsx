import { icons_img } from '../../assets/index';
import { useState } from "react";
import { BurgerPop, SearchPop, BagPop } from '../PopUps/index'
import { Link } from "react-router-dom";
import { Navbar, Button, RightSide, Logo, Burger } from './styles';
import React from 'react';

function MobileHeader() {

  const [isOpen_burger, setIsOpen_burger] = useState(false);

  const togglePopup_burger = () => {
    setIsOpen_bag(false);
    setIsOpen_burger(!isOpen_burger);
  }

  const [isOpen_search, setIsOpen_search] = useState(false);

  const togglePopup_search = () => {
    setIsOpen_bag(false);
    setIsOpen_search(!isOpen_search);
  }
  
  const [isOpen_bag, setIsOpen_bag] = useState(false);

  const togglePopup_bag = () => {
    setIsOpen_bag(!isOpen_bag);
  }

  return (
    <>

      <Navbar>
        <Burger><img src={icons_img.burger} alt="burger" onClick={togglePopup_burger} /></Burger>
        {isOpen_burger && <BurgerPop
          handleClose={togglePopup_burger}
        />}

        <Logo> <Link to='/'>
            <img src={icons_img.logo} alt="user" />
          </Link> </Logo>

        <RightSide>
          <Button><img src={icons_img.search} alt="search" onClick={togglePopup_search} /></Button>
          {isOpen_search && <SearchPop
            handleClose={togglePopup_search}
          />}

          <Button  > <Link to='/'>
            <img src={icons_img.user} alt="user" />
          </Link></Button>


          <Button><img src={icons_img.bag} alt="bag" onClick={togglePopup_bag} /></Button>
          {isOpen_bag && <BagPop/>}

        </RightSide>


      </Navbar>

    </>

  );
}

export default MobileHeader;