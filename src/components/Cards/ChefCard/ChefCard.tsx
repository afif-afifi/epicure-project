import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DishCard_interface} from '../../../constants/interfaces';
import {Card, CardImg} from "../RestaurantCard/Styles";
import {CardInfo} from './Styles';

const ChefCard = function(props:{ dish:DishCard_interface,  page:string})  {
    let dish = props.dish;
    return (
        <Card page= {props.page}>
            <CardImg im={require(`../../../../${dish.img}`)} page= {props.page}></CardImg>
            <CardInfo> {dish.name} </CardInfo>
        </Card>
    );
};
export default ChefCard;