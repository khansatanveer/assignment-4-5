import Transition from '@/app/component/transition'
import React from 'react'


export default function blog() {
  return (
<Transition>
    <div >
      
      <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-[30px]">
        <div className="max-w-4xl bg-orange-100 shadow-md rounded-lg p-8">
          <h1 className=" text-[50px] font-extrabold text-black mb-4 text-center">
          Eggplant Parm
          </h1>
          <br/>
          <i> 
           <p className="text-gray-700  text-[30px] mb-6">
           
      This was my first time trying and making eggplant 
        
        parmesan and let me just say this recipe will be used
       
         many times it came out so good! It did take me a bit of
        
          time to make but it was 100% worth it.  In this recipe 
         
          we make it alll ourselves 
           </p>
          </i>
          <br/>
        
  <h2 className=" font-extrabold text-black text-center  text-[50px] mt-4 mb-4">
           Ingredients
  </h2>
      <i>
          <ul className="list-disc list-inside text-[30px]  text-gray-700 space-y-2">
<li> One Eggplant</li>        

<li>5 Slices of Old Bread (optional if you want to make your own breadcrumbs)</li>

<li>Flour</li>

<li>2 Eggs</li>

<li>Oregano, Basil, Salt, Pepper, Garlic Powder, and Dried Basil</li>

<li>Two Mozzarella Balls</li>

<li>Two Cans of Tomatoes (whole peeled)</li>

<li>Olive Oil</li>

<li>Parmesan </li>
<li>  1 Yellow Onion</li>

<li>5-6 Cloves of Garlic</li>

<li>Fresh Basil </li>
          </ul>
          </i>
         </div>
         </div>
      </div>
      </Transition>
  );
}
