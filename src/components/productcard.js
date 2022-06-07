import React from 'react';
import {useState,useEffect} from 'react';
import { liked_products } from '../redux/diff';
import {useDispatch,useSelector} from 'react-redux';
const Productcard = ({product}) => {

    const dispatch = useDispatch();
    const  {liked} = useSelector(state => state.global);

const [currentimage,setCurrentimage] = useState(0);
const [currentindex,setCurrentindex] = useState(0);

    return (
        <div className=' card card-wrapper sm:h-[300px] lg:h-auto    '>
        
<div className=' h-full'>
 
<p>{liked?.length}</p>
{/* -image- */}


<div className=' w-full   h-2/3'>

<img

onMouseEnter={() => { setCurrentindex(1);  }}

onMouseLeave={() => { setCurrentindex(0);  }}
className=' w-full h-full  object-bottom  group  img-hover  '

src={product.images[currentindex]} alt="" />

<div  className=' relative'>
    <h1 className=' absolute top-[-27px] price  z-20    bg-white  w-[66px] text-center    font-bold  ml-[4px]'>
        {product?.price}$    </h1>


        {/* heart-icon */}
    
<div className=' absolute sm:top-[-186px]  lg:top-[-285px]  right-[16px]'>
    <img
    onClick={() => {dispatch(liked_products(product.id));}}
    className=' w-6 h-6'
    src="https://cdn0.iconfinder.com/data/icons/business-office-1-7/55/35-256.png" alt="" />
</div>

</div>
</div>




{/* ----info div-- */}


<div>


{/* --small images-- */}

<div className=' flex'>

{product.images.map((image, index) => {

return (

<div
className='  hover: border-b-2  hover:border-b-black'
onMouseEnter={() => { setCurrentindex(index);  }}

onMouseLeave={() => { setCurrentindex(index);  }}
>
    <img 
    
    
    className={` ${index == 1 ? 'hidden' : ''}  w-14 h-14  `}  src= { image}  alt="" />
</div>

)})}




</div>



</div>




</div>


            
        </div>
    );
}

export default Productcard;
