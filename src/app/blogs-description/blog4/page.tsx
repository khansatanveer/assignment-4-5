import Transition from '@/app/component/transition'
import React from 'react'


export default function blog() {
  return (
<Transition>
    <div >
     
      <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-[30px]">
        <div className="max-w-4xl bg-orange-100 shadow-md rounded-lg p-8">
          <h1 className=" text-[50px] font-extrabold text-black mb-4 text-center">
          Candied Butternut <br/>Squash Galette
          </h1>
          <br/>
          <i> 
           <p className="text-gray-700  text-[30px] mb-6">
           Thanksgiving is just a couple days away! This is the perfect
       
    dish to bring to the table and will leave your guests wanting
        
    more than one serving! It is the perfect combo of sweet and 
    
        
    savory I can not wait for everyone to try it!
           </p>
          </i>
          <br/>
        
  <h2 className=" font-extrabold text-black text-center  text-[50px] mt-4 mb-4">
           Ingredients
  </h2>
      <i>
        <ul>
        <li>1 Butternut Squash</li>        
<li>Cinnamon, Brown Sugar, <br/>Sage, Salt, and Pepper</li>
<li>1/2 White Onion</li>
<li> Goat Cheese ( I used Truffle Goat<br/> Cheese but plain is fine)</li>
<li>Honey</li>
<li>Butter or Olive Oil</li>
<li>Pie Crust (you can make your own or buy one)</li>
<li>Fresh Sage if available near you - <br/>substitute with powdered sage if not!</li>


          </ul>
          </i>
         </div>
         </div>
      </div>
      </Transition>
  );
}




