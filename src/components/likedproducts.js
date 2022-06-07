import React from 'react';
import {products} from '../redux/data';
import { useDispatch,useSelector } from 'react-redux';

const Likedproducts = () => {

const dispatch = useDispatch();
const {liked} = useSelector(state=>state.global);

// filter liked products from all products
const likedproducts = products.filter(item => liked.includes(item.id));
console.log('liked products-->',likedproducts);


    return (
        <div>
            <h1 className='text-sm  font-bold  text-center'>Likedproducts</h1>


<div>

<div>


{likedproducts.map(item => {

return (

<div className=' mb-2 flex gap-4'>


<div>
    <img 
    
    className=' w-8 h-8'
    src={item.images[0]} alt="" />
</div>


<div className=' text-[9px]  self-center'>
    <p>{item.name}</p>
</div>


</div>


)})}

</div>





</div>


        </div>
    );
}

export default Likedproducts;
