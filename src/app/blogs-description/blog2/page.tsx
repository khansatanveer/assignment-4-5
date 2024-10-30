import Transition from '@/app/component/transition';
import React from 'react'


export default function blog() {
  return (
    <Transition>
    
     <div >
      <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-[30px]">
        <div className="max-w-4xl bg-orange-100 shadow-md rounded-lg p-8">
          <h1 className=" text-[50px] font-extrabold text-black mb-4 text-center">
          Super Simple Super Bowl Snacks
          </h1>
          <br/>
          <i> 
           <p className="text-gray-700  text-[30px] mb-6">
             If you guys know me, you KNOW I go all out for Super bowl,
      
         i am talking two boards, sandwiches, desserts, chip station,
      
        dips, and a full bar. So without further ado my two biggest
        
          hits at every sport party; my Corn Ricotta Dip, and my cheesy 
          
        monkey  bread.  Tag me if you make it! @vegetarianfoodbloggg
     
           </p>
          </i>
          <br/>
        
  <h2 className=" font-extrabold text-black text-center  text-[50px] mt-4 mb-4">
           Ingredients
  </h2>
      <i>
          <ul className="list-disc list-inside text-[30px]  text-gray-700 space-y-2">
         < li> Two Cans of Biscuits</li>
          <li>1 bag Shredded Mexican Cheese</li>
          <li>  1 Stick Butter</li>

          <li> Salt, Pepper, Garlic Powder, Oregano, <br/>
          Onion Powder, Rosemary, and Fresh Basil</li>

          </ul>
          </i>
         </div>
         </div>
      </div>
      
    </Transition>
  );
}



