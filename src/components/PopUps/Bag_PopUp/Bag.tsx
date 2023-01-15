import React from 'react';
import { IMAGES} from '../../../assets';
import {PopupBox, Box} from './styles'

const Bag = function () {
  return (
    <PopupBox>
        <Box>
            <img src={IMAGES.bag} alt="bag"></img>
            <img src={IMAGES.empty_bag} alt="empty_bag"></img>
        </Box>
    </PopupBox>
  );
};

export default Bag;