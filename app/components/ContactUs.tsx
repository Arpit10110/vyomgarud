import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const ContactUs = () => {
      useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div id='contact' className="w-full py-10 px-4 flex justify-center items-center">
      <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"   className="w-full max-w-4xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h2 data-aos="fade-up" data-aos-duration="3000" className="text-4xl font-bold text-center text-white mb-2">Get in Touch</h2>
        <p data-aos="fade-up" data-aos-duration="3000" className="text-gray-400 text-center mb-10">We'd love to hear from you. Fill out the form below.</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your name "
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all duration-200"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="Enter your phone no."
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
            <textarea 
              id="message" 
              rows={5}
              placeholder="Your message here..."
              required
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all duration-200 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
