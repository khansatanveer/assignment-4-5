import Image from "next/image";
import image1 from "../app/public/image1.webp";
import image2 from "../app/public/image2.webp";
import image3 from "../app/public/image3.webp";
import image4 from "../app/public/image4.webp";
import image5 from "../app/public/image5.webp";
import image6 from "../app/public/image6.webp";
import Link from "next/link";

export default function blogs() {
  return (
    <div className="bg-green-50 flex justify-center min-h-screen px-4 sm:px-6 lg:px-8  h-auto sm:h-full w-full sm:w-auto">
      <div className="p-5 w-full sm:w-auto">
        <h1 className="text-center font-extrabold text-4xl md:text-5xl lg:text-[60px]  mb-8">
          VEGETARIAN FOOD BLOG
        </h1>
        <br />
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 ">
          {/* Blog 1 */}
          <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden transform transition  hover:scale-105 ">
            <div className="p-10">
              <Image src={image1} alt="image1.webp" layout="responsive" />
              <h2 className="text-2xl font-semibold mb-2"> Eggplant Parm</h2>
              <p className="text-gray-500 mb-4">
                This was my first time trying and making egg
               <br/>
               plant parmesan and let me just say this 
                
                recipe will be used many times. It came so good!
              </p>
            
              <Link href="./blogs-description/blog1">
                <button className="w-full sm:w-auto bg-black text-white hover:text-red-500 font-medium py-2 px-4 rounded-md transition">
                  Read more...
                </button>
              </Link>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 h-auto">
            <div className="p-10">
              <Image src={image2} alt="image2.webp" layout="responsive" />
              <h2 className="text-2xl font-semibold mb-2">Bowl Snacks</h2>
              <p className="text-gray-500 mb-4">
                If you guys know me, you KNOW I go all
             
                out for Super Bowl with boards, sandwiches,
               
                desserts, chips, dips, and more...
              </p>
              <Link href="./blogs-description/blog2">
                <button className="w-full sm:w-auto bg-black text-white hover:text-red-500 font-medium py-2 px-4 rounded-md transition">
                  Read more...
                </button>
              </Link>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 h-auto">
            <div className="p-10">
              <Image src={image3} alt="image3.webp" layout="responsive" />
              <h2 className="text-2xl font-semibold mb-2">Roasted Butternut</h2>
              <p className="text-gray-500 mb-4">
                I absolutely love Risotto! It is one of my
               
                favorite dishes because there are so many
               
                ways to make it. Out of all the risottos...
              </p>
              <Link href="./blogs-description/blog3">
                <button className="w-full sm:w-auto bg-black text-white hover:text-red-500 font-medium py-2 px-4 rounded-md transition">
                  Read more...
                </button>
              </Link>
            </div>
          </div>

          {/* Blog 4 */}
          <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 h-auto">
            <div className="p-10">
              <Image src={image4} alt="image4.webp" layout="responsive" />
              <h2 className="text-2xl font-semibold mb-2">Candied Butternut</h2>
              <p className="text-gray-500 mb-4">
                Thanksgiving is just a couple days away!
               
                This is the perfect dish to bring to the table
               
                and leave your guests wanting more...
              </p>
              <Link href="./blogs-description/blog4">
                <button className="w-full sm:w-auto bg-black text-white hover:text-red-500 font-medium py-2 px-4 rounded-md transition">
                  Read more...
                </button>
              </Link>
            </div>
          </div>

          {/* Blog 5 */}
          <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 h-auto">
            <div className="p-10">
              <Image src={image5} alt="image5.webp" layout="responsive" />
              <h2 className="text-2xl font-semibold mb-2">Soups & Stews</h2>
              <p className="text-gray-500 mb-4">
                It is officially that time of year... FALL!
               
                Even if South Floridas weather doesnot
              
                drop until December, it is Fall in my heart.
              </p>
              <Link href="./blogs-description/blog5">
                <button className="w-full sm:w-auto bg-black text-white hover:text-red-500 font-medium py-2 px-4 rounded-md transition">
                  Read more...
                </button>
              </Link>
            </div>
          </div>

          {/* Blog 6 */}
          <div className="bg-orange-100 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 h-auto">
            <div className="p-10">
              <Image src={image6} alt="image6.webp" layout="responsive" />
              <h2 className="text-2xl font-semibold mb-2">Toasted Pine-nut</h2>
              <p className="text-gray-500 mb-4">
                It is officially Fall! Even though the weather
                
                wonnt drop until December, it is time for
               
                seasonal flavors and cozy dishes.
              </p>
              <Link href="./blogs-description/blog6">
                <button className="w-full sm:w-auto bg-black text-white hover:text-red-500 font-medium py-2 px-4 rounded-md transition">
                  Read more...
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
