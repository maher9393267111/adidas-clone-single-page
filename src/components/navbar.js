import React from "react";
import { categories, categories2 } from "../redux/data";
import { useSelector,useDispatch } from "react-redux";
import { hide_icons,search_products } from "../redux/diff";
import { useState ,  useEffect} from "react";
import Search from '../components/serch'
const Navbar = () => {


  const [fix,setfix] = useState(false);
// if winddow top is modr than 100px  remove fixed

const handlefixed = () => {


    if (window.pageYOffset < 222) {
        document.querySelector(".navbar").classList.add("fixed");
        setfix(true);
        console.log('top is more than 100px');
    } else {
        document.querySelector(".navbar").classList.remove("fixed");
        setfix(false);
        console.log('top is less than 100px');
    }
}

  useEffect(() => {
    window.addEventListener("scroll", handlefixed);
    console.log('executed');

    return () => {
      window.removeEventListener("scroll", handlefixed);
    }
  }, []);



  const dispatch = useDispatch();
  const {liked,cart,hideicons} = useSelector(state => state.global);
  return (
    <div>
      <div className=" h-[80px] top-0 bottom-0 right-0 left-0   bg-white navbar shadow-2xl">
        <div className=" container h-full   ml-6    pb-4  content-end mb-[-6px] grid grid-cols-12">
          {/* -------logo left----- */}

          <div className=" col-span-2">
          
            <div className="  w-[80px] h-[64px]">
              <img
                src="https://cdn0.iconfinder.com/data/icons/logos-21/40/Adidas-256.png"
                alt=""
              />
             
            </div>
          </div>

          {/* middle- */}

          <div className="  col-span-6">
            <div className="flex sm:gap-2  lg:gap-8 ">
              {/* -----1---- */}
              <div className="w-1/2   transform  translate-y-[30px]">
                <ul className=" flex  gap-8">
                {/* {hideicons ? 'true' : 'false' } */}
                  {categories.map((cat) => (
                    <li
                    onMouseEnter={() => {dispatch(hide_icons(true))}}
                    onMouseLeave={() => {dispatch(hide_icons(false))}}
                    
                    
                    className="  hover-list  group  font-semibold text-[17px]">
                      <p className=" hover:border-b-4 hover:border-indigo-500  duration-200  transition-all ">
                        {cat.name}
                      </p>

                      {/* -submenu- */}

                      <div className="absolute w-[77vw] left-[-213px]  min-h-[300px]   shadow-2xl  bg-white    z-30 hidden  group-hover:block  top-10 transition-all   duration-300">
                        {/* ----content-start---- */}

                        <div className=" container">
                          <div>
                            <ul className=" mt-12 flex justify-between w-[85%] mx-auto">
                              {cat.submenu.map((sub) => (
                                <li
                                
                                >
                                  <p
                                 
                                  
                                  >{sub.name}</p>

                                  <div>
                                    <ul>
                                      {sub.list.map((item) => (
                                        <div>
                                          <li className=" text-sm">
                                            <p>{item}</p>
                                          </li>
                                        </div>
                                      ))}
                                    </ul>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* -----2---- */}
              <div>
                <div className="  translate-y-[30px]  ">
                  <div>
                    <ul className="  flex gap-6 ">
                      {categories2.map((cat2) => (
                        <li className=" text-[17px]  group font-semibold">
                          <p
                           onMouseEnter={() => {dispatch(hide_icons(true))}}
                           onMouseLeave={() => {dispatch(hide_icons(false))}}
                          className="  group">{cat2.name}</p>

                          {/* -submenu- */}

                          <div className="absolute w-[77vw] left-[-545px]  min-h-[300px]   shadow-2xl  bg-white    z-30 hidden  group-hover:block  top-10 transition-all   duration-300">
                            {/* ----dontent-start---- */}

                            <div className=" container  mt-12">
                              <div>
                                <ul className=" flex justify-between   w-[80%]  mx-auto  ml-[50px]">
                                  {cat2.submenu.map((sub) => (
                                    <div>
                                      <li>
                                        <p>
                                          {!sub.name == "" ? (
                                            <div>
                                              <div>
                                                <p>{sub.name}</p>
                                              </div>

                                              <div>
                                                <div className="w-[170px]   h-[82px]">
                                                  <img
                                                    className=" w-full  h-full"
                                                    src={sub.image1}
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          ) : (
                                            <div>
                                              <div>
                                                <img src={sub.image1} alt="" />
                                              </div>

                                              {/* -img2-- */}

                                              <div className=" w-[170px]   h-[82px]">
                                                <img
                                                  className=" w-full h-full object-cover"
                                                  src={sub.image2}
                                                  alt=""
                                                />
                                              </div>
                                            </div>
                                          )}

                                          <ul className=" text-center">
                                            {sub.list.map((item) => (
                                              <li>
                                                <p>{item}</p>
                                              </li>
                                            ))}
                                          </ul>
                                        </p>
                                      </li>
                                    </div>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---right---- */}

          <div className="  ml-4  col-span-4">
            {/* -content-- */}

            <div className=" middle-make  transform translate-y-[25px]    flex   gap-6">
              {/* -search input- */}

              <div>
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-[153px] flex items-center pl-2">
                    <button
                      type="submit"
                      classname="p-1 focus:outline-none   left-[66px] focus:shadow-outline"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-6 h-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                  <input

                  onChange = {(e) => {dispatch(search_products(e.target.value))}}
                    type="search"
                    name="q"
                    className="py-2 text-sm text-black    hover:outline-1  hover:outline-black bg-[#e9ecef] rounded-md pl-10 focus:outline-black  "
                    placeholder="Search..."
                    autocomplete="off"
                  />
                </div>
                
{/* -----absolute-start----- */}
<div className=" absolute  top-[50px]   shadow-xl  min-h-[150px]  left-[75px]  z-10 min-w-[200px] bg-white">

  
<div>

  <Search/>
</div>


</div>


              </div>

              {/* --icons- */}

              <div>
                <div className=" flex gap-8  mt-[2px]">
                  {/* usericon */}

                  <div>
                    <p>
                      <img
                        className="w-8 h-8"
                        src="https://cdn2.iconfinder.com/data/icons/business-filled-outline-style-1-set-1/256/6-256.png"
                        alt=""
                      />
                    </p>
                  </div>
                  <div>
                    <p>
                      <img
                        className="w-8 h-8"
                        src="https://cdn1.iconfinder.com/data/icons/shopping-346/24/buy-bag-cart-shop-shopping-256.png"
                        alt=""
                      />

<div>
                        <p className={``}> <i className={` ${cart?.length > 0 ? 'block' : 'hidden'}`}>{cart?.length}  </i></p>
                      </div>



                    </p>
                  </div>
                  <div>
                    <p className=" relative">
                      <img
                        className="w-8 h-8"
                        src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Heart-Love-Like-128.png"
                        alt=""
                      />

                      <div>
                        <p className={``}> <i className={` ${liked.length > 0 ? 'block' : 'hidden'}`}>{liked.length}  </i></p>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
