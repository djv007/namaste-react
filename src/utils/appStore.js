// configuring store is a redux job so coming from reduxjs lib
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appstore = configureStore(
{
    // known as reducer as it is a reducer of the whole app which 
    // have other slice reducers
    reducer: {
        cart : cartReducer,
    }
}
);

export default appstore;