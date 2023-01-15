import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DishCard_interface} from '../../../constants/interfaces';
import {Card, CardImg} from "../RestaurantCard/Styles";
import { CardInfo, Info, Name, Price } from './Styles';
import { icons_img } from '../../../assets/index';

const DishCard = function(props:{ dish:DishCard_interface , page:string})  {
    const dish = props.dish;
    return (
        <Card page= {props.page}>
            <CardImg im={require(`../../../../${dish.img}`)} page= {props.page}> </CardImg>
            <CardInfo>
                <Info>
                    <Name>{dish.name}</Name>
                    {dish.content}
                </Info>
                <img src={require(`../../../../${dish.icon}`)}/>
                <Price>
                    <img src={icons_img.Shekel}/>
                    {dish.price}
                </Price>
            </CardInfo>
    </Card>
    );
};
export default DishCard;

