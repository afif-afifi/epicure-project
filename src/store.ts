import { configureStore } from '@reduxjs/toolkit';
import {
  restaurantsReducer,
  dishesReducer,
  chefsReducer,
  CuisinesReducer
} from './slicer';

export default configureStore({
  reducer: {
      restaurants: restaurantsReducer,
      dishes: dishesReducer,
      chefs: chefsReducer,
      cuisines: CuisinesReducer,
  },
  
})