import styled from "styled-components";

export const Card = styled.div<{ page:string }>`
display: flex;
flex-direction: column;
gap:0;
width: ${props => props.page === "home" ? "15.313rem" : "20.875rem"}
`
export const CardImg = styled.div<{ im:string, page:string  }>`
background-image: url(${(props) => props.im});
background-repeat: no-repeat;
background-position: center;
background-attachment: local;
/*height: 9.488rem;*/
height: ${props => props.page === "home" ? "9.488rem" : "12.938rem"}
`
export const CardInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem;
gap: 0.625rem;
background: #F9F4EA;
`
export const RestName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 1.125rem;
line-height: 1.313rem;
letter-spacing: 0.167rem;
color: #000000;
`
export const ChefName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 1rem;
line-height: 1.25rem;
letter-spacing: 0.123rem;
color: #000000;
`

// .card2 {
//     /* margin-top: 70px; */
//     position: absolute !important;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     padding: 0px;
//     gap: 24px;
//     background: #F9F4EA !important;
//     width: 354px;
//     height: 232.8px;
//     left: 20px;
//     top: 408px;
//     overflow-x: scroll;
// }

// .card-title {
//     margin-bottom: var(--bs-card-title-spacer-y);
//     /* position: absolute; */
//     margin-top: 40px;
//     /* width: 326px; */
//     height: 24px;
//     left: 20px;
//     font-style: normal;
//     font-weight: 200;
//     font-size: 18px;
//     line-height: 24px;
//     letter-spacing: 1.25px;
//     text-transform: uppercase;
//     color: #000000;
// }

// .card-text {
//     max-width: 100%;
// }

// /* .Card.Body {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 16px;
//     gap: 10px;

//     width: 245px;
//     height: 81px;

//     background: #F9F4EA;
// } */

// /* .card-text{
//     padding-left: 15px !important;
// } */
// .carousel-indicators {
//     display: none !important;
// }

// .icon {

//     /* width: 46.42px;
//     height: 35.98px; */
//     flex: none;
//     order: 0;
//     flex-grow: 0;
// }

// .icon-Col {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 0px;
//     gap: 32px;

//     width: 136px;
//     height: 102.98px;
// }
// .icons-sec{
//     display: flex;
//     flex-direction: column;
//     align-items: center;

// }
// .link{
//     color: #000 !important;
//     text-decoration: none !important;
//     position: relative;
//     top: 10px;

// }