import { useState } from 'react';
import { Restaurant_Card} from '../../constants/interfaces'
import { useSelector } from 'react-redux';
import {IMAGES, icons_img} from '../../assets';
import React from 'react';
import { Container, TextBlock, SearchBox, Input} from './Styles';
import SearchRes from './SearchRes';





function Hero () {
  const [filter_restaurants, setFilter_restaurants] = useState([]);
  const [filter_cuisines, setFilter_cuisines] = useState([]);
  const [word, setWord] = useState("");
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const cuisines = useSelector((state: any) => state.cuisines.value);

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWord(searchWord);
    const newFilter__restaurants = restaurants.filter((value: Restaurant_Card) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    const newFilter_cuisines = cuisines.filter((value: Restaurant_Card) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilter_restaurants([]);
      setFilter_cuisines([]);
    } else {
      setFilter_restaurants(newFilter__restaurants);
      setFilter_cuisines(newFilter_cuisines);
    }
  };

  return(
    <>
    <Container>
        <TextBlock>
          <img src={IMAGES.hero} alt='hero' />
            <SearchBox>
              <img src={icons_img.search} alt="search" />
              <Input
                type="text" placeholder="Search for restaurant cuisine, chef"
                value={word}
                onChange={handleFilter}
              /></SearchBox>
          </TextBlock>
          </Container>
          <SearchRes
           rests ={filter_restaurants}
           cuisines ={filter_cuisines}
          />
    </>
    
    
  );
}
export default Hero;