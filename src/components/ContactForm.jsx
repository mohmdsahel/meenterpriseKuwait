import { useState } from "react";

const ContactForm = ({ onSubmit, onClose, showModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 sm:p-4 backdrop-blur-sm overflow-y-auto">


      {/* Updated background gradient and border color to use dark background and light green */}
      <div className="relative w-full max-w-md p-4 sm:p-6 rounded-[1.5rem] bg-gradient-to-br from-color-4/90 to-color-4/70 border border-color-7/20 backdrop-blur-xl my-4">
        <button
          // Updated close button color to white with lower opacity
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-color-1/60 hover:text-color-1"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Updated title color to white and accent color to vibrant green (color-3) */}
        <h4 className="text-center mb-3 sm:mb-4 h4 text-lg sm:text-xl text-color-1">
          GET IN <span className="text-color-2">TOUCH</span>
        </h4>

        <form onSubmit={onSubmit} className="space-y-2 sm:space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="w-full">
              {/* Updated label color to white with lower opacity */}
              <label className="block text-color-1/70 mb-1 text-xs">Your Name*:</label>
              <input
                type="text"
                required
               
                // Updated input styles to use dark background, white text, and light green focus border
                className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-color-4/50 border border-color-7/10 focus:border-color-7 outline-none text-color-1 text-xs sm:text-sm"
              />
            </div>
            <div className="w-full">
                    {/* Updated label color to white with lower opacity */}
                    <label className="block text-color-1/70 mb-1 text-xs">Your Email*:</label>
                    <input
                      type="email"
                      required
                     
                      // Updated input styles to use dark background, white text, and light green focus border
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-color-4/50 border border-color-7/10 focus:border-color-7 outline-none text-color-1 text-xs sm:text-sm"
                    />
                  </div>
                  <div className="w-full">
                    {/* Updated label color to white with lower opacity */}
                    <label className="block text-color-1/70 mb-1 text-xs">Your Phone Number:</label>
                    <input
                      type="tel"
                    
                      // Updated input styles to use dark background, white text, and light green focus border
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-color-4/50 border border-color-7/10 focus:border-color-7 outline-none text-color-1 text-xs sm:text-sm"
                    />
                  </div>
                  <div className="w-full">
                    {/* Updated label color to white with lower opacity */}
                    <label className="block text-color-1/70 mb-1 text-xs">Your Organization:</label>
                    <input
                      type="text"
                  
                      // Updated input styles to use dark background, white text, and light green focus border
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-color-4/50 border border-color-7/10 focus:border-color-7 outline-none text-color-1 text-xs sm:text-sm"
                    />
                  </div>

                </div>

                <div className="w-full">
                  {/* Updated label color to white with lower opacity */}
                  <label className="block text-color-1/70 mb-1 text-xs">Your Interest In:</label>
                  <select
                    
                    // Updated select styles to use dark background, white text, light green focus border, and dark option background
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-color-4/50 border border-color-7/10 focus:border-color-7 outline-none text-color-1 text-xs sm:text-sm [&>option]:bg-color-4"
                  >
                    <option value=""></option>
                    <option value="1">Attending</option>
                    <option value="2">Sponsoring/Exhibiting</option>
                    <option value="3">Speaking</option>
                    <option value="4">Other</option>
                  </select>
                </div>




                <div className="w-full">
                  {/* Updated label color to white with lower opacity */}
                  <label className="block text-color-1/70 mb-1 text-xs">Message:</label>
                  <textarea
                    rows="2"
                    
                    // Updated textarea styles to use dark background, white text, and light green focus border
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-color-4/50 border border-color-7/10 focus:border-color-7 outline-none text-color-1 text-xs sm:text-sm overflow-y-auto resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    // Updated button background to vibrant green (color-3) and text to white (color-1)
                    className="button px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg bg-color-2 hover:opacity-80 text-color-1 font-bold text-xs sm:text-sm transition-all duration-200"
                  >
                    SUBMIT FORM
                  </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;