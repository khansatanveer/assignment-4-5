import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import Transition from "./transition";

export default function Footer() {
  return (
    <Transition>
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <Link
            href="https://facebook.com"
            className="hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://youtube.com"
           
            className="hover:text-red-500"
          >
            <FaYoutube size={24} />
          </Link>
          <Link
            href="https://instagram.com"
            
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </Link>
        </div>

        {/* Gmail Address */}
        <p className="text-sm">Email:khansatanveer00@gmail.com</p>

       
      </div>
    </footer>
    </Transition>
  );
}