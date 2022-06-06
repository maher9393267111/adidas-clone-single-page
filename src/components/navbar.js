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


<li className='    group  font-semibold text-[17px]'>

<p

className=' hover:border-b-4 hover:border-indigo-500  duration-200  transition-all '
>{cat.name}</p>


{/* -submenu- */}

<div className='absolute w-[77vw] left-[-334px]  min-h-[300px]   shadow-2xl  bg-white    z-30 hidden  group-hover:block  top-10 transition-all   duration-300'>


{/* ----content-start---- */}


<div className=' container'>


<div>

<ul className=' mt-12 flex justify-between w-[85%] mx-auto'>


{cat.submenu.map(sub => (

<li>
    <p>
    {sub.name}
    </p>


<div>

<ul>

{sub.list.map(item => (<div>

<li className=' text-sm'>
    <p>{item}</p>
</li>



</div>))}


</ul>



</div>




</li>
))}

</ul>


</div>



</div>



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
