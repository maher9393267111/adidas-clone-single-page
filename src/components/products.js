import React from 'react';
import {products} from '../redux/data';
import Productcard from './productcard';

const Products = () => {
    return (
        <div  className=' ml-12'>
        
<div>


{/* -header */}

<div className=' flex  justify-between'>

    {/* -left */}

<div>
    <h1 className=' text-xl'>Adidas Products</h1>
</div>

{/* -right- */}

<div>

<div  className=' gap-4 flex p-2' >

<h1 className=' text-[16px] ml-2'>Filterle ve sirala</h1>
<span
className=' mr-2'
>
    <img
    className='w-8 h-8'
    src="https://cdn2.iconfinder.com/data/icons/250-perfect-vector-pictograms/48/5.11-256.png" alt="" />
</span>



</div>


</div>


</div>



{/* ---all products- */}


<div className=' mt-12  pb-20'>

<div  className='  grid  grid-cols-12  gap-4'>

    {products.map((product, index) => {

return (

<div className='  sm:col-span-6  lg:col-span-3'>
    <Productcard product={product}/>
</div>


) })}
</div>




<div>





</div>






</div>





</div>



        </div>
    );
}

export default Products;
