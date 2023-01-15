import React from 'react';
import { Container, Icons_Container, Icon, Main_Text } from './styles';
import {icons_img} from '../../assets';
function Signatures() {
    return (
        <Container>
            <Main_Text>Signature Dish Of:</Main_Text>
            <Icons_Container>
                <Icon><img src={icons_img.SpicySmall}/> Spicy </Icon>
                <Icon><img src={icons_img.VegetarianSmall}/> Vegitarian </Icon>
                <Icon><img src={icons_img.VeganSmall}/> Vegan </Icon>
            </Icons_Container>
        </Container>
    );
}

export default Signatures;