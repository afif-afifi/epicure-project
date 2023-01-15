import { Restaurant_Card } from "../constants/interfaces";

export default function RestaurantsFilter(restaurants:Restaurant_Card[], filter:string){
  if(filter === "new"){
    const FilterdList = restaurants.filter((value:Restaurant_Card) => {
        return value.new === true;
      });
      return FilterdList;
  }
  else if(filter === "popular"){
    const FilterdList = restaurants.filter((value: Restaurant_Card) => {
        return value.popular === true;
      });
      return FilterdList;
  }
  else if(filter === "open_now"){
    const today = new Date();
    const time = today.getHours();
    const FilterdList = restaurants.filter((value: Restaurant_Card) => {
      return value.opening_hour <= time && value.closing_hour>= time;
    });
    return FilterdList;
  }
  if(filter === "all" ){return restaurants;}
}