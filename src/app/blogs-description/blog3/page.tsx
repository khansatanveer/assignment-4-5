

import React from 'react'
import Head from 'next/head';
import Transition from '@/app/component/transition';

export default function blog() {
  return (
 <Transition>
    <div >
      <Head>
        <title>Roasted Butternut Squash<br/> &<br/> Sage Risotto </title>
        <meta name="description" />
      </Head>
      <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-[30px]">
        <div className="max-w-4xl bg-orange-100 shadow-md rounded-lg p-8">
          <h1 className=" text-[50px] font-extrabold text-black mb-4 text-center">
          Roasted Butternut Squash<br/> &<br/> Sage Risotto 
          </h1>
          <br/>
          <i> 
           <p className="text-gray-700  text-[30px] mb-6">
             I absolutely love Risotto! It is one of my favorite dishes to

    make because there are so many ways to make it. Out of all the   

    risotto combinations, this one is definitely my favorite! The    

    squash and sage being roasted beforehand enhance theflavor so 

    much.Let me know if you try it and do not forget 

           </p>
          </i>
          <br/>
        
  <h2 className=" font-extrabold text-black text-center  text-[50px] mt-4 mb-4">
           Ingredients
  </h2>
      <i>
          <ul className="list-disc list-inside text-[30px]  text-gray-700 space-y-2">
          <li> 1/2 Butternut Squash </li>  

<li> Fresh Sage Leaves </li>  

<li>   1/2 Yellow Onion</li> 

<li>   4 Cloves of Garlic</li> 

<li>   1 1/2 cup Arborio Rice</li>

<li> 1 Box Vegetable Broth </li> 

<li>  Salt, Pepper, Garlic Powder, Thyme, Brown Sugar, and Cumin </li> 

<li> Olive Oil </li>  
          </ul>
          </i>
         </div>
         </div>
      </div>
     </Transition>
  );
}



