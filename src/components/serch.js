import React from 'react';
import { products } from '../redux/data';
import { useEffect,useState } from 'react';
import { fetch_all_products } from '../redux/diff';
import { useDispatch,useSelector } from 'react-redux';
const Serch = () => {

const {allproducts,searchingproducts} = useSelector(state=>state.global);

const dispatch = useDispatch();
useEffect(() => {

    dispatch(fetch_all_products(products));
    console.log('products-->',allproducts);


}, [])

    return (
        <div>
            {searchingproducts.map(item => {

return (

    <div>

       <div>
           
           <img  className=' w-8 h-8' src={item.images[0]} alt="" />
           
           </div> 
           <div>
               <p>{item.name}</p>
           </div>

    </div>
)})}
        </div>
    );
}

export default Serch;
