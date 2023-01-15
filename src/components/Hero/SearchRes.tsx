import React from 'react';
import { InputContainer, Category, Item, DataResult, Container } from './Styles';
import { Restaurant_Card } from '../../constants/interfaces';
import { Link } from "react-router-dom";

const SearchRes = function (props: { rests: Restaurant_Card[], cuisines: Restaurant_Card[] }) {
  const rests = props.rests;
  const cuisines = props.cuisines;
  return (
    <Container>
      <InputContainer>
        {rests.length != 0 && (
          <DataResult>
            <Category> Restaurants: </Category>
            {rests.map((value: Restaurant_Card, key: any) => {
              return (
                <Item key={key}>
                  <Link to="/restaurants">{value.name} </Link>
                </Item>
              );
            })}
              <Category> Cuisines: </Category>
              {cuisines.map((value: Restaurant_Card, key: any) => {
                return (
                  <Item key={key}>
                    <Link to="/restaurants">{value.name} </Link>
                  </Item>
                );
              })}
          </DataResult>
        )}
      </InputContainer>
      </Container>
  );
}
export default SearchRes;
