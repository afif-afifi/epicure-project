import React from 'react';
import { Container, About, Titel } from './Styles';
import { icons_img } from '../../assets/index';
function about() {
    return (
        <Container>
            <img src={icons_img.logo} />
            <img src={icons_img.iphoneAndroid} />
            <About>
                <Titel>About us:</Titel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a  lacus vel justo fermentum bibendum non
                eu ipsum. Cras porta malesuada eros, eget blandit
                turpis suscipit at.  Vestibulum sed massa in magna sodales porta. Vivamus elit urna,
                dignissim a vestibulum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
                eu ipsum. Cras porta malesuada eros.
            </About>
        </Container>
    );
}

export default about;