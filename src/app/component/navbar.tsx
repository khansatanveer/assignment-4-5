import Link from "next/link";
import Transition from "./transition";
export default function  header(){
    return(
    <Transition>
      <nav className="bg-gray-700 text-white  py-1 px-1"> 
    
 <div  className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"> 
     <div className="w-full sm:w-auto mb-0 sm:mb-0"> 
      <ul  className=" flex flex-row sm:flex-row  space-y-3 sm:space-y-0 sm:space-x-5">
      <li className="text-white hover:text-red-400  p-6 sm:p-6  font-semibold">   <Link href='../home' > Home     </Link> </li>
      <li className="text-white hover:text-red-400  p-3 sm:p-6  font-semibold">   <Link href='../about'  >About     </Link>  </li> 
      <li className="text-white hover:text-red-400  p-3 sm:p-6  font-semibold">   <Link href='../contact'  >Contact</Link>  </li> 
      </ul> 
      </div> 
    <p className="text-sm  flex flex-row sm:flex-row  space-y-1 sm:space-y-0 sm:space-x-3">
      khansatanveer00@gmail.com   </p>
      </div> 
       
        </nav>
    </Transition>
    );
  };
    // 