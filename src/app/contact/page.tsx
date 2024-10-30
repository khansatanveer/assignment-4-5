import Transition from "../component/transition";

export default function ContactPage() {
    return (
      <Transition>
     <div className="min-h-screen max-w-full   bg-green-50  flex items-center justify-center">
         <div className="container mx-auto p-8 w-[800px]   max-w-auto h-[600px]  bg-amber-100 shadow-md rounded-lg"> 
          <h1 className="text-2xl font-extrabold text-center mb-6">Contact Us</h1>
  
          <form className="space-y-4">
            {/* add Name  */}
            <div>
              <div  className="block text-sm font-medium text-black">
                Name
              </div>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
<br/>  
            {/*  add Gmail */}
            <div>
              <div  className="block text-sm font-medium text-black">
                Gmail
              </div>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
  <br/>
  <br/>
            {/*  add Message  */}
            <div>
              <div className="block text-sm font-medium text-black">
                Message
              </div>
              <textarea
                id="message"
                rows={5}
                placeholder="Your Message..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
     </div>
     </Transition>
    );
  }
  