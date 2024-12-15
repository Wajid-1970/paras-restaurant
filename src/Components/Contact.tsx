import Link from "next/link";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

export default function Contact () {
    return (
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <label className="block text-sm font-medium hover:text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="border rounded-md p-2 w-full mb-4"
            placeholder="Your Name"
          />
  
          <label className="block text-sm font-medium hover:text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="border rounded-md p-2 w-full mb-4"
            placeholder="your@email.com"
          />
  
          <label className="block text-sm font-medium hover:text-gray-700 mb-2">Message</label>
          <textarea
            className="border rounded-md p-2 w-full mb-4"
            placeholder="Your message here"
            rows={4}
          ></textarea>
  
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }