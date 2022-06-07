import React from 'react';
import { products } from '../redux/data';
import { useEffect,useState } from 'react';
import { fetch_all_products, clear_search_products } from '../redux/diff';
import { useDispatch,useSelector } from 'react-redux';
const Serch = () => {

const {allproducts,searchingproducts} = useSelector(state=>state.global);

const dispatch = useDispatch();
useEffect(() => {

    dispatch(fetch_all_products(products));
    console.log('products-->',allproducts);


    // if  all products.length ===  searching saerchingproduct.length  === 0

    if (allproducts.length ===  searchingproducts?.length  ) {
        dispatch(clear_search_products());
    }


}, [])

    return (
        <div>
            {searchingproducts.map(item => {

return (

    <div className=' flex gap-4 font-bold'>

       <div>
           
           <img  className=' w-8 h-8' src={item.images[0]} alt="" />
           
           </div> 
           <div className='   self-center'>
               <p>{item.name}</p>
           </div>

    </div>
)})}
        </div>
    );
}

export default Serch;
