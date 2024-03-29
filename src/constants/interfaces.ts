export interface Restaurant_Card {
    img: string,
    name: string,
    chef: string,
    opening_hour: number,
    closing_hour: number,
    new: boolean,
    popular: boolean
  }
  
  export interface Chefs_interface {
    img: string,
    name: string,
    about: string,
    new: boolean,
    most_viewd: boolean,
    top_chef: boolean,
  }
  
  export interface DishCard_interface {
    img: string,
    name: string,
    content: string,
    icon: string,
    price: number,
    popular: boolean,
    topchef_dish: boolean,
  }