import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    // it's called reducers as it contains many reducer functions
    //  removeItem: (state) => {
   //     state.items.pop();
    // }, here removeItem : action and rest part is reducer func

    reducers : {
        addItem: (state,action) => {
            // in vanilla redux or old version redux we can't mutate the state
            // we have to do like : 
            // const newState = {...state};
            // newState.items.push(action.payload);
            // return newState

           //  console.log(state); won't give anything
          //  console.log(current(state)); use this

            // mutating the state here 
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // RTK says either mutatate the existing state or return the new state
            // can do this also return {items : []}
            // whatever we will return that will be put in original state
            
            state.items.length = 0;
            // state.items = 0; won't work
        } 
    }
});

export const {addItem , removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
