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




    // state.likded = [...state.likded, action.payload];
    // console.log(state.likded);
    // console.log('likded',state.likded);

    // // if  action.payload.id in state.likded remove it
    // // else add it



    // const filterliked = state.likded.filter(
    //   (item) => item.id !== action.payload
    // );

    // state.likded = filterliked;

        
    
    },

  
},



});

// Action creators are generated for each case reducer function
export const {

  liked_products
  

 
} = diffSlice.actions;

export default diffSlice.reducer;