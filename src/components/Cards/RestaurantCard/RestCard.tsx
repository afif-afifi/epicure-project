

import React from "react";
import {Card, CardImg, CardInfo, RestName, ChefName} from "./Styles";
import { Restaurant_Card } from '../../../constants/interfaces';



const RestCard = function(props:{ res:Restaurant_Card, page:string})  {
  let res = props.res;
  return (
      <Card  page= {props.page}>
          <CardImg im={require(`../../../../${res.img}`)} page= {props.page}> </CardImg>
          <CardInfo>
              <RestName> {res.name} </RestName>
              <ChefName> {res.chef} </ChefName>
          </CardInfo>
      </Card>
  );
};
export default RestCard;