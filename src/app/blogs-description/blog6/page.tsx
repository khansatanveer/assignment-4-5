


import React from 'react'

import Transition from '@/app/component/transition';

export default function blog() {
  return (
<Transition>
    <div >
      
      <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-[30px]">
        <div className="max-w-4xl bg-orange-100 shadow-md rounded-lg p-8">
          <h1 className=" text-[50px] font-extrabold text-black mb-4 text-center">
          Toasted Pine-nut <br/>&<br/> Raisin Couscous
          </h1>
          <br/>
          <i> 
           <p className="text-gray-700  text-[30px] mb-6">
           love this side dish so much! It pairs so perfectly with
     
     my garlicky green beans, or in a roasted stuffed tomato!
         
     I have made it numerous times and it was definitely    
        
     inspired from the couscous I had in my favorite      
       
     restaurant in Naples called Mediterrano.   
           </p>
          </i>
          <br/>
        
  <h2 className=" font-extrabold text-black text-center  text-[50px] mt-4 mb-4">
           Ingredients
  </h2>
      <i>
          <ul className="list-disc list-inside text-[30px]  text-gray-700 space-y-2">
         <li>Pearl Couscous </li>
          <li>Raisins</li>
          <li> Pine-nuts</li>

          <li> Minced Garlic</li>
          <li>Vegetable Broth</li>

          <li>Thyme, Cumin, Salt,<br/>2 Pepper & Olive Oil</li>
          </ul>
          </i>
         </div>
         </div>
      </div>
      </Transition>
  );
}



