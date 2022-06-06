import React from 'react';
import { categories } from '../redux/data';
const Navbar = () => {
    return (
        <div>
            
<div className=' h-[80px]    shadow-2xl'>

<div className=' container h-full  ml-6  pb-4  content-end mb-[-6px] grid grid-cols-12'>

{/* -------logo left----- */}

<div className=' col-span-3'>
    
<div
className='  w-[80px] h-[64px]'
>
    <img src="https://cdn0.iconfinder.com/data/icons/logos-21/40/Adidas-256.png" alt="" />
</div>

</div>





{/* middle- */}

<div className='  col-span-6'>
    
<div

className='flex  gap-12 '
>

{/* -----1---- */}
<div className='w-1/2   transform  translate-y-[30px]'>


<ul className=' flex  gap-8'>

{categories.map(cat => (


<li className='  group  font-semibold text-[17px]'>

<p>{cat.name}</p>


{/* -submenu- */}

<div className='absolute w-[30vw]  right-0 min-h-[300px]   shadow-2xl  bg-slate-300 hidden  group-hover:block '>




</div>



</li>) )}



</ul>




</div>

{/* -----2---- */}
<div>
    2
</div>




</div>



</div>




{/* ---right---- */}

<div className='  col-span-3'>
    3
</div>


</div>




</div>


        </div>
    );
}

export default Navbar;
