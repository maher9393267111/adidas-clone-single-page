import React from 'react';
import {Seeproducts} from '../redux/data';
import Seedcard from './seedcard';
const Seenproducts = () => {
    return (
        <div className='   pb-20 mt-12'>

<div  className='  '>



<div className=' flex g grid-cols-12   flex-wrap gap-6  sm:ml-28 lg:ml-20'>

{Seeproducts.map((product,index)=>{

return  (
<div className=' sm:col-span-3 lg:col-span-4'>

<Seedcard  product={product}/>


</div>


)} )}



</div>




</div>


            
        </div>
    );
}

export default Seenproducts;
