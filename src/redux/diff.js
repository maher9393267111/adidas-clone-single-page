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




   
  },

  reducers: {
    open_modal: (state, action) => {
 
        state.togglemodal = true;
        
    
    },

  
},



});

// Action creators are generated for each case reducer function
export const {

    open_modal,
  

 
} = diffSlice.actions;

export default diffSlice.reducer;