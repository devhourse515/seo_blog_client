import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import wishlistReducer from "./wishlistReducer";
import shopReducers from "./shopReducers";

const rootReducer = combineReducers({
  cartReducer,
  wishlistReducer,
  shopReducers,
  orderReducer,
});

export default rootReducer;
