import { createSlice } from "@reduxjs/toolkit";

export const diffSlice = createSlice({
  name: "difference",
  initialState: {

togglemodal:false,
open:false,
message:'message from redux',
change:false,
obj:{},
arr:[],
id:'',
cart:[],
liked:[],
islikde:false,
hideicons:false,




   
  },

  reducers: {
  liked_products: (state, action) => {
 
// check if the product is already in the liked products

const is_already_liked = state.liked.find(item => item === action.payload);

if (is_already_liked) {

  state.liked = state.liked.filter(item => item !== action.payload);
console.log('remove item-->',state.liked);
// return { ...state, liked: state.liked };
}

if (!is_already_liked) {
state.liked.push(action.payload);
console.log('add item-->',state.liked);

}



        
    
    },

    hide_icons: (state, action) => {
      state.hideicons = action.payload;
    }

  
},



});

// Action creators are generated for each case reducer function
export const {

  liked_products,
  hide_icons
  

 
} = diffSlice.actions;

export default diffSlice.reducer;